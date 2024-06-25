import { BasePage } from "../basePage";
import {By} from 'selenium-webdriver'; 
const fs = require('fs');

export class WBLBudgAnnReps extends BasePage {
    // locators go here
    footer: By = By.xpath('(//span[text()="Humans in Space"])[2]');
    budgAnnReps: By = By.xpath('//span[text() = "Budget & Annual Reports"]');
    budgResults: By = By.xpath('(//h2[@class="heading-36 margin-0"])[1]'); 
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
        return this.getText(this.budgResults);
    };
    async clickBudgAnnReps(){
        return this.driver.findElement(this.budgAnnReps).click();
    };
};