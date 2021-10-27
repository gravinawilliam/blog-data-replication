import { IParamsCreateUserUseCaseDTO } from '@dtos/create-user.dto';

export interface ICreateUserUseCase {
  execute(params: IParamsCreateUserUseCaseDTO): Promise<void>;
}
