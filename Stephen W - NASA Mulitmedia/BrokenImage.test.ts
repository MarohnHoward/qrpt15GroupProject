import { Builder } from 'selenium-webdriver';
import { MultimediaPage } from "./MultimediaPage";
import * as assert from 'assert';

(async function testBrokenImageLinks() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const multimediaPage = new MultimediaPage(driver);
        await multimediaPage.navigateTo('https://www.nasa.gov/multimedia/');
        
        const images = await multimediaPage.getImageElements();
        for (let image of images) {
            let isImageDisplayed = await driver.executeScript(
                'return arguments[0].complete && typeof arguments[0].naturalWidth != "undefined" && arguments[0].naturalWidth > 0', image
            );
            assert.strictEqual(isImageDisplayed, true, `Broken image found: ${await image.getAttribute('src')}`);
        }
    } finally {
        await driver.quit();
    }
})();
