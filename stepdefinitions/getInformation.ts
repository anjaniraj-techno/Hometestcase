import { browser, by, element, ElementFinder } from "protractor";
import { Alert } from "selenium-webdriver";
import { GetInformationPageObject } from "../pages/getInformationPage";
const { When} = require("cucumber");

const getinfo: GetInformationPageObject = new GetInformationPageObject();

When(/^I Click On GetInfromation$/, async () => {
    await browser.sleep(2000);
    await getinfo.getInformation.click();
    await browser.sleep(4000);
    console.log("get information ");
   /* const winhandle1 = browser.getAllWindowHandles();
    const  presentwin = await browser.getTitle();
    console.log("get information window prsent  " + presentwin);*/
});

When(/^I Click On Continue to Quote$/, async () => {

 //   await browser.switchTo().frame(0);
   // await getinfo.continuetoQuote.click();
   // await browser.switchToParentFrame();
    // tslint:disable-next-line: only-arrow-functions
 //   const winhandle = browser.getAllWindowHandles();
    // tslint:disable-next-line: only-arrow-functions
   // console.log("test for window handle for  " + winhandle );
    // tslint:disable-next-line: only-arrow-functions
   // tslint:disable-next-line: prefer-const
   /*await browser.switchTo().frame(element(by.xpath("//iframe[contains(@id,'dctPopup_dctPopupWindow')]")));
   const tabbedwindow = getinfo.continuetoQuote;
   console.log("variable assisgned");
   tabbedwindow.click();
   console.log("variable click");
   await browser.sleep(2000);
   const winHandles = browser.getAllWindowHandles();
    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: no-shadowed-variable
    // tslint:disable-next-line: no-shadowed-variable
    // tslint:disable-next-line: only-arrow-functions
   winHandles.then(async function(handles) {
      // tslint:disable-next-line: prefer-const
      let parentWindow = handles[0];
      console.log("test for window handle forhandles0-->  " + parentWindow );
        // tslint:disable-next-line: no-shadowed-variable
      // tslint:disable-next-line: prefer-const
      // tslint:disable-next-line: no-shadowed-variable
      const tabbedwindow = handles[1];
      await browser.waitForAngularEnabled(false);
      await browser.switchTo().window(tabbedwindow);
      // tslint:disable-next-line: no-shadowed-variable
      await browser.getTitle().then(async (tabbedwindow)  => {

        console.log("test for window handle forhandles0-->  " + tabbedwindow);

       // await browser.getWindowHandle();
       //  await browser.getTitle();

        });
     // browser.switchTo().window();
      console.log("went back to parent windo after clicking-->  "  );
     });   */
// browser.switchTo().alert().dismiss();  // dismiss if pop up is there
// const q = await browser.switchTo().frame(element(by.xpath("//iframe[contains(@id,'dctPopup_dctPopupWindow')]")));
// console.log("alert popup is cancelled " + q);

// const quickbutton = element(by.xpath("//span[@class='g-btn-text' and text()='Continue to Quick Quote']"));
// tslint:disable-next-line: indent
// tslint:disable-next-line: indent
// await browser.switchTo().activeElement().click();
// await getinfo.continuetoQuote.submit();

// console.log("active buton clicked on pop up window + was a form has been submitted  " );
/*const ale: Alert = browser.switchTo().alert();
console.log("alert is present on the screen " + ale);
// clicks 'OK' button
// ale.accept();
ale.dismiss();
console.log("alert is dismissed  " );
  */
 /*browser.switchTo().frame(element(by.xpath("//iframe[contains(@id,'/dctPopup_dctPopupWindow'/)]")));

 await browser.sleep(2000);
 await getinfo.continuetoQuote.click();  */
 await browser.sleep(4000);
 console.log("continue to quote button skipped as of now  ");
 await browser.sleep(2000);
});
