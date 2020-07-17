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
const protractor_1 = require("protractor");
const cucmberconf_1 = require("../cucmberconf");
const cucumber_1 = require("cucumber");
cucumber_1.BeforeAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(cucmberconf_1.config.baseurl);
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //  const screenShot = await browser.takeScreenshot();
            //  this.attach(screenShot, "image/img");
            var attach = this.attach;
            return protractor_1.browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, "base64");
                return attach(decodedImage, "image/png");
            });
        }
    });
});
// AfterAll({ timeout: 100 * 1000 }, async () => {
//     await browser.quit();
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N1cHBvcnQvaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1BLDJDQUFxQztBQUNyQyxnREFBd0M7QUFDeEMsdUNBQThEO0FBRzlELG9CQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUMxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDMUIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUMxQyxzREFBc0Q7WUFDdEQseUNBQXlDO1lBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsT0FBTyxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQzlDLElBQUksWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxNQUFNLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1NBRU47SUFDTCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsa0RBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QixNQUFNIn0=