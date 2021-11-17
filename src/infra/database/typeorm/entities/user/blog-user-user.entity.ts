import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class BlogUserUserEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  avatar: string;

  @Column()
  createdAt: Date;

  @Column()
  deletedAt?: Date;

  @Column()
  updatedAt: Date;
}
