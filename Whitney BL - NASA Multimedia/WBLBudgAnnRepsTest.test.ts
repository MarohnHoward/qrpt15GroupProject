import { WBLAgencyFinReps } from "./WBLAgencyFinReps";
import { WBLBudgAnnReps } from "./WBLBudgAnnReps";
import { WhitneyPage } from "./WhitneyPage";
const page = new WBLBudgAnnReps();
const fs = require('fs');

test('click on Budget & Annual Reports in footer', async () => {
    await page.navigate();
    await page.search('Budget & Annual Reports');
    await page.clickBudgAnnReps;
    const text = await page.getResults();
    expect(text).toContain("Budget & Annual Reports");
    await page.driver.quit();

    // write a file with the text results
    fs.writeFile(`${__dirname}/budgAnnReps.txt`, text, (e) => {
        if (e) console.log(e)
        else console.log("link works");
    });
});