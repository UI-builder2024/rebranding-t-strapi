// config/middlewares.js

module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  // Remove 'strapi::body' string and replace with an object:
  {
    name: 'strapi::body',
    config: {
      formLimit: '100mb',    // Set form data size limit
      jsonLimit: '100mb',    // JSON body size limit
      textLimit: '100mb',    // Text body size limit
      formidable: {
        maxFileSize: 100 * 1024 * 1024, // 100MB in bytes
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
