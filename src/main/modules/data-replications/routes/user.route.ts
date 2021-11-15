import { Controller, Post, Req, Res } from '@nestjs/common';

import { adapterRoute } from '@main/adapters/express-route-adapter';
import { makeUserController } from '@main/factories/user.factory';

@Controller('/user')
export class UserRoute {
  @Post('')
  async create(@Req() request, @Res() response) {
    return adapterRoute(makeUserController())(request, response);
  }
}
