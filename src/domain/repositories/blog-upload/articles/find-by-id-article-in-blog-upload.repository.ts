import { BlogUploadArticleModel } from '@models/article/blog-upload-article.model';

import { Either } from '@shared/utils/either';

export interface IFindByIdArticleInBlogUploadRepository {
  findById(
    articleId: string,
  ): Promise<Either<undefined, BlogUploadArticleModel>>;
}
