"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filePath_1 = require("../utility/filePath");
let helper = new commonUtility_1.ElementHelper();
let dashboardPageLoc = new propertyfilereader_1.PropertiesFileReader(filePath_1.FilePath.dashBoardPage);
cucumber_1.Given(/^User launch the chrome browser$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: Browser opening");
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url);
        protractor_1.browser.getCurrentUrl().then(function (actualurl) {
            chai_1.expect(url).to.be.equals(actualurl);
        });
    });
});
cucumber_1.Then(/^Page Title should be "([^"]*)"$/, { timeout: 70000 }, function (expectedtitle) {
    return __awaiter(this, void 0, void 0, function* () {
        var acttitle = yield helper.getpageTitle();
        chai_1.expect(acttitle).to.be.equals(expectedtitle);
    });
});
cucumber_1.Then(/^User clicks on MWBooking$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        helper.scrollToDown(200);
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.link.mwbooking')).click();
    });
});
cucumber_1.Then(/^Click on Select Customer and select Atmecs$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.customer')).click();
    });
});
cucumber_1.Then(/^Click on Select Module and select Login$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.modules')).click();
    });
});
cucumber_1.Then(/^Click on Select Status and select Pass and verify$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.pass')).click();
        var passValue = yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.table.passData')).getText();
        console.log(passValue);
    });
});
cucumber_1.Then(/^Click on Select Status and select Fail and verify$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.fail')).click();
        var failValue = yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.table.passData')).getText();
        console.log(failValue);
    });
});
cucumber_1.Then(/^Click on Select Status and select Skip and verify$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.skip')).click();
        var skipValue = yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.dropdown.status.skip')).getText();
        console.log(skipValue);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNfZmFsY29uTW9iaWxlRGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9zdGVwc19mYWxjb25Nb2JpbGVEZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRFO0FBQzVFLDJDQUFvRDtBQUNwRCwrQkFBNkI7QUFDN0IsMkRBQXdEO0FBQ3hELHNFQUFxRTtBQUNyRSxrREFBK0M7QUFDL0MsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDakMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLHlDQUFvQixDQUFDLG1CQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFeEUsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ3RDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQWdCLEdBQUc7O1FBQ3RFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxTQUFTO1lBQzVDLGFBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsa0NBQWtDLEVBQUUsRUFB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