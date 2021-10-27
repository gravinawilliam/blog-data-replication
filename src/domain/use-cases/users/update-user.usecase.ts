import { IParamsUpdateUserUseCaseDTO } from '@dtos/update-avatar-user.dto';

export interface IUpdateUserUseCase {
  execute(params: IParamsUpdateUserUseCaseDTO): Promise<void>;
}
