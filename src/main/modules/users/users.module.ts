import { Module } from '@nestjs/common';

import { CreateUserController } from '@application/controllers/create-user.controller';

import { CreateUserRoute } from './routes/create-user.route';

@Module({
  controllers: [CreateUserRoute],
  providers: [CreateUserController],
})
export class UsersModule {}
