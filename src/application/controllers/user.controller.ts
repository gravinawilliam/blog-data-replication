import { IUserUseCase } from '@domain/use-cases/user.usecase';

import { IController } from '@shared/interfaces/controller.interface';
import { IHttpRequest } from '@shared/interfaces/http-request.interface';
import { IHttpResponse } from '@shared/interfaces/http-response.interface';
import { ok } from '@shared/utils/http-response';

export class UserController implements IController {
  constructor(private readonly userUseCase: IUserUseCase) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { type, user, key, producer } = httpRequest.body;

    await this.userUseCase.execute({
      type,
      user,
      key,
      producer,
    });

    return ok();
  }
}
