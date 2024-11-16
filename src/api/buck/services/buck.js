'use strict';

/**
 * buck service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buck.buck');
