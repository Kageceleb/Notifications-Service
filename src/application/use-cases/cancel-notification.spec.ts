import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';

describe('Cancel notification', () => {
  it('should be able to Cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const CancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(notification);

    await CancelNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
