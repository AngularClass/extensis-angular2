// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 250000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://localhost:300/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  // beforeLaunch: function() { ... it's either this or vanilla js.
  //   require('ts-node').register({
  //     project: 'e2e'
  //   });
  // },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};