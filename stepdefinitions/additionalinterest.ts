import { browser, protractor } from "protractor";
import { BasepageObject } from "../pages/basepage";
const { When} = require("cucumber");

const nextp: BasepageObject = new BasepageObject();

When(/^I Click On Next button additional int page$/, async () => {
    await browser.sleep(2000);
    browser.executeScript("window.scrollTo(0,0)");
    await nextp.nextButton.click();
    console.log ("next button for additional interest page ");
    await browser.sleep(3000);
});
