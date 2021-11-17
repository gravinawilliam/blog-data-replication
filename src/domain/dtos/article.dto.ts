export type IArticleUseCaseDTO = {
  id: string;
  content?: string;
  thumbnail?: string;
  status?: string;
  reviewerId?: string;
  deletedAt?: Date;
  updatedAt?: Date;
  createdAt: Date;
};

export type IUpdateArticleUseCaseDTO = {
  producer: string;
  article: IArticleUseCaseDTO;
};

export type IParamsArticleUseCaseDTO = {
  type: string;
  key: string;
  producer: string;
  article: IArticleUseCaseDTO;
};
