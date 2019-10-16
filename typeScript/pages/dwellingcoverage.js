"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class DwellingCoveragePageObject {
    constructor() {
        this.dwellingcoverage = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.replacementCostofDwelling = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='ReplacementCostDwellingInput.ReplacementCostValue']"));
    }
}
exports.DwellingCoveragePageObject = DwellingCoveragePageObject;
