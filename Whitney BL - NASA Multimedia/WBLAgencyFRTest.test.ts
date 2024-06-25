import { WBLAgencyFinReps } from "./WBLAgencyFinReps";
import { WhitneyPage } from "./WhitneyPage";
const page = new WBLAgencyFinReps();
const fs = require('fs');

test('click on Agency Financial Reports in footer', async () => {
    await page.navigate();
    await page.scroll(page.agencyFinRep);
    await page.click(page.agencyFinRep);
    const text = await page.getResults();
    expect(text).toContain("Agency Financial Reports");
   

    // write a file with the text results
    fs.writeFile(`${__dirname}/agencyFinRepsResults.txt`, text, (e) => {
        if (e) console.log(e)
        else console.log("link works");
    });
    await page.driver.quit();

});