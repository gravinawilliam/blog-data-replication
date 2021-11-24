import { ICreateUserInBlogArticleRepository } from '@domain/repositories/blog-article/user/create-user-in-blog-article.repository';
import { IFindByIdUserInBlogArticleRepository } from '@domain/repositories/blog-article/user/find-by-id-user-in-blog-article.repository';
import { IUpdateUserInBlogArticleRepository } from '@domain/repositories/blog-article/user/update-user-in-blog-article.repository';
import { ICreateUserInBlogNotificationRepository } from '@domain/repositories/blog-notification/user/create-user-in-blog-notification.repository';
import { IFindByIdUserInBlogNotificationRepository } from '@domain/repositories/blog-notification/user/find-by-id-user-in-blog-notification.repository';
import { IUpdateUserInBlogNotificationRepository } from '@domain/repositories/blog-notification/user/update-user-in-blog-article.repository';
import { ICreateUserInBlogUploadRepository } from '@domain/repositories/blog-upload/users/create-user-in-blog-upload.repository';
import { IFindByIdUserInBlogUploadRepository } from '@domain/repositories/blog-upload/users/find-by-id-user-in-blog-upload.repository';
import { IUpdateUserInBlogUploadRepository } from '@domain/repositories/blog-upload/users/update-user-in-blog-upload.repository';
import { IFindByIdUserInBlogUserRepository } from '@domain/repositories/blog-user/find-by-id-user-in-blog-user.repository';
import { IUpdateUserInBlogUserRepository } from '@domain/repositories/blog-user/update-user-in-blog-user.repository';
import { IUserUseCase } from '@domain/use-cases/user.usecase';

import {
  IParamsUserUseCaseDTO,
  IUpdateUserUseCaseDTO,
  IUserUseCaseDTO,
} from '@dtos/user.dto';

export class UserUseCase implements IUserUseCase {
  constructor(
    private readonly blogArticleRepository: ICreateUserInBlogArticleRepository &
      IFindByIdUserInBlogArticleRepository &
      IUpdateUserInBlogArticleRepository,
    private readonly blogUploadRepository: ICreateUserInBlogUploadRepository &
      IFindByIdUserInBlogUploadRepository &
      IUpdateUserInBlogUploadRepository,
    private readonly blogNotificationRepository: ICreateUserInBlogNotificationRepository &
      IFindByIdUserInBlogNotificationRepository &
      IUpdateUserInBlogNotificationRepository,
    private readonly blogUserRepository: IFindByIdUserInBlogUserRepository &
      IUpdateUserInBlogUserRepository,
  ) {}

  public async execute({
    user,
    key,
    producer,
    type,
  }: IParamsUserUseCaseDTO): Promise<void> {
    if (key !== process.env.KEY_SECRET) {
      throw new Error('key is not valid');
    }
    switch (type) {
      case 'create':
        await this.create(user);
        break;
      case 'update':
        await this.update({ user, producer });
        break;
      default:
        break;
    }
  }

  private async create({
    id,
    createdAt,
    updatedAt,
    avatar,
    deletedAt,
    email,
    name,
  }: IUserUseCaseDTO) {
    await this.blogArticleRepository.create({
      id,
      name,
      createdAt,
      updatedAt,
      avatar,
      deletedAt,
    });
    await this.blogUploadRepository.create({
      id,
      email,
      name,
      createdAt,
      updatedAt,
      deletedAt,
    });
    await this.blogNotificationRepository.create({
      id,
      email,
      name,
      createdAt,
      updatedAt,
      deletedAt,
    });
  }

  private async update({
    user: { id, updatedAt, avatar, deletedAt, email, name, isReviewer },
    producer,
  }: IUpdateUserUseCaseDTO) {
    if (producer !== 'blog-article') {
      const userBlogArticle = await this.blogArticleRepository.findByUserId(id);
      if (userBlogArticle.isRight()) {
        const user = userBlogArticle.value;
        if (updatedAt != null) user.updatedAt = updatedAt;
        if (avatar != null) user.avatar = avatar;
        if (deletedAt != null) user.deletedAt = deletedAt;
        if (name != null) user.name = name;
        await this.blogArticleRepository.update(user);
      }
    }

    if (producer !== 'blog-upload') {
      const userBlogUpload = await this.blogUploadRepository.findByUserId(id);
      if (userBlogUpload.isRight()) {
        const user = userBlogUpload.value;
        if (email != null) user.email = email;
        if (name != null) user.name = name;
        if (updatedAt != null) user.updatedAt = updatedAt;
        if (deletedAt != null) user.deletedAt = deletedAt;
        await this.blogUploadRepository.update(user);
      }
    }

    if (producer !== 'blog-notification') {
      const userBlogNotification =
        await this.blogNotificationRepository.findByUserId(id);
      if (userBlogNotification.isRight()) {
        const user = userBlogNotification.value;
        if (email != null) user.email = email;
        if (name != null) user.name = name;
        if (updatedAt != null) user.updatedAt = updatedAt;
        if (deletedAt != null) user.deletedAt = deletedAt;
        await this.blogNotificationRepository.update(user);
      }
    }

    if (producer !== 'blog-user') {
      const userBlogUser = await this.blogUserRepository.findById(id);
      if (userBlogUser.isRight()) {
        const user = userBlogUser.value;
        if (isReviewer != null) user.isReviewer = isReviewer;
        if (avatar != null) user.avatar = avatar;
        if (updatedAt != null) user.updatedAt = updatedAt;
        if (deletedAt != null) user.deletedAt = deletedAt;
        await this.blogUserRepository.update(user);
      }
    }
  }
}
