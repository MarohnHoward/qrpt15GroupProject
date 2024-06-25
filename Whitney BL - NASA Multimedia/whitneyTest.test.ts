import { WhitneyPage } from "./WhitneyPage";
const page = new WhitneyPage();
const fs = require('fs');

test('click on Contact NASA in footer', async () => {
    await page.navigate();
    await page.scroll(page.contactNASA);
    await page.clickContactNASA();
    const text = await page.getResults();
    expect(text).toContain("Contact NASA");
   

    // write a file with the text results
    fs.writeFile(`${__dirname}/contactNASAResults.txt`, text, (e) => {
        if (e) console.log(e)
        else console.log("link works");
    });
    await page.driver.quit();
});