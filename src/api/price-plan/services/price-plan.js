'use strict';

/**
 * price-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-plan.price-plan');
