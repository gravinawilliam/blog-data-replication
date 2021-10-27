import { Module } from '@nestjs/common';

import { CreateUserController } from '@application/controllers/users/create-user.controller';

import { CreateUserRoute } from './routes/create-user.route';

@Module({
  controllers: [CreateUserRoute],
  providers: [CreateUserController],
})
export class UsersModule {}
