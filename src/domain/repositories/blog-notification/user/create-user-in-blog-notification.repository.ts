import { BlogNotificationUserModel } from '@models/user/blog-notification-user.model';

export interface ICreateUserInBlogNotificationRepository {
  create(user: BlogNotificationUserModel): Promise<BlogNotificationUserModel>;
}
