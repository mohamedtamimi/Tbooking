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
    // ...
  });