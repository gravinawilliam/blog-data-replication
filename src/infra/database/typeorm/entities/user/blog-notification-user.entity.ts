import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class BlogNotificationUserEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;

  @Column()
  deletedAt?: Date;

  @Column()
  updatedAt: Date;
}
