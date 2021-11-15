import { BlogArticleArticleModel } from '@models/article/blog-article-article.model';

export interface IUpdateArticleInBlogArticleRepository {
  update(article: BlogArticleArticleModel): Promise<BlogArticleArticleModel>;
}
