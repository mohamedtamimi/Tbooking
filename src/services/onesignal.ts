// services/onesignal.js
const axios = require('axios');

const sendNotification = async ( message) => {
  const oneSignalAppId = '248e4ced-4f25-4506-a54c-aaa0db975832';
  const oneSignalApiKey = 'os_v2_app_eshez3kpevcqnjkmvkqnxf2ygib6z73vi6ruxuu7k3ptvftsxdo4nlz57s5exvap3q7es7zl5r7bkub2vsjb4mypwjx7hs3fq6czdbq';

  const notificationData = {
    app_id: oneSignalAppId,
    // include_player_ids: [deviceToken], // Device token (from your web app)
    headings: { en: 'New Appointment Created' },
    contents: { en: message },
  };

  try {
    await axios.post('https://api.onesignal.com/notifications', notificationData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${oneSignalApiKey}`,
      },
    });
    console.log('Notification sent successfully!');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

module.exports = {
  sendNotification,
};
