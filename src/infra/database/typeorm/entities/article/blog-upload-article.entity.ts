import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('articles')
export class BlogUploadArticleEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  reviewerId: string;

  @Column()
  createdAt: Date;

  @Column()
  deletedAt?: Date;

  @Column()
  updatedAt: Date;
}
