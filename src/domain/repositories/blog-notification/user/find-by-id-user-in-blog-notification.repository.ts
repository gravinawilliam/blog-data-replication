import { BlogNotificationUserModel } from '@models/user/blog-notification-user.model';

import { Either } from '@shared/utils/either';

export interface IFindByIdUserInBlogNotificationRepository {
  findByUserId(
    userId: string,
  ): Promise<Either<undefined, BlogNotificationUserModel>>;
}
