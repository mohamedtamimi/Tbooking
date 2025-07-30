
const axios = require('axios');

module.exports = {
  async sendPush(ctx) {
    const { token, title, body } = ctx.request.body;

    const response = await axios.post(
      'https://fcm.googleapis.com/fcm/send',
      {
        to: token,
        notification: {
          title,
          body
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'key=AIzaSyADxm4RsbTsIUl6k9vIT61lk28bbchBqh4'
        }
      }
    );

    ctx.send(response.data);
  }
};
