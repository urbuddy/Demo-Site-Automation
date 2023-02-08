const Selector = require("../Selectors/Selectors");
const assert = require('chai').assert;
const expect = require('chai').expect;

class ProductDetailsPage{
    async getProductDetailsAndVerify(page){

        await page.waitForXPath(Selector.productnamexpath);
        let productName = await page.$eval(Selector.productname, ele => ele.textContent);
        let price = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.pricexpath))[0]);
        let highlight1 = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.storagexpath))[0]);
        let highlight2 = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.screensizexpath))[0]);
        let highlight3 = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.cameraxpath))[0]);
        let highlight4 = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.batteryxpath))[0]);
        
        expect(productName).to.include('SAMSUNG Watch 4');
        expect(price).to.equal('₹11,999');
        // assert.include(productName, 'SAMSUNG Watch 4');
        // assert.equal(price, "₹11,999");
        assert.equal(highlight1, 'With Call Function');
        assert.equal(highlight2, 'Touchscreen');
        assert.equal(highlight3, 'Fitness & Outdoor');
        assert.equal(highlight4, 'Battery Runtime: Upto 40 hrs');
    
    }
    async AddtoCartProductBtn(page){

        let AddToCartBtn = await page.waitForXPath(Selector.addtocartbtn);
        await AddToCartBtn.click();
    }
}
module.exports = ProductDetailsPage;