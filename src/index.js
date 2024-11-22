'use strict';

/**
 * Entry point for the Strapi application.
 * The `register` function runs before the app is initialized.
 * The `bootstrap` function runs before the app starts.
 */

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code, such as
   * adding custom middleware or modifying default behaviors.
   */
  async register({ strapi }) {
    // Example: Registering a custom plugin or modifying configurations.
    // strapi.config.middleware.push('customMiddleware');
    console.log('Registering Strapi configurations...');
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run initialization logic, or perform custom actions.
   */
  async bootstrap({ strapi }) {
    // Example: Initialize data or run custom startup logic.
    console.log('Bootstrapping Strapi application...');

    // For example, setting up initial roles or permissions.
    // const role = await strapi.plugins['users-permissions'].services.role.createRole({ name: 'Custom Role' });
  },
};
