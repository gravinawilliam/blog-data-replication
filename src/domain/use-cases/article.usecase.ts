import { IParamsArticleUseCaseDTO } from '@dtos/article.dto';

export interface IArticleUseCase {
  execute(params: IParamsArticleUseCaseDTO): Promise<void>;
}
