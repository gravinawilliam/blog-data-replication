import { BlogUploadArticleModel } from '@models/article/blog-upload-article.model';

export interface IUpdateArticleInBlogUploadRepository {
  update(article: BlogUploadArticleModel): Promise<BlogUploadArticleModel>;
}
