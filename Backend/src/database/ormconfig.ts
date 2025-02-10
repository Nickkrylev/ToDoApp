import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './entities/user.entity';
import { Task } from './entities/task.entity';
import { Notification } from './entities/notification.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'todo_db',
  entities: [User, Task, Notification], // Вказуємо правильні шляхи
  migrations: ['dist/migrations/*.js'], // Переконайтеся, що міграції в `dist/migrations`
  synchronize: false,
  migrationsRun: true,
});

export default AppDataSource;
