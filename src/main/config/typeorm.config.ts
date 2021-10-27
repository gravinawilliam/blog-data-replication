import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { envConfig } from './env.config';

const { nodeEnv, dataBaseBlogArticle, dataBaseBlogUpload, dataBaseBlogUser } =
  envConfig;

const dir = nodeEnv === 'TEST' ? 'src' : 'dist/src';
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
};

export default typeormConfig;
