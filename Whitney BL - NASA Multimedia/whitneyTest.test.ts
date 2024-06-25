import { WhitneyPage } from "./WhitneyPage";
const page = new WhitneyPage();
const fs = require('fs');

test('click on Contact NASA in footer', async () => {
    await page.navigate();
    await page.search('Contact NASA');
    await page.clickContactNASA;
    const text = await page.getResults();
    expect(text).toContain("Contact NASA");
    await page.driver.quit();

    // write a file with the text results
    fs.writeFile(`${__dirname}/contactNASAResults.txt`, text, (e) => {
        if (e) console.log(e)
        else console.log("link works");
    });
});