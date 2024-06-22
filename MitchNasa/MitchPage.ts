import {BasePage} from '../basePage';
import {By} from 'selenium-webdriver';
const fs = require('fs');
export class Mitch extends BasePage {
     class: By = By.xpath('//a[@class = "entry-content"]');

   constructor() {
    super({url: "https://www.nasa.gov/nasa-blogs/"});
   };
    async links() {
       let myLinks = await this.driver.getAllWindowHandles();
       await this.driver.switchTo().window(myLinks[1]);
       await this.driver.sleep(2000); 
       fs.writeFile(`${__dirname}/nasa.gov`, 
       await this.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log('Screenshot has been taken');

    });
    }
}
