import { getRepository, Repository } from 'typeorm';

import { ICreateUserInBlogUploadRepository } from '@domain/repositories/blog-upload/create-user-in-blog-upload.repository';
import { IFindByIdUserInBlogUploadRepository } from '@domain/repositories/blog-upload/find-by-id-user-in-blog-upload.repository';

import { BlogUploadUserModel } from '@models/user/blog-upload-user.model';

import { Either, left, right } from '@shared/utils/either';

import { BlogUploadUserEntity } from '../../entities/user/blog-upload-user.entity';

export default class BlogUploadTypeormRepository
  implements
    IFindByIdUserInBlogUploadRepository,
    ICreateUserInBlogUploadRepository
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

  public async findById(
    userId: string,
  ): Promise<Either<undefined, BlogUploadUserModel>> {
    const found = await this.ormRepository.findOne({
      where: { id: userId },
    });
    if (found === undefined) return left(found as undefined);
    return right(found);
  }
}
