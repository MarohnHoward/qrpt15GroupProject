import { Builder, By } from 'selenium-webdriver';
import { MultimediaPage } from './MultimediaPage';
import * as assert from 'assert';

(async function testConsistentFontSizesNASATV() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.nasa.gov/multimedia/');
        let nasaTVSection = await driver.findElement(By.css('.nasa-tv'));
        let textElements = await nasaTVSection.findElements(By.tagName('p'));
        let fontSize = await textElements[0].getCssValue('font-size');
        for (let element of textElements) {
            assert.strictEqual(await element.getCssValue('font-size'), fontSize, 'Inconsistent font size found in "NASA TV" section');
        }
    } finally {
        await driver.quit();
    }
})();