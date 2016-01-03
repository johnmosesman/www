/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'www',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.mixpanel = {
    enabled: false,
    LOG_EVENT_TRACKING: true,
    token: 'd63dbeec1a56f2949a02c06a3e54216d'
  };

  ENV.api = {
    host: 'http://localhost:3399'
  }

  if (environment === 'production') {
    ENV.api.host = 'https://warmbodies-api.herokuapp.com';
  }

  if (environment === 'production') {
    console.log('Installing GA and Mixpanel');
    ENV.googleAnalytics = {
      webPropertyId: 'UA-71896843-1'
    };

    ENV.mixpanel.enabled = true;
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
