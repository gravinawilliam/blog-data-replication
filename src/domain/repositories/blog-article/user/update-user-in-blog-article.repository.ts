import { BlogArticleUserModel } from '@models/user/blog-article-user.model';

export interface IUpdateUserInBlogArticleRepository {
  update(user: BlogArticleUserModel): Promise<BlogArticleUserModel>;
}
