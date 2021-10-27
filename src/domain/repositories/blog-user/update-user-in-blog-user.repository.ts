import { BlogUserUserModel } from '@models/user/blog-user-user.model';

export interface IUpdateUserInBlogUserRepository {
  update(user: BlogUserUserModel): Promise<BlogUserUserModel>;
}
