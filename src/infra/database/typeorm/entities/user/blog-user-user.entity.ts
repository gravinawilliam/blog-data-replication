import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class BlogUserUserEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  avatar: string;
}
