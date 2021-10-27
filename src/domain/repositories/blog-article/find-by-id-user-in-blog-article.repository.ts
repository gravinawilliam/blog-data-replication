import { Either } from '@shared/utils/either';

import { BlogArticleUserModel } from '../../models/user/blog-article-user.model';

export interface IFindByIdUserInBlogArticleRepository {
  findById(userId: string): Promise<Either<undefined, BlogArticleUserModel>>;
}
