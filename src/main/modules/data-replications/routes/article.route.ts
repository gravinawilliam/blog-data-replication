import { Controller, Post, Req, Res } from '@nestjs/common';

import { adapterRoute } from '@main/adapters/express-route-adapter';
import { makeArticleController } from '@main/factories/article.factory';

@Controller('/article')
export class ArticleRoute {
  @Post('')
  async create(@Req() request, @Res() response) {
    return adapterRoute(makeArticleController())(request, response);
  }
}
