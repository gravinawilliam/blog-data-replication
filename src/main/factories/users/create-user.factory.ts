import { CreateUserController } from '@application/controllers/users/create-user.controller';
import { CreateUserUseCase } from '@application/use-cases/users/create-user.usecase';

import BlogArticleTypeormRepository from '@infra/database/typeorm/repositories/users/blog-article-typeorm.repository';
import BlogUploadTypeormRepository from '@infra/database/typeorm/repositories/users/blog-upload-typeorm.repository';

import { IController } from '@shared/interfaces/controller.interface';

export const makeCreateUserController = (): IController => {
  const blogUploadRepository = new BlogUploadTypeormRepository();
  const blogArticleRepository = new BlogArticleTypeormRepository();
  const createUserUseCase = new CreateUserUseCase(
    blogUploadRepository,
    blogArticleRepository,
  );
  return new CreateUserController(createUserUseCase);
};
