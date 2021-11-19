import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { envConfig } from './env.config';

const {
  nodeEnv,
  dataBaseBlogArticle,
  dataBaseBlogUpload,
  dataBaseBlogUser,
  dataBaseBlogNotification,
} = envConfig;

const dir = nodeEnv === 'PROD' ? 'dist' : 'dist/src';
const extension = nodeEnv === 'TEST' ? 'ts' : 'js';

const paths = {
  entities: [
    `./${dir}/infra/database/typeorm/entities/**/*.${extension}`,
    `./${dir}/infra/database/typeorm/entities/*.${extension}`,
  ],
  migrations: [`./${dir}/infra/database/typeorm/migrations/*.${extension}`],
  migrationsDir: `./src/infra/database/typeorm/migrations/`,
};

type ITypeormConfig = {
  blogUser: any;
  blogArticle: any;
  blogUpload: any;
  blogNotification: any;
};

const typeormConfig: ITypeormConfig = {
  blogUser: {
    name: 'blog-user',
    type: dataBaseBlogUser.type,
    host: dataBaseBlogUser.host,
    port: dataBaseBlogUser.port,
    username: dataBaseBlogUser.username,
    password: dataBaseBlogUser.password,
    database: dataBaseBlogUser.database,
    entities: paths.entities,
    migrations: paths.migrations,
    synchronize: false,
    cli: {
      migrationsDir: paths.migrationsDir,
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
  blogArticle: {
    name: 'blog-article',
    type: dataBaseBlogArticle.type,
    host: dataBaseBlogArticle.host,
    port: dataBaseBlogArticle.port,
    username: dataBaseBlogArticle.username,
    password: dataBaseBlogArticle.password,
    database: dataBaseBlogArticle.database,
    entities: paths.entities,
    migrations: paths.migrations,
    synchronize: false,
    cli: {
      migrationsDir: paths.migrationsDir,
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
  blogUpload: {
    name: 'blog-upload',
    type: dataBaseBlogUpload.type,
    host: dataBaseBlogUpload.host,
    port: dataBaseBlogUpload.port,
    username: dataBaseBlogUpload.username,
    password: dataBaseBlogUpload.password,
    database: dataBaseBlogUpload.database,
    entities: paths.entities,
    migrations: paths.migrations,
    synchronize: false,
    cli: {
      migrationsDir: paths.migrationsDir,
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
  blogNotification: {
    name: 'blog-notification',
    type: dataBaseBlogNotification.type,
    host: dataBaseBlogNotification.host,
    port: dataBaseBlogNotification.port,
    username: dataBaseBlogNotification.username,
    password: dataBaseBlogNotification.password,
    database: dataBaseBlogNotification.database,
    entities: paths.entities,
    migrations: paths.migrations,
    synchronize: false,
    cli: {
      migrationsDir: paths.migrationsDir,
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
};

export default typeormConfig;
