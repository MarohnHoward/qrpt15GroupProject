import { WebDriver } from 'selenium-webdriver';

export class NASABase {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async navigateTo(url: string) {
        await this.driver.get(url);
    }
}