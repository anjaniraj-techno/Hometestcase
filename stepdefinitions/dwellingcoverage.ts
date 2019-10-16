import { browser, protractor } from "protractor";
import { BasepageObject } from "../pages/basepage";
import { DwellingCoveragePageObject } from "../pages/dwellingcoverage";

const { When} = require("cucumber");

const nextdc: BasepageObject = new BasepageObject();
const dwellingCost: DwellingCoveragePageObject = new DwellingCoveragePageObject();

When(/^I Enter replacementCostofdweling "(.*?)"$/, async (rcc) => {
    await browser.sleep(2000);
    browser.executeScript("window.scrollTo(0,10000)");
    await dwellingCost.replacementCostofDwelling.sendKeys(rcc);
});
When(/^I Click On Next button dwelling coverage page$/, async () => {
    await browser.sleep(2000);
    browser.executeScript("window.scrollTo(0,10000)");
    await nextdc.nextButton.click();
    console.log ("next button for dwelling covergae page   ");
});
