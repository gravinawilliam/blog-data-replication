import { Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class BlogUploadUserEntity {
  @PrimaryColumn('uuid')
  id: string;
}
