import { Notification } from '@application/entities/notifications';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models(mapper)/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, recipientId, content } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
