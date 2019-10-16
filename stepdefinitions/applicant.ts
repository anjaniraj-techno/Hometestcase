import { browser, protractor } from "protractor";
import { BasepageObject } from "../pages/basepage";
const { When} = require("cucumber");

const nexta: BasepageObject = new BasepageObject();

When(/^I Click On Next button applicant page$/, async () => {
    await browser.sleep(2000);
    browser.executeScript("window.scrollTo(0,10000)");
    await nexta.nextButton.click();
    console.log ("next button for applicant page ");
});
