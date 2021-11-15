import { Module } from '@nestjs/common';

import { ArticleRoute } from './routes/article.route';
import { UserRoute } from './routes/user.route';

@Module({
  controllers: [ArticleRoute, UserRoute],
  providers: [],
})
export class DataReplicationsModule {}
