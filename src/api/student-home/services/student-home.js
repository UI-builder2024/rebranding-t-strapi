'use strict';

/**
 * student-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-home.student-home');
