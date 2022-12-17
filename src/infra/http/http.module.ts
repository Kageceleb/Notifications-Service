import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { PrismaNotificationsRepository } from '../database/prisma/repositories/prisma-notifications-repository';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, PrismaNotificationsRepository],
})
export class HttpModule {}
