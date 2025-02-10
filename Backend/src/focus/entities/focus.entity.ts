// src/focus/entities/focus-session.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Task } from '../../tasks/entities/task.entity';

@Entity({ name: 'focus_sessions' })
export class FocusSession {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.focusSessions, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Task, (task) => task.id, { nullable: true, onDelete: 'SET NULL' })
  task: Task;

  @Column({ type: 'datetime' })
  start_time: Date;

  @Column({ type: 'datetime', nullable: true })
  end_time: Date;

  @Column({ type: 'int', default: 0 })
  duration: number; // у хвилинах

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
