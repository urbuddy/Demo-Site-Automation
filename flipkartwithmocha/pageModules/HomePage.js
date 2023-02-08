const Selector = require("../Selectors/Selector2");
class HomePage{
    async elementPageBtn(){
        await page.goto('https://demoqa.com');
        let elementsPage = await page.waitForXPath(Selector.elementPageXPath);
        await elementsPage.click();
    }
}
module.exports = HomePage;