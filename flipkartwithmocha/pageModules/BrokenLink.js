const Selector = require("../Selectors/Selector2");
const assert = require('chai').assert
class BrokenLink {
    async clickBrokenLinksLinkBtn(){
        let brokenLinkXPath = await page.waitForXPath(Selector.brokenLinkClassXPath);
        await brokenLinkXPath.click();
    }
    async clickBrokenLinkAndVerifyResult(){
        let brokenLink = await page.waitForXPath(Selector.brokenLinkXPath);
        await brokenLink.click();
        await page.waitForSelector(Selector.messageClass);
        let paragraph = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.paragraphClass))[0]);
        assert.include(paragraph, "This page returned a 500 status code.");
    }
}
module.exports = BrokenLink;