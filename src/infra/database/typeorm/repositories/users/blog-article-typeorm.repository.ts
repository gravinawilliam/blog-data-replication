import { getRepository, Repository } from 'typeorm';

import { ICreateUserInBlogArticleRepository } from '@domain/repositories/blog-article/create-user-in-blog-article.repository';
import { IFindByIdUserInBlogArticleRepository } from '@domain/repositories/blog-article/find-by-id-user-in-blog-article.repository';
import { IUpdateUserInBlogArticleRepository } from '@domain/repositories/blog-article/update-user-in-blog-article.repository';

import { BlogArticleUserModel } from '@models/user/blog-article-user.model';

import typeormConfig from '@main/config/typeorm.config';

import { Either, left, right } from '@shared/utils/either';

import { BlogArticleUserEntity } from '../../entities/user/blog-article-user.entity';

export default class BlogArticleTypeormRepository
  implements
    ICreateUserInBlogArticleRepository,
    IFindByIdUserInBlogArticleRepository,
    IUpdateUserInBlogArticleRepository
{
  private ormRepository: Repository<BlogArticleUserEntity>;

  constructor() {
    this.ormRepository = getRepository(
      BlogArticleUserEntity,
      `${typeormConfig.blogArticle.name}`,
    );
  }

  public async create({
    id,
    name,
  }: BlogArticleUserModel): Promise<BlogArticleUserModel> {
    const createdUser = this.ormRepository.create({ id, name });

    const created = await this.ormRepository.save(createdUser);
    return created;
  }

  public async findById(
    userId: string,
  ): Promise<Either<undefined, BlogArticleUserModel>> {
    const found = await this.ormRepository.findOne({
      where: { id: userId },
    });
    if (found === undefined) return left(found as undefined);
    return right(found);
  }

  public async update({
    id,
    name,
  }: BlogArticleUserModel): Promise<BlogArticleUserModel> {
    const updated = await this.ormRepository.save({
      id,
      name,
    });
    return updated;
  }
}
