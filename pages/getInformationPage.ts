import { by, element, ElementFinder } from "protractor";
export class GetInformationPageObject {
  [x: string]: any;
    // tslint:disable-next-line: no-empty
    public getInformation: ElementFinder;
    public continuetoQuote: ElementFinder;
    public framecontinue: ElementFinder;
    constructor() {
    this.getInformation = element(by.xpath("//span[@class='g-btn-text' and text()='Get Information']"));
    // this.framecontinue = element(by.id("dctPopup_dctPopupWindowDEF2E933F88841DD37815B9E22F4B91B"));
    this.framecontinue = element(by.xpath("//iframe[contains(@id,'/dctPopup_dctPopupWindow'/)]"));
    this.continuetoQuote = element(by.xpath("//span[@class='g-btn-text' and text()='Continue to Quick Quote']"));
    } }
