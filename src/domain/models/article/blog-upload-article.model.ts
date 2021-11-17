import { BaseModel } from '@models/_base.model';

export class BlogUploadArticleModel extends BaseModel {
  content?: string;

  thumbnail?: string;

  reviewerId?: string;
}
