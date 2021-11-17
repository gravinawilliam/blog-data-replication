import { getRepository, Repository } from 'typeorm';

import { ICreateUserInBlogNotificationRepository } from '@domain/repositories/blog-notification/user/create-user-in-blog-notification.repository';
import { IUpdateUserInBlogNotificationRepository } from '@domain/repositories/blog-notification/user/update-user-in-blog-article.repository';

import { BlogNotificationUserModel } from '@models/user/blog-notification-user.model';

import typeormConfig from '@main/config/typeorm.config';

import { Either, left, right } from '@shared/utils/either';

import { BlogNotificationUserEntity } from '../../entities/user/blog-notification-user.entity';

export default class BlogNotificationUsersTypeormRepository
  implements
    ICreateUserInBlogNotificationRepository,
    ICreateUserInBlogNotificationRepository,
    IUpdateUserInBlogNotificationRepository
{
  private ormRepository: Repository<BlogNotificationUserEntity>;

  constructor() {
    this.ormRepository = getRepository(
      BlogNotificationUserEntity,
      `${typeormConfig.blogNotification.name}`,
    );
  }

  public async update(
    params: BlogNotificationUserModel,
  ): Promise<BlogNotificationUserModel> {
    const updated = await this.ormRepository.save(params);
    return updated;
  }

  public async create(
    user: BlogNotificationUserModel,
  ): Promise<BlogNotificationUserModel> {
    const createdUser = this.ormRepository.create(user);
    const created = await this.ormRepository.save(createdUser);
    return created;
  }

  public async findByUserId(
    userId: string,
  ): Promise<Either<undefined, BlogNotificationUserModel>> {
    const found = await this.ormRepository.findOne({
      where: { id: userId },
    });
    if (found === undefined) return left(found as undefined);
    return right(found);
  }
}
