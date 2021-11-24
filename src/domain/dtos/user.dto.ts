export type IUserUseCaseDTO = {
  id: string;
  name?: string;
  avatar?: string;
  email?: string;
  isReviewer?: boolean;
  deletedAt?: Date;
  updatedAt: Date;
  createdAt: Date;
};

export type IUpdateUserUseCaseDTO = {
  producer: string;
  user: IUserUseCaseDTO;
};

export type IParamsUserUseCaseDTO = {
  type: string;
  key: string;
  producer: string;
  user: IUserUseCaseDTO;
};
