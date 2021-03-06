// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {
  // The address of a running selenium server.
  seleniumServerJar: 'selenium-server-standalone-2.52.0.jar', // Make use you check the version in the folder
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  specs: ['example_spec.js'],
  capabilities: {
    'browserName': 'firefox'
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000
  }
};