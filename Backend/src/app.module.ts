import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FocusModule } from './focus/focus.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [ UsersModule, TasksModule, NotificationsModule, FocusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
