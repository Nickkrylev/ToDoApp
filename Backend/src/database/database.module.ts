import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import AppDataSource from './ormconfig';
import { User } from './entities/user.entity';
import { Task } from './entities/task.entity';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options), 
    TypeOrmModule.forFeature([User, Task, Notification]), 
  ],
  exports: [TypeOrmModule], 
})
export class DatabaseModule {}
