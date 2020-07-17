import { Given, When, Then, After, Before, TableDefinition } from 'cucumber'
import { browser, element, by, $ } from 'protractor'
import { expect } from 'chai'
import { ElementHelper } from '../helper/commonUtility';
import { PropertiesFileReader } from '../utility/propertyfilereader';
import { FilePath } from '../utility/filePath';
let helper = new ElementHelper();
let dashboardPageLoc = new PropertiesFileReader(FilePath.dashBoardPage);

Given(/^User launch the chrome browser$/, { timeout: 40000 }, async function () {
    console.log("Step 1: Browser opening")
    browser.waitForAngularEnabled(true);
    browser.manage().window().maximize();
});

When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, async function (url) {
    await browser.get(url);
    browser.getCurrentUrl().then(function (actualurl) {
        expect(url).to.be.equals(actualurl)
    });

});

Then(/^Page Title should be "([^"]*)"$/, { timeout: 70000 }, async function (expectedtitle) {
    var acttitle = await helper.getpageTitle();
    expect(acttitle).to.be.equals(expectedtitle);
});
Then(/^User clicks on MWBooking$/, { timeout: 70000 }, async function()  {
     helper.scrollToDown(200);
    await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.link.mwbooking')).click();
});

Then(/^Click on Select Customer and select Atmecs$/, { timeout: 70000 }, async function() {
	await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.customer')).click();
});

Then(/^Click on Select Module and select Login$/, { timeout: 70000 }, async function()  {
	await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.modules')).click();
});

Then(/^Click on Select Status and select Pass and verify$/, { timeout: 70000 }, async function()  {
    await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.pass')).click();
    
    var passValue=await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.table.passData')).getText();
    console.log(passValue)
});

Then(/^Click on Select Status and select Fail and verify$/, { timeout: 70000 }, async function()  {
    await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.fail')).click();
    
    var failValue=await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.table.passData')).getText();
    console.log(failValue)
});

Then(/^Click on Select Status and select Skip and verify$/, { timeout: 70000 }, async function()  {
    await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.skip')).click();
   
    var skipValue=await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.skip')).getText();
    console.log(skipValue)

    // var skipValue=await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.table.passData')).getText();
//    var row=table.raw();
// row.forEach(function(value){
//     console.log("Expected: " + value[0])
// expect(skipValue).to.be.equal("Test Case Name Duration Status");
// var value=helper.getElementText(dashboardPageLoc.propertiesFileData('loc.filteredvalue')).then(function(value)
//  {
//     console.log(value)
//  });


});


