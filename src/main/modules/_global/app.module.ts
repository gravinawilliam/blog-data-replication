import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeormConfig from '@main/config/typeorm.config';

import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeormConfig.blogUser),
    TypeOrmModule.forRoot(typeormConfig.blogArticle),
    TypeOrmModule.forRoot(typeormConfig.blogUpload),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
