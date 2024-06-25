import test from "node:test";
import { nasaPage } from "./dinorahPage";
const page = new nasaPage();



//1. tests if explorer menu works and when hovering over each link the underline is visible
test('hover over explorer links for underlined', async() => {
    //1. navigate to url
    //2.click explore link
    //3.hover over each sublink
    
    await page.navigate()
    await page.click(page.explore)
    await page.exploreHover(); 
    
    //repeat
  
}) 

//2. this tests the 82 links work and other 2 spanish links work
test('do a search and click links', async () => {
    //1.navigate to nasa
    //2. click on 'espanol' link
    //3. click on espanolCircleArrow link
   
    //5.scroll to leaMasArrow 
    //6.click on leaMasArrow
    //7.scroll to button1
    //8.click on button1 to 5, 82
    //9.repeat click until button82
    
    await page.navigate();
    await page.click(page.explore)
    await page.click(page.espanol);
    await page.click(page.espanolCircleArrow);
    await page.scroll(page.leaMasArrow); 
    await page.click(page.leaMasArrow); 
    await page.buttonScale(); 
   
    //repeat?

});


//3.tests if each highlight section displays image and article 
test('highlights display image and article', async () => {

    //1.navigate to nasa
    //2.click on 'explore'
    //3.click on 'missions'
    //4.click on 'missionsHighlightsImage'
    //5.click on 'humansInSpace'
    //6.click on 'humansHighlightsImage'
    //7.click on 'earthAndClimate'
    //8.
    //9.click 'solarSystem'
    //10.
    //11.click 'universe'
    //12.
    //13.click 'science'
    //14.
    //15.click 'aeronautics'
    //16.
    //17.click 'technology'
    //18.
    //19.click 'learningResources'
    //20.
    //21.click 'aboutNasa'
    //22.click 'aboutNasa'
    //23.click 'espanol'
   /*
    earthClimateHighlightsImage: By = By.xpath(`(//img[@*])[19]`);
    solarSystemHighlightsImage: By = By.xpath(`(//img[@*])[22]`);
    universeHighlightsImage: By = By.xpath(`(//img[@*])[25]`);
    scienceHighlightsImage: By = By.xpath(`(//img[@*])[28]`);
    aeronauticsHighlightsImage: By = By.xpath(`(//img[@*])[31]`);
    technologyHighlightsImage: By = By.xpath(`(//img[@*])[34]`);
    learningResourcesHighlightsImage: By = By.xpath(`(//img[@*])[37]`);
    aboutNasaHighlightsImage: By = By.xpath(`(//img[@*])[38]`);
    espanolHighlightsImage: */

    await page.navigate();
    await page.click(page.explore)
    await page.click(page.missions);
    await page.click(page.missionsHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.humansInSpace);
    await page.click(page.humansHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.earthAndClimate);
    await page.click(page.earthClimateHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.solarSystem);
    await page.click(page.solarSystemHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.universe);
    await page.click(page.universeHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.science);
    await page.click(page.scienceHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.aeronautics);
    await page.click(page.aeronauticsHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.technology);
    await page.click(page.technologyHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.learningResources);
    await page.click(page.learningResourcesHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.aboutNasa);
    await page.click(page.aboutNasaHighlightsImage);
    await page.driver.navigate().back(); 
 
    await page.click(page.espanol);
    await page.click(page.espanolHighlightsImage);
    await page.driver.navigate().back(); 
   
    //repeat?
});






test("do a Spanish search", async () => {
    await page.navigate();
    await page.search("español"); // Corrected spelling to "español"
    let text = await page.getText(page.resultsEnglish);
    expect(text).toContain("español");
    await page.driver.quit();
  });
  
  function expect(text) {
      return {
          toContain(expected) {
              if (!text.includes(expected)) {
                  throw new Error(`Expected text to contain "${expected}", but got "${text}"`);
              }
          }
      };
  }

