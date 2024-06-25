import {By} from "selenium-webdriver"
import {BasePage} from "../basePage"

export class MitchPage extends BasePage {
    newsNevents: By = By.xpath('(//span[text() = "News & Events"])[1]');
    mediaResources: By = By.xpath('(//span[text() = "Media Resources"])[1]');
    resources: By = By.xpath('(//span[text() = "Resources"])[1]');
    newsReleases: By = By.xpath('(//a[@*])[250]');
    newsResults: By = By.xpath('(//div[@class= "entry-content"])');
    ann: By = By.xpath('(//span[text() = "All NASA News"])[1]');
    vsnasa: By = By.xpath('(//span[text() = "Video Series on NASA+"])[1]');
    podCast: By = By.xpath('(//span[text() = "Podcasts"])[1]');
    blog: By = By.xpath('(//span[text() = "Blogs"])[1]');
    Letters: By = By.xpath('(//span[text() = "Newsletters"])[1]');
    Social: By = By.xpath('(//span[text() = "Social Media"])[1]');
    landings: By = By.xpath('(//span[text() = "Upcoming Launches & Landings"])[1]');
    events: By = By.xpath('(//span[text() = "Virtual Events"])[1]');
    news: By =  By.xpath('(//h3[@class="heading-22 color-spacesuit-white padding-right-2 line-height-alt-1"])[1]');
    timezone: By = By.xpath('//select[@class="hds-select timezone-select margin-bottom-1"]');
    mexico: By = By.xpath('//option[text()="Mexico City"]');
    upcoming: By = By.xpath('//a[text()="Upcoming Launches"]');

    constructor() {
    super({url:"https://www.nasa.gov/"});
    }
}   
