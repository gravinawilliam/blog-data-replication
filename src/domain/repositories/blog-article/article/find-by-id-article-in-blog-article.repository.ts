import { BlogArticleArticleModel } from '@models/article/blog-article-article.model';

import { Either } from '@shared/utils/either';

export interface IFindByIdArticleInBlogArticleRepository {
  findById(
    articleId: string,
  ): Promise<Either<undefined, BlogArticleArticleModel>>;
}
