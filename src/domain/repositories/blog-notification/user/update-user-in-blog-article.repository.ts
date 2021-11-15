import { BlogNotificationUserModel } from '@models/user/blog-notification-user.model';

export interface IUpdateUserInBlogNotificationRepository {
  update(user: BlogNotificationUserModel): Promise<BlogNotificationUserModel>;
}
