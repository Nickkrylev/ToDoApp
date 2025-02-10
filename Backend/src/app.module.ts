import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { FocusModule } from './focus/focus.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TasksModule } from './tasks/tasks.module';
import { TasksModule } from './tasks/tasks.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FocusModule } from './focus/focus.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule, TasksModule, NotificationsModule, FocusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
