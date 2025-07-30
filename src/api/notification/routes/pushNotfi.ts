export default [
  {
    method: 'POST',
    path: '/send-notification',
    handler: 'pushNotfi.sendNotification',
    config: {
      auth: false, // or true if you want to protect this route
    },
  },
];
