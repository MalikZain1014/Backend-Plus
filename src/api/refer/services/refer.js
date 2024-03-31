'use strict';

/**
 * refer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::refer.refer');
