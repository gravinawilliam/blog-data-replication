import { BlogUploadUserModel } from '@models/user/blog-upload-user.model';

import { Either } from '@shared/utils/either';

export interface IFindByIdUserInBlogUploadRepository {
  findByUserId(userId: string): Promise<Either<undefined, BlogUploadUserModel>>;
}
