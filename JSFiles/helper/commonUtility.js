"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementHelper = void 0;
const protractor_1 = require("protractor");
class ElementHelper {
    //Element Loctors
    locatortype(locator) {
        var elementObj;
        var arrayLocator = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = protractor_1.element(protractor_1.by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = protractor_1.element(protractor_1.by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = protractor_1.element(protractor_1.by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = protractor_1.element(protractor_1.by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = protractor_1.element(protractor_1.by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = protractor_1.element(protractor_1.by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = protractor_1.element(protractor_1.by.model(arrayLocator[1]));
                break;
            case "BIND":
                elementObj = protractor_1.element(protractor_1.by.exactBinding(arrayLocator[1]));
                break;
            case "ButtonText":
                elementObj = protractor_1.element(protractor_1.by.buttonText(arrayLocator[1]));
                break;
            case "Repeater":
                elementObj = protractor_1.element(protractor_1.by.repeater(arrayLocator[1]));
                break;
            case "Option":
                elementObj = protractor_1.element(protractor_1.by.options(arrayLocator[1]));
                break;
            default:
                elementObj = protractor_1.element(protractor_1.by.xpath(arrayLocator[1]));
        }
        return elementObj;
    }
    // click on the element
    clickOnElement(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.click();
            });
        });
    }
    // get text of the limit//
    getElementText(locator) {
        return this.locatortype(locator).getText().then(function (text) {
            return text;
        });
    }
    getpageTitle() {
        return protractor_1.browser.getTitle().then(function (titleTxt) {
            return titleTxt;
        });
    }
    // scrow down
    scrollToDown(dowPosition) {
        protractor_1.browser.executeScript(`window.scrollTo(0,${dowPosition})`);
    }
    scrollIntoView(locator) {
        var scroll = this.locatortype(locator);
        protractor_1.browser.controlFlow().execute(function () {
            protractor_1.browser.executeScript('arguments[0].scrollIntoView(true)', scroll.getWebElement());
        });
    }
    //Selecting all element
    allElement(locator) {
        var elementObj;
        var arrayLocator = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = protractor_1.element.all(protractor_1.by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = protractor_1.element.all(protractor_1.by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = protractor_1.element.all(protractor_1.by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = protractor_1.element.all(protractor_1.by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = protractor_1.element.all(protractor_1.by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = protractor_1.element.all(protractor_1.by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = protractor_1.element.all(protractor_1.by.model(arrayLocator[1]));
                break;
            case "BIND":
                elementObj = protractor_1.element.all(protractor_1.by.exactBinding(arrayLocator[1]));
                break;
            case "ButtonText":
                elementObj = protractor_1.element.all(protractor_1.by.buttonText(arrayLocator[1]));
                break;
            case "Repeater":
                elementObj = protractor_1.element.all(protractor_1.by.repeater(arrayLocator[1]));
                break;
            case "Option":
                elementObj = protractor_1.element.all(protractor_1.by.options(arrayLocator[1]));
                break;
            default:
                elementObj = protractor_1.element.all(protractor_1.by.xpath(arrayLocator[1]));
        }
        return elementObj;
    }
}
exports.ElementHelper = ElementHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uVXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hlbHBlci9jb21tb25VdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFpSTtBQUVqSSxNQUFhLGFBQWE7SUFJdEIsaUJBQWlCO0lBQ2pCLFdBQVcsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksVUFBeUIsQ0FBQztRQUM5QixJQUFJLFlBQVksR0FBYSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxRQUFRLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixnQkFBZ0I7WUFDaEIsS0FBSyxJQUFJO2dCQUNMLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsVUFBVSxHQUFH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