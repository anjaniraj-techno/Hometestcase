import { browser, protractor } from "protractor";
import { BasepageObject } from "../pages/basepage";
const { When} = require("cucumber");

const nextp: BasepageObject = new BasepageObject();

When(/^I Click On Next button additional cov page$/, async () => {
    await browser.sleep(2000);
    browser.executeScript("window.scrollTo(0,10000)");
    await browser.sleep(2000);
    await nextp.nextButton.click();
    console.log ("next button for additional coverage  ");
    await browser.sleep(4000);
});
