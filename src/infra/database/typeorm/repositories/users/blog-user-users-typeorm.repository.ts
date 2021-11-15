import { getRepository, Repository } from 'typeorm';

import { IFindByIdUserInBlogUserRepository } from '@domain/repositories/blog-user/find-by-id-user-in-blog-user.repository';
import { IUpdateUserInBlogUserRepository } from '@domain/repositories/blog-user/update-user-in-blog-user.repository';

import { BlogUserUserModel } from '@models/user/blog-user-user.model';

import typeormConfig from '@main/config/typeorm.config';

import { Either, left, right } from '@shared/utils/either';

import { BlogUserUserEntity } from '../../entities/user/blog-user-user.entity';

export default class BlogUserUsersTypeormRepository
  implements IFindByIdUserInBlogUserRepository, IUpdateUserInBlogUserRepository
{
  private ormRepository: Repository<BlogUserUserEntity>;

  constructor() {
    this.ormRepository = getRepository(
      BlogUserUserEntity,
      `${typeormConfig.blogUser.name}`,
    );
  }

  public async update(user: BlogUserUserModel): Promise<BlogUserUserModel> {
    const updated = await this.ormRepository.save(user);
    return updated;
  }

  public async findById(
    userId: string,
  ): Promise<Either<undefined, BlogUserUserModel>> {
    const found = await this.ormRepository.findOne({
      where: { id: userId },
    });
    if (found === undefined) return left(found as undefined);
    return right(found);
  }
}
