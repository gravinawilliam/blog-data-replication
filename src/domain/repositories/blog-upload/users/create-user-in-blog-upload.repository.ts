import { BlogUploadUserModel } from '@models/user/blog-upload-user.model';

export interface ICreateUserInBlogUploadRepository {
  create(user: BlogUploadUserModel): Promise<BlogUploadUserModel>;
}
