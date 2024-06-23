import { WBLAgencyFinReps } from "./WBLAgencyFinReps";
import { WhitneyPage } from "./WhitneyPage";
const page = new WBLAgencyFinReps();
const fs = require('fs');

test('click on Agency Financial Reports in footer', async () => {
    await page.navigate();
    await page.search('Agency Financial Reports');
    await page.clickAgencyFinReps;
    const text = await page.getResults();
    expect(text).toContain("Agency Financial Reports");
    await page.driver.quit();

    // write a file with the text results
    fs.writeFile(`${__dirname}/agencyFinRepsResults.txt`, text, (e) => {
        if (e) console.log(e)
        else console.log("link works");
    });
});