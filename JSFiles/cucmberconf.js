"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    baseurl: "http://10.10.10.231:8082/#/app/dashboard",
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
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
            './stepDefinitions/steps_falconMobileDemo.js', './support/hook.js',
        ],
        format: 'json:report/cucumber_report.json',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjbWJlcmNvbmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWNtYmVyY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMkM7QUFFaEMsUUFBQSxNQUFNLEdBQVU7SUFDdkIsNENBQTRDO0lBQzVDLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFLDBDQUEwQztJQUNuRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2Qsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQywwQ0FBMEM7SUFFNUMsQ0FBQztJQUdILHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sOEJBQThCO0lBQzlCLE9BQU87SUFDUCxNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLE1BQU07SUFDTixLQUFLO0lBQ0gsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsc0NBQXNDLENBQUM7SUFFbkQsV0FBVztJQUNYLDJFQUEyRTtJQUMzRSwrREFBK0Q7SUFDL0QsS0FBSztJQUNMLFlBQVksRUFBRTtRQUNOLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCw2Q0FBNkMsRUFBRSxtQkFBbUI7U0FDbkU7UUFDRCxNQUFNLEVBQUUsa0NBQWtDO0tBRTNDO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRWpELElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxNQUFNLEVBQUUsNkJBQTZCO1lBQ3JDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDckI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0EsQ0FBQyJ9