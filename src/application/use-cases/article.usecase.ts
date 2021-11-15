import { IFindByIdArticleInBlogArticleRepository } from '@domain/repositories/blog-article/article/find-by-id-article-in-blog-article.repository';
import { IUpdateArticleInBlogArticleRepository } from '@domain/repositories/blog-article/article/update-article-in-blog-article.repository';
import { ICreateArticleInBlogUploadRepository } from '@domain/repositories/blog-upload/articles/create-article-in-blog-upload.repository';
import { IFindByIdArticleInBlogUploadRepository } from '@domain/repositories/blog-upload/articles/find-by-id-article-in-blog-upload.repository';
import { IUpdateArticleInBlogUploadRepository } from '@domain/repositories/blog-upload/articles/update-article-in-blog-upload.repository';
import { IArticleUseCase } from '@domain/use-cases/article.usecase';

import {
  IArticleUseCaseDTO,
  IParamsArticleUseCaseDTO,
  IUpdateArticleUseCaseDTO,
} from '@dtos/article.dto';

export class ArticleUseCase implements IArticleUseCase {
  constructor(
    private readonly blogArticleArticlesRepository: IUpdateArticleInBlogArticleRepository &
      IFindByIdArticleInBlogArticleRepository,
    private readonly blogUploadArticlesRepository: IUpdateArticleInBlogUploadRepository &
      IFindByIdArticleInBlogUploadRepository &
      ICreateArticleInBlogUploadRepository,
  ) {}

  public async execute({
    article,
    key,
    type,
    producer,
  }: IParamsArticleUseCaseDTO): Promise<void> {
    if (key !== process.env.KEY_SECRET) {
      throw new Error('key is not valid');
    }
    switch (type) {
      case 'create':
        await this.create(article);
        break;
      case 'update':
        await this.update({ article, producer });
        break;
      default:
        break;
    }
  }

  private async create({
    id,
    createdAt,
    updatedAt,
    reviewerId,
  }: IArticleUseCaseDTO) {
    await this.blogUploadArticlesRepository.create({
      id,
      createdAt,
      updatedAt,
      reviewerId,
    });
  }

  private async update({
    article: {
      id,
      content,
      deletedAt,
      reviewerId,
      status,
      thumbnail,
      updatedAt,
    },
    producer,
  }: IUpdateArticleUseCaseDTO) {
    if (producer !== 'blog-article') {
      const articleBlogArticle =
        await this.blogArticleArticlesRepository.findById(id);
      if (articleBlogArticle.isRight()) {
        const article = articleBlogArticle.value;
        if (content != null) article.content = content;
        if (thumbnail != null) article.thumbnail = thumbnail;
        if (status != null) article.status = status;
        if (updatedAt != null) article.updatedAt = updatedAt;
        await this.blogArticleArticlesRepository.update(article);
      }
    }

    if (producer !== 'blog-upload') {
      const articleBlogUpload =
        await this.blogUploadArticlesRepository.findById(id);
      if (articleBlogUpload.isRight()) {
        const article = articleBlogUpload.value;
        if (content != null) article.content = content;
        if (thumbnail != null) article.thumbnail = thumbnail;
        if (deletedAt != null) article.deletedAt = deletedAt;
        if (updatedAt != null) article.updatedAt = updatedAt;
        if (reviewerId != null) article.reviewerId = reviewerId;
        await this.blogUploadArticlesRepository.update(article);
      }
    }
  }
}
