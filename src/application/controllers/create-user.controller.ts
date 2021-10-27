import { ICreateUserUseCase } from '@domain/use-cases/users/create-user.usecase';

import { IController } from '@shared/interfaces/controller.interface';
import { IHttpRequest } from '@shared/interfaces/http-request.interface';
import { IHttpResponse } from '@shared/interfaces/http-response.interface';
import { created } from '@shared/utils/http-response';

export class CreateUserController implements IController {
  constructor(private readonly createUserUseCase: ICreateUserUseCase) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { id, name } = httpRequest.body;

    const createdUser = await this.createUserUseCase.execute({
      id,
      name,
    });

    return created(createdUser);
  }
}
