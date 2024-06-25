import { By, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "../basePage";
const fs = require("fs");

export class nasaPage extends BasePage {
     

    explore: By = By.xpath("//button[@class='usa-accordion__button usa-nav__link display-flex flex-align-center']");
    missions: By = By.xpath('(//span[text()="Missions"])[1]');
    humansInSpace: By = By.xpath('(//span[text()="Humans in Space"])[1]');
    earthAndClimate: By = By.xpath('(//span[text()="Earth & Climate"])[1]');
    solarSystem: By = By.xpath('(//span[text()="The Solar System"])[1]');
    universe: By = By.xpath('(//span[text()="The Universe"])[1]');
    science: By = By.xpath('(//span[text()="Science"])[1]');
    aeronautics: By = By.xpath('(//span[text()="Aeronautics"])[1]');
    technology: By = By.xpath('(//span[text()="Technology"])[1]');
    learningResources: By = By.xpath('(//span[text()="Learning Resources"])[1]');
    aboutNasa: By = By.xpath('(//span[text()="About NASA"])[1]');
    espanol: By = By.xpath('(//span[text()="Español"])[1]');
    espanolCircleArrow: By = By.xpath('(//a[@class="button-primary button-primary-md button-light margin-bottom-3"])[13]');
    leaMasArrow: By = By.xpath('(//span[@class="line-height-alt-1 "])[1]');

    cienciaDeNasa: By = By.xpath('//button[@id="tab0-ciencia-de-la-nasa"]');
    button1: By = By.xpath('//button[text()="1"]');
    button2: By = By.xpath('//button[text()="2"]');
    button3: By = By.xpath('//button[text()="3"]');
    button4: By = By.xpath('//button[text()="4"]');
    button5: By = By.xpath('//button[text()="5"]');
    siguiente: By = By.xpath('//button[text()="Siguiente"]')
    button6: By = By.xpath('//button[text()="6"]');
    button82: By = By.xpath('//button[text()="82"]');
    spaceParaNinos: By = By.xpath('//button[text()=" Space Place&nbsp;para ninos "]');
    ciencia: By = By.xpath('//span[text()="Ciencia"]'); 
    arenauticaNasa: By = By.xpath('//button[@id="tab2-aeronáutica-de-la-nasa"]');
    cienciasTerrestres: By = By.xpath('//span[text()="Ciencias Terrestres"]');
    sistemaSolar: By = By.xpath('//span[text()="Sistema Solar"]');
    universo:  By = By.xpath('//span[text()="universo"]');
    missionsHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[4]');
    humansHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[7]');
    earthClimateHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[10]');
    solarSystemHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[13]');
    universeHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[16]');
    scienceHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[19]');
    aeronauticsHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[22]');
    technologyHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[25]');
    learningResourcesHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[28]');
    aboutNasaHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[29]');
    espanolHighlightsImage: By = By.xpath('(//img[@class="hds-media-background z-100"])[32]');
    
    searchBar: By = By.xpath('//input[@id="search-field-en-small--desktop"]');
    resultsEnglish: By = By.xpath('(//span)[260]');

    espanolNasaLink: By = By.xpath('//h4[text()="Español | NASA+"]');
    resultsEspanol: By = By.xpath('//div[@class="site-main padding-x-2"]');
    spanishSearchBar: By = By.id("search-field-en-small");
    siguienteButton: By = By.xpath('//button[@class="search-field-en-small"]');



    constructor() {
        super({url: "https://www.nasa.gov/"});
    };
    async search(thingToSearch: string) {
        return this.setInput(this.searchBar, `${thingToSearch}\n`);
    };
   
    async getResults(){
        return this.getText(this.resultsEnglish);
    };

    async getSpanishResults(){
        return this.getText(this.resultsEspanol);
    }

    async canHover(elementBy:By){
        const hover = this.driver.actions();
        const startElement = await this.getElement(elementBy);
        await this.actionWiggle(hover, startElement, 300);
        await hover.perform();
    };

    async scroll(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform();
    }
    async buttonScale() {
        await this.scroll(this.button1);
        await this.click(this.button1);
        await this.scroll(this.button2); 
        await this.click(this.button2); 
        await this.scroll(this.button3); 
        await this.click(this.button3); 
        await this.scroll(this.button4); 
        await this.click(this.button4); 
        await this.scroll(this.button5); 
        await this.click(this.button5); 
        await this.scroll(this.siguiente); 
        await this.click(this.siguiente);
        await this.scroll(this.button6); 
        await this.click(this.button6); 
        await this.scroll(this.button82); 
        await this.click(this.button82);  
    }
    async exploreHover() {
    await this.canHover(this.missions);
    await this.canHover(this.humansInSpace); 
    await this.canHover(this.earthAndClimate); 
    await this.canHover(this.solarSystem); 
    await this.canHover(this.universe); 
    await this.canHover(this.science)
    await this.canHover(this.aeronautics); 
    await this.canHover(this.technology); 
    await this.canHover(this.learningResources); 
    await this.canHover(this.aboutNasa); 
    await this.canHover(this.espanol); 
    }
};