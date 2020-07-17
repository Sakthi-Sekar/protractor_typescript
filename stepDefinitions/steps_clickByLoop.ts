import { Given, When, Then, After, Before, TableDefinition } from 'cucumber'
import { browser, element, by, $ } from 'protractor'
import { expect } from 'chai'
import { ElementHelper } from '../helper/commonUtility';
import { PropertiesFileReader } from '../utility/propertyfilereader';
import { FilePath } from '../utility/filePath';
let helper = new ElementHelper();
let dashboardPageLoc = new PropertiesFileReader(FilePath.dashBoardPage);

When(/^Open the website "([^"]*)"$/, { timeout: 20000 }, async (url) => {
    await browser.manage().window().maximize();
    await browser.get(url);
 });
 

 When(/^Click all the tab in main navigation$/, { timeout: 20000 }, async () => {
    await element.all(by.css('.ng-scope.md-ink-ripple')).each(function (label:any) {
         label.click();
 });
 });
