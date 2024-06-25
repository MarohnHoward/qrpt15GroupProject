import { BasePage } from "../basePage";
import {By} from 'selenium-webdriver'; 
const fs = require('fs');

export class WhitneyPage extends BasePage {
    // locators go here
    footer: By = By.xpath('(//span[text()="Humans in Space"])');
    contactNASA: By = By.xpath('//span[text() = "Contact NASA"]');

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
    async clickContactNASA(){
        return this.driver.findElement(this.contactNASA);
    };
};