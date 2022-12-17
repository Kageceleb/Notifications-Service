import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notification-repository';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    SendNotification,
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [SendNotification, PrismaService, NotificationRepository],
})
export class DatabaseModule {}
