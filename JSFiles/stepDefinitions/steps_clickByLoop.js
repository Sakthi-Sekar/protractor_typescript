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
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filePath_1 = require("../utility/filePath");
let helper = new commonUtility_1.ElementHelper();
let dashboardPageLoc = new propertyfilereader_1.PropertiesFileReader(filePath_1.FilePath.dashBoardPage);
cucumber_1.When(/^Open the website "([^"]*)"$/, { timeout: 20000 }, (url) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.manage().window().maximize();
    yield protractor_1.browser.get(url);
}));
cucumber_1.When(/^Click all the tab in main navigation$/, { timeout: 20000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element.all(protractor_1.by.css('.ng-scope.md-ink-ripple')).each(function (label) {
        label.click();
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNfY2xpY2tCeUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHNfY2xpY2tCeUxvb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEU7QUFDNUUsMkNBQW9EO0FBRXBELDJEQUF3RDtBQUN4RCxzRUFBcUU7QUFDckUsa0RBQStDO0FBQy9DLElBQUksTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ2pDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBb0IsQ0FBQyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXhFLGVBQUksQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ25FLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQzNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBUztRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=