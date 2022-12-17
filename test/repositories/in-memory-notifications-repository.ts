import { Notification } from '@application/entities/notifications';
import { NotificationRepository } from '@application/repositories/notification-repository';
import { isTemplateExpression } from 'typescript';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );
    if (!notification) {
      return null;
    }
    return notification;
  }
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }
  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }
  async save(notification: Notification): Promise<void> {
    const notificatinIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificatinIndex >= 0) {
      this.notifications[notificatinIndex] = notification;
    }
  }
}
