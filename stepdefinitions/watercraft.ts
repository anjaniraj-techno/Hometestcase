import { browser, protractor } from "protractor";
import { WatercraftPageObject } from "../pages/watercraft";
const { When} = require("cucumber");
// WatercraftPageObject
const nextp: WatercraftPageObject = new WatercraftPageObject();

When(/^I Click On Next button watercraft cov page$/, async () => {
    await browser.sleep(2000);
   // browser.executeScript("window.scrollTo(0,0)");
    await nextp.watercraftnext.click();
    console.log ("next button for watercraft page");
    await browser.sleep(4000);

});
