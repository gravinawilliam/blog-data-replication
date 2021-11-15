import { UserController } from '@application/controllers/user.controller';
import { UserUseCase } from '@application/use-cases/user.usecase';

import BlogArticleUsersTypeormRepository from '@infra/database/typeorm/repositories/users/blog-article-users-typeorm.repository';
import BlogNotificationUsersTypeormRepository from '@infra/database/typeorm/repositories/users/blog-notification-users-typeorm.repository';
import BlogUploadUsersTypeormRepository from '@infra/database/typeorm/repositories/users/blog-upload-users-typeorm.repository';
import BlogUserUsersTypeormRepository from '@infra/database/typeorm/repositories/users/blog-user-users-typeorm.repository';

import { IController } from '@shared/interfaces/controller.interface';

export const makeUserController = (): IController => {
  const blogArticleRepository = new BlogArticleUsersTypeormRepository();
  const blogUploadRepository = new BlogUploadUsersTypeormRepository();
  const blogNotificationRepository =
    new BlogNotificationUsersTypeormRepository();
  const blogUserRepository = new BlogUserUsersTypeormRepository();
  const userUseCase = new UserUseCase(
    blogArticleRepository,
    blogUploadRepository,
    blogNotificationRepository,
    blogUserRepository,
  );

  return new UserController(userUseCase);
};
