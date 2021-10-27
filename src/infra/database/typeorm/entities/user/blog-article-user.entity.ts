import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class BlogArticleUserEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
}
