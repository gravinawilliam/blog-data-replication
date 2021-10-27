import 'dotenv/config';

export const envConfig = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.API_PORT || 3000,
  dataBaseBlogUser: {
    type: process.env.DB_BLOG_USER_TYPE,
    host: process.env.DB_BLOG_USER_HOST,
    port: parseInt(process.env.DB_BLOG_USER_PORT, 10),
    username: process.env.DB_BLOG_USER_USERNAME,
    password: process.env.DB_BLOG_USER_PASSWORD,
    database: process.env.DB_BLOG_USER_DATABASE,
  },
  dataBaseBlogArticle: {
    type: process.env.DB_BLOG_ARTICLE_TYPE,
    host: process.env.DB_BLOG_ARTICLE_HOST,
    port: parseInt(process.env.DB_BLOG_ARTICLE_PORT, 10),
    username: process.env.DB_BLOG_ARTICLE_USERNAME,
    password: process.env.DB_BLOG_ARTICLE_PASSWORD,
    database: process.env.DB_BLOG_ARTICLE_DATABASE,
  },
  dataBaseBlogUpload: {
    type: process.env.DB_BLOG_UPLOAD_TYPE,
    host: process.env.DB_BLOG_UPLOAD_HOST,
    port: parseInt(process.env.DB_BLOG_UPLOAD_PORT, 10),
    username: process.env.DB_BLOG_UPLOAD_USERNAME,
    password: process.env.DB_BLOG_UPLOAD_PASSWORD,
    database: process.env.DB_BLOG_UPLOAD_DATABASE,
  },
};
