'use strict';

/**
 * dos-hero service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dos-hero.dos-hero');
