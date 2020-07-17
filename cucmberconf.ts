import {Config, browser} from "protractor";

export let config:Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
    baseurl: "http://10.10.10.231:8082/#/app/dashboard",
    onPrepare: () => {
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      //  Reporter.createDirectory(jsonReports);
  
    },
  

  // multiCapabilities:[
  //   {
  //     "browserName": 'chrome'
  //   },
  //   {
  //   "browserName": 'firefox'
  //   }
  // ],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/falconMobileDemo.feature'],

// suites:{
// falconMobileDemo :['JSFiles/stepDefinitions/steps_falconMobileDemo.js'],
// clickByLoop:['JSFiles/stepDefinitions/steps_clickByLoop.js']
// },
cucumberOpts: {
        // require step definitions
        require: [
          './stepDefinitions/steps_falconMobileDemo.js', './support/hook.js', // accepts a glob
        ],
        format: 'json:report/cucumber_report.json',
        // tags:'@dashboard or @recentrun',
      },
      onComplete: () => {
        var reporter = require('cucumber-html-reporter');
    
        var options = {
          theme: 'bootstrap',
          jsonFile: 'report/cucumber_report.json',
          output: 'report/cucumber_report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
            "App Version": "0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  83.0.4103.116",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
          }
        };
    
        reporter.generate(options);
      },
      };

  
  