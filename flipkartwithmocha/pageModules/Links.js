const Selector = require("../Selectors/Selector2");
const assert = require('chai').assert;
class Links{
    async clickLinksLinkBtn(){
        let linkOfLinksClass = await page.waitForXPath(Selector.linkClassXPath); 
        await linkOfLinksClass.click();
    }

    async clickHomeLinkAndVerifyTitleAndURL(){
        const pageTarget = await page.target(); //save this to know that this was the opener
        let firstHomeLink = await page.waitForXPath(Selector.homeLink); 
        await firstHomeLink.click(); //click on a link
        const newTarget = await browser.waitForTarget(target => target.opener() === pageTarget); //check that you opened this page, rather than just checking the url
        const newPage = await newTarget.page();

        assert.equal(await newPage.title(), "ToolsQA");
        assert.equal(await newPage.url(), "https://demoqa.com/");
        await newPage.close();
    }

    async clickAPILinkAndVerifyStatusCodeAndText(linkID, status){
        let link = await page.waitForSelector(linkID);
        await link.click();
        await page.waitForXPath(Selector.linkResponse(status.code), {visible: true});
        let statusCode = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.statusCodeLinkResponse))[0]);
        let statusText = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.statusTextLinkResponse))[0]);
        assert.equal(statusCode, status.code);
        assert.equal(statusText, status.text);
    }
}
module.exports = Links;