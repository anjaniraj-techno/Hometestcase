import { browser, protractor } from "protractor";
import { BasepageObject } from "../pages/basepage";  // DwellingInfoPageObject
import { DwellingInfoPageObject } from "../pages/dwellingInfo";

const { When} = require("cucumber");

const nextdc: BasepageObject = new BasepageObject();
const dyear: DwellingInfoPageObject = new DwellingInfoPageObject();
When(/^I Click On Next button dwelling info page$/, async () => {
    await browser.sleep(2000);
    browser.executeScript("window.scrollTo(0,10000)");
    await nextdc.nextButton.click();
    console.log ("next button for dwelling information page   ");
});

// input[@fieldref=DwellingInput.YearBuilt]
// I Enter yearbuilt

When(/^I Enter yearbuilt "(.*?)"$/, async (year) => {
    await browser.sleep(2000);
    browser.executeScript("window.scrollTo(0,0)");
    await dyear.dwellinginfo.sendKeys(year);
    console.log ("year built enetered for dwelling   ");
});
