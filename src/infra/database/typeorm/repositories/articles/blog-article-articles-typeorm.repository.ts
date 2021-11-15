import { getRepository, Repository } from 'typeorm';

import { IFindByIdArticleInBlogArticleRepository } from '@domain/repositories/blog-article/article/find-by-id-article-in-blog-article.repository';
import { IUpdateArticleInBlogArticleRepository } from '@domain/repositories/blog-article/article/update-article-in-blog-article.repository';

import { BlogArticleArticleModel } from '@models/article/blog-article-article.model';

import { Either, left, right } from '@shared/utils/either';

import { BlogArticleArticleEntity } from '../../entities/article/blog-article-article.entity';

export default class BlogArticleArticlesTypeormRepository
  implements
    IFindByIdArticleInBlogArticleRepository,
    IUpdateArticleInBlogArticleRepository
{
  private ormRepository: Repository<BlogArticleArticleEntity>;

  constructor() {
    this.ormRepository = getRepository(
      BlogArticleArticleEntity,
      `blog-article`,
    );
  }

  public async update(
    article: BlogArticleArticleModel,
  ): Promise<BlogArticleArticleModel> {
    const updated = await this.ormRepository.save(article);
    return updated;
  }

  public async findById(
    articleId: string,
  ): Promise<Either<undefined, BlogArticleArticleModel>> {
    const found = await this.ormRepository.findOne({
      where: { id: articleId },
    });
    if (found === undefined) return left(found as undefined);
    return right(found);
  }
}
