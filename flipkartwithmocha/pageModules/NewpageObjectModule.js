const Selector = require("../Selectors/Selectors");

class NewPageObjectModule{

    async getNewPageObject(){
        
        const pageTarget = await page.target(); //save this to know that this was the opener
        let productLink = await page.waitForXPath(Selector.linkbtn);
        await productLink.click(); //click on a link
        const newTarget = await browser.waitForTarget(target => target.opener() === pageTarget); //check that you opened this page, rather than just checking the url
        const newPage = await newTarget.page();
        await newPage.setViewport({
            width: 900,
            height: 1200,
        });
        await newPage.waitForNetworkIdle({idleTime: 100});
        return newPage;
    }
}
module.exports = NewPageObjectModule;