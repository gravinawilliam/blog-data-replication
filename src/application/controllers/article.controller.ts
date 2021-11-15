import { IArticleUseCase } from '@domain/use-cases/article.usecase';

import { IController } from '@shared/interfaces/controller.interface';
import { IHttpRequest } from '@shared/interfaces/http-request.interface';
import { IHttpResponse } from '@shared/interfaces/http-response.interface';
import { ok } from '@shared/utils/http-response';

export class ArticleController implements IController {
  constructor(private readonly createArticleUseCase: IArticleUseCase) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { type, article, key, producer } = httpRequest.body;

    await this.createArticleUseCase.execute({
      type,
      article,
      key,
      producer,
    });

    return ok();
  }
}
