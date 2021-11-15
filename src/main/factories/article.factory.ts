import { ArticleController } from '@application/controllers/article.controller';
import { ArticleUseCase } from '@application/use-cases/article.usecase';

import BlogArticleArticlesTypeormRepository from '@infra/database/typeorm/repositories/articles/blog-article-articles-typeorm.repository';
import BlogUploadArticlesTypeormRepository from '@infra/database/typeorm/repositories/articles/blog-upload-articles-typeorm.repository';

import { IController } from '@shared/interfaces/controller.interface';

export const makeArticleController = (): IController => {
  const blogArticleArticlesRepository =
    new BlogArticleArticlesTypeormRepository();
  const blogUploadArticlesRepository =
    new BlogUploadArticlesTypeormRepository();
  const articleUseCase = new ArticleUseCase(
    blogArticleArticlesRepository,
    blogUploadArticlesRepository,
  );

  return new ArticleController(articleUseCase);
};
