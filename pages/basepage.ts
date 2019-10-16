import { by, element, ElementFinder } from "protractor";

export class BasepageObject {
    // tslint:disable-next-line: no-empty
    public nextButton: ElementFinder;
    constructor() {
    this.nextButton = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));
    } }
