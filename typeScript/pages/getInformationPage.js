"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class GetInformationPageObject {
    constructor() {
        this.getInformation = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Get Information']"));
        // this.framecontinue = element(by.id("dctPopup_dctPopupWindowDEF2E933F88841DD37815B9E22F4B91B"));
        this.framecontinue = protractor_1.element(protractor_1.by.xpath("//iframe[contains(@id,'/dctPopup_dctPopupWindow'/)]"));
        this.continuetoQuote = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Continue to Quick Quote']"));
    }
}
exports.GetInformationPageObject = GetInformationPageObject;
