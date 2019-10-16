import { by, element, ElementFinder } from "protractor";

export class DwellingInfoPageObject {
    // tslint:disable-next-line: no-empty
    public dwellinginfo: ElementFinder;
    constructor() {
    this.dwellinginfo = element(by.xpath("//input[@fieldref='DwellingInput.YearBuilt']"));

} }
