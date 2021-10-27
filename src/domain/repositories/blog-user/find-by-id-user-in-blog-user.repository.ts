import { BlogUserUserModel } from '@models/user/blog-user-user.model';

import { Either } from '@shared/utils/either';

export interface IFindByIdUserInBlogUserRepository {
  findById(userId: string): Promise<Either<undefined, BlogUserUserModel>>;
}
