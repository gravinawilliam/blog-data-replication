import { BlogUploadArticleModel } from '@models/article/blog-upload-article.model';

export interface ICreateArticleInBlogUploadRepository {
  create(article: BlogUploadArticleModel): Promise<BlogUploadArticleModel>;
}
