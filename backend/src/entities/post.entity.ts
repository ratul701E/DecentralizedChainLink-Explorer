import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { CommentEntity } from './comment.entity';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  postedOn: Date;

  @ManyToOne(() => UserEntity, user => user.posts, {nullable: true})
  user: UserEntity;

  @OneToMany(() => CommentEntity, comment => comment.post, {nullable: true})
  comments: CommentEntity[];

  @Column({default: false})
  isEdited: boolean
}
