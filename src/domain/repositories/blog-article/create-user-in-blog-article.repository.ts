import { BlogArticleUserModel } from '@models/user/blog-article-user.model';

export interface ICreateUserInBlogArticleRepository {
  create(user: BlogArticleUserModel): Promise<BlogArticleUserModel>;
}
