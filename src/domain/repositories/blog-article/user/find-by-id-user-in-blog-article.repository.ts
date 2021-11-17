import { BlogArticleUserModel } from '@models/user/blog-article-user.model';

import { Either } from '@shared/utils/either';

export interface IFindByIdUserInBlogArticleRepository {
  findByUserId(
    userId: string,
  ): Promise<Either<undefined, BlogArticleUserModel>>;
}
