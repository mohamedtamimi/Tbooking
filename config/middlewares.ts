export default [
  // {
  //   name: "global::logger", // Register your logger middleware
  //   config: {},
  // },
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      // origin: ['http://mohamedtamimi-001-site12.ktempurl.com', 'http://localhost:4200'],
      origin: ['*'], // ضف موقعك هنا
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: '*',
      credentials: true
    },
  },
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];