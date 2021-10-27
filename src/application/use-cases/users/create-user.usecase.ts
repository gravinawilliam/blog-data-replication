import { ICreateUserInBlogArticleRepository } from '@domain/repositories/blog-article/create-user-in-blog-article.repository';
import { IFindByIdUserInBlogArticleRepository } from '@domain/repositories/blog-article/find-by-id-user-in-blog-article.repository';
import { ICreateUserInBlogUploadRepository } from '@domain/repositories/blog-upload/create-user-in-blog-upload.repository';
import { IFindByIdUserInBlogUploadRepository } from '@domain/repositories/blog-upload/find-by-id-user-in-blog-upload.repository';
import { ICreateUserUseCase } from '@domain/use-cases/users/create-user.usecase';

import { IParamsCreateUserUseCaseDTO } from '@dtos/create-user.dto';

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private readonly blogUploadRepository: ICreateUserInBlogUploadRepository &
      IFindByIdUserInBlogUploadRepository,
    private readonly blogArticleRepository: ICreateUserInBlogArticleRepository &
      IFindByIdUserInBlogArticleRepository,
  ) {}

  public async execute({
    id,
    name,
  }: IParamsCreateUserUseCaseDTO): Promise<void> {
    const userInBlogArticleExists = await this.blogArticleRepository.findById(
      id,
    );
    if (userInBlogArticleExists.isLeft()) {
      await this.blogArticleRepository.create({
        id,
        name,
      });
    }

    const userInBlogUploadExists = await this.blogUploadRepository.findById(id);
    if (userInBlogUploadExists.isLeft()) {
      await this.blogUploadRepository.create({
        id,
      });
    }
  }
}
