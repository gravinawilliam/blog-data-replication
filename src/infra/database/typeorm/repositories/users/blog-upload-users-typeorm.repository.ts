import { getRepository, Repository } from 'typeorm';

import { ICreateUserInBlogUploadRepository } from '@domain/repositories/blog-upload/users/create-user-in-blog-upload.repository';
import { IFindByIdUserInBlogUploadRepository } from '@domain/repositories/blog-upload/users/find-by-id-user-in-blog-upload.repository';
import { IUpdateUserInBlogUploadRepository } from '@domain/repositories/blog-upload/users/update-user-in-blog-upload.repository';

import { BlogUploadUserModel } from '@models/user/blog-upload-user.model';

import { Either, left, right } from '@shared/utils/either';

import { BlogUploadUserEntity } from '../../entities/user/blog-upload-user.entity';

export default class BlogUploadUsersTypeormRepository
  implements
    IFindByIdUserInBlogUploadRepository,
    ICreateUserInBlogUploadRepository,
    IUpdateUserInBlogUploadRepository
{
  private ormRepository: Repository<BlogUploadUserEntity>;

  constructor() {
    this.ormRepository = getRepository(BlogUploadUserEntity, `blog-upload`);
  }

  public async create(user: BlogUploadUserModel): Promise<BlogUploadUserModel> {
    const createdUser = this.ormRepository.create(user);
    const created = await this.ormRepository.save(createdUser);
    return created;
  }

  public async findByUserId(
    userId: string,
  ): Promise<Either<undefined, BlogUploadUserModel>> {
    const found = await this.ormRepository.findOne({
      where: { id: userId },
    });
    if (found === undefined) return left(found as undefined);
    return right(found);
  }

  public async update(
    params: BlogUploadUserModel,
  ): Promise<BlogUploadUserModel> {
    const updated = await this.ormRepository.save(params);
    return updated;
  }
}
