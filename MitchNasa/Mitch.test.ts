import test from "node:test";
import { MitchPage } from "./MitchPage";

const mitch = new MitchPage()

test ('firstTest', async() => {
    await mitch.navigate();
    await mitch.click(mitch.newsNevents);
    await mitch.click(mitch.mediaResources);
    await mitch.click(mitch.resources);
    await mitch.click(mitch.newsReleases);
    await mitch.click(mitch.newsResults);
})
test ('secondTest', async() => {
    await mitch.navigate();
    await mitch.click(mitch.newsNevents);
    await mitch.click(mitch.ann);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.vsnasa);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.podCast);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.blog);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.Letters);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.Social);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.mediaResources);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.landings);
    await mitch.driver.navigate().back()
    await mitch.click(mitch.events);
    await mitch.driver.navigate().back()
})

test ('thirdTest', async() => {
    await mitch.navigate();
    await mitch.click(mitch.newsNevents);
    await mitch.click(mitch.news);
    await mitch.click(mitch.upcoming);
    await mitch.click(mitch.timezone);
    await mitch.click(mitch.mexico);
    await mitch.driver.quit()
    
})