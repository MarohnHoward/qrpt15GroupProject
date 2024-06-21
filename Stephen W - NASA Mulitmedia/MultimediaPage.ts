import { By, WebDriver, until } from 'selenium-webdriver';
import { NASABase } from './NASABase';

export class MultimediaPage extends NASABase {
    private imageGalleriesSection = By.css('.image-galleries');
    private highlightsSection = By.css('.highlights');
    private nasaTVSection = By.css('.nasa-tv');
    private nasaPlusSection = By.css('.nasa-plus');

    constructor(driver: WebDriver) {
        super(driver);
    }

    public async getImageElements() {
        return await this.driver.findElements(By.tagName('img'));
    }

    public async getTextAlignmentInImageGalleries() {
        const imageGalleries = await this.driver.findElement(this.imageGalleriesSection);
        return await imageGalleries.getCssValue('text-align');
    }

    public async getTextElementsInNasaTV() {
        const nasaTV = await this.driver.findElement(this.nasaTVSection);
        return await nasaTV.findElements(By.tagName('p'));
    }

    public async getImagesInHighlights() {
        const highlights = await this.driver.findElement(this.highlightsSection);
        return await highlights.findElements(By.tagName('img'));
    }

    public async getVideosInNasaPlus() {
        const nasaPlus = await this.driver.findElement(this.nasaPlusSection);
        return await nasaPlus.findElements(By.tagName('video'));
    }

    public async getVideoSource(videoElement: any) {
        return await videoElement.findElement(By.tagName('source')).getAttribute('src');
    }
}
