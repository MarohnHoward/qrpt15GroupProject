import { BasePage } from "../basePage";
import {By} from 'selenium-webdriver'; 
const fs = require('fs');

export class WBLAgencyFinReps extends BasePage {
    // locators go here
    footer: By = By.xpath('(//span[text()="Humans in Space"])');
    agencyFinRep: By = By.xpath('//span[text() = "Agency Financial Reports"]');
    agencyResults: By = By.xpath('(//h2[@class="heading-22"])[1]'); 
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
        return this.getText(this.agencyResults);
    };
    async clickAgencyFinReps(){
        return this.driver.findElement(this.agencyFinRep);
    };
};