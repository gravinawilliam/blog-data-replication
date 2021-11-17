import { BlogUploadUserModel } from '@models/user/blog-upload-user.model';

export interface IUpdateUserInBlogUploadRepository {
  update(user: BlogUploadUserModel): Promise<BlogUploadUserModel>;
}
