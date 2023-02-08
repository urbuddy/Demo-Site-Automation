const puppeteer = require('puppeteer');
const config = require('./puppeteer.config');
before (async () => {
	global.browser = await puppeteer.launch(config.launch);
});

beforeEach(async () => {
	global.page = await browser.newPage();
    await page.setViewport({
        width: 900,
        height: 1200,
    });
});

