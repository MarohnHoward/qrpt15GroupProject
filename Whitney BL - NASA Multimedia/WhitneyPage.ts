import { BasePage } from "../basePage";
import {By} from 'selenium-webdriver'; 
const fs = require('fs');

export class WhitneyPage extends BasePage {
    // locators go here
    footer: By = By.xpath('(//span[text()="Humans in Space"])');
    contactNASA: By = By.xpath('//span[text() = "Contact NASA"]');
    contactResults: By = By.xpath('//h1[@class="page-heading-md line-height-sm color-spacesuit-white-important"]'); 
    // constructor goes next so we can use our class as an object in our test
    constructor(){
        super({url: 'https://www.nasa.gov/'});
    };
    
    // Methods next for repeatable steps that we use often.

    async scroll(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform();
    }
    async getResults() {
        return this.getText(this.contactNASA);
    };
    async clickContactNASA(){
        return this.driver.findElement(this.contactNASA).click();
    };
};