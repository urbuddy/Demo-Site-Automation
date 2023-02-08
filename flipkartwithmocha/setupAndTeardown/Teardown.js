afterEach(async () => {
    await page.close();
});

after (async () => {
	await browser.close();
});