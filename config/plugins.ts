module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('STRAPI_API_KEY'),
        },
        settings: {
          defaultFrom: 'medhatalathmna@gmail.com',
          defaultReplyTo: 'madhatalathmna@gmail.com',
        },
      },
    },
  //   'expo-notifications': {
  //   enabled: true,
  //   config: {
  //     expoAppToken: 'mzBQHHKyTi0TPJoza_0H0R3E-2FdsWtCnTEONiIi', // leave empty if you’re using personal Expo push tokens
  //   },
  // },
    
    // ...
  });