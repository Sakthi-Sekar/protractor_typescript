// const { BeforeAll, After, AfterAll, Status } = require("cucumber");
// import * as fs from "fs";
// import { browser } from "protractor";
// import { Config } from "../cucumberconfig";
//var { BeforeAll, After, AfterAll, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../cucmberconf";
import { BeforeAll, After, AfterAll, Status } from "cucumber";


BeforeAll({ timeout: 100 * 1000 }, async () => {
    await browser.get(config.baseurl)
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        //  const screenShot = await browser.takeScreenshot();
        //  this.attach(screenShot, "image/img");
        var attach = this.attach;
        return browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png, "base64");
            return attach(decodedImage, "image/png");
        });

    }
});

// AfterAll({ timeout: 100 * 1000 }, async () => {
//     await browser.quit();
// });

