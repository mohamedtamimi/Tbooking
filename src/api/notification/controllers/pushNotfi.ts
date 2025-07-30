import { Strapi } from '@strapi/strapi';

interface NotificationPayload {
  to: string[];        // Array of Expo push tokens or FCM tokens
  title: string;
  body: string;
  data?: Record<string, any>;
}

export default ({ strapi }: { strapi: Strapi }) => ({
  async sendNotification(ctx) {
    const { to, title, body, data } = ctx.request.body as NotificationPayload;

    if (!to || !title || !body) {
      ctx.throw(400, 'Missing required fields: to, title, or body');
    }

    try {
      await strapi
        .plugin('expo-notifications')
        .service('send')
        .sendNotification({ to, title, body, data });

      ctx.send({ message: 'Notification sent successfully' });
    } catch (error) {
      ctx.throw(500, `Failed to send notification: ${error.message}`);
    }
  },
});
