import { Notification } from '@application/entities/notifications';
import { NotificationRepository } from '@application/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notification,
    );
  }
  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
