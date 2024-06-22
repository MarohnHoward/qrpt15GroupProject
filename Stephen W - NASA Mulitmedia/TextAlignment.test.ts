import { Builder } from 'selenium-webdriver';
import { MultimediaPage } from './MultimediaPage';
import * as assert from 'assert';

(async function testTextAlignmentImageGalleries() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const multimediaPage = new MultimediaPage(driver);
        await multimediaPage.navigateTo('https://www.nasa.gov/multimedia/');
        
        const alignment = await multimediaPage.getTextAlignmentInImageGalleries();
        assert.strictEqual(alignment, 'center', 'Text alignment is not as expected in the "Image Galleries" section');
    } finally {
        await driver.quit();
    }
})();
