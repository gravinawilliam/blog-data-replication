import { BlogUploadUserModel } from '@models/user/blog-upload-user.model';

import { Either } from '@shared/utils/either';

export interface IFindByIdUserInBlogUploadRepository {
  findById(userId: string): Promise<Either<undefined, BlogUploadUserModel>>;
}
