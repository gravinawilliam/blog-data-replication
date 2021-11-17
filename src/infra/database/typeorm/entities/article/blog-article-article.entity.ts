import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('articles')
export class BlogArticleArticleEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  content?: string;

  @Column()
  status?: string;

  @Column()
  reviewerId?: string;

  @Column()
  thumbnail?: string;

  @Column()
  createdAt: Date;

  @Column()
  deletedAt?: Date;

  @Column()
  updatedAt: Date;
}
