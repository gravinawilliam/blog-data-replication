import { getRepository, Repository } from 'typeorm';

import { ICreateArticleInBlogUploadRepository } from '@domain/repositories/blog-upload/articles/create-article-in-blog-upload.repository';
import { IFindByIdArticleInBlogUploadRepository } from '@domain/repositories/blog-upload/articles/find-by-id-article-in-blog-upload.repository';
import { IUpdateArticleInBlogUploadRepository } from '@domain/repositories/blog-upload/articles/update-article-in-blog-upload.repository';

import { BlogUploadArticleModel } from '@models/article/blog-upload-article.model';

import { Either, left, right } from '@shared/utils/either';

import { BlogUploadArticleEntity } from '../../entities/article/blog-upload-article.entity';

export default class BlogUploadArticlesTypeormRepository
  implements
    ICreateArticleInBlogUploadRepository,
    IFindByIdArticleInBlogUploadRepository,
    IUpdateArticleInBlogUploadRepository
{
  private ormRepository: Repository<BlogUploadArticleEntity>;

  constructor() {
    this.ormRepository = getRepository(BlogUploadArticleEntity, `blog-upload`);
  }

  public async update(
    article: BlogUploadArticleModel,
  ): Promise<BlogUploadArticleModel> {
    const updated = await this.ormRepository.save(article);
    return updated;
  }

  public async findById(
    articleId: string,
  ): Promise<Either<undefined, BlogUploadArticleModel>> {
    const found = await this.ormRepository.findOne({
      where: { id: articleId },
    });
    if (found === undefined) return left(found as undefined);
    return right(found);
  }

  public async create(
    article: BlogUploadArticleModel,
  ): Promise<BlogUploadArticleModel> {
    const createdArticle = this.ormRepository.create(article);
    const created = await this.ormRepository.save(createdArticle);
    return created;
  }
}
