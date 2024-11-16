'use strict';

/**
 * buck router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::buck.buck');
