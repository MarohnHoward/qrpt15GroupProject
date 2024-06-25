import { WBLAgencyFinReps } from "./WBLAgencyFinReps";
import { WBLBudgAnnReps } from "./WBLBudgAnnReps";
import { WhitneyPage } from "./WhitneyPage";
const page = new WBLBudgAnnReps();
const fs = require('fs');

test('click on Budget & Annual Reports in footer', async () => {
    await page.navigate();
    await page.scroll(page.budgAnnReps);
    await page.click(page.budgAnnReps);
    const text = await page.getResults();
    expect(text).toContain("FY 2025 Budget Request");
   

    // write a file with the text results
    fs.writeFile(`${__dirname}/budgAnnReps.txt`, text, (e) => {
        if (e) console.log(e)
        else console.log("link works");
    });
    await page.driver.quit();
});