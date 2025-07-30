'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/send-notification',
      handler: 'pushNotfi.sendPush',
      config: {
        policies: [],
        auth: false, // optional: turn on if needed
      },
    },
  ],
};