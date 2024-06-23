import { BasePage } from "../basePage";
import {By} from 'selenium-webdriver'; 
const fs = require('fs');

export class WBLBudgAnnReps extends BasePage {
    // locators go here
    footer: By = By.xpath('(//span[text()="Humans in Space"])');
    budgAnnReps: By = By.xpath('//span[text() = "Budget & Annual Reports"]');

    // constructor goes next so we can use our class as an object in our test
    constructor(){
        super({url: 'https://www.nasa.gov/'});
    };
    
    // Methods next for repeatable steps that we use often.

    async search(searchThing: string) {
        return this.setInput(this.footer, `${searchThing}`);
    };
    async getResults() {
        return this.getText(this.footer);
    };
    async clickBudgAnnReps(){
        return this.driver.findElement(this.budgAnnReps);
    };
};