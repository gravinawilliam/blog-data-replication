import { IParamsUserUseCaseDTO } from '@dtos/user.dto';

export interface IUserUseCase {
  execute(params: IParamsUserUseCaseDTO): Promise<void>;
}
