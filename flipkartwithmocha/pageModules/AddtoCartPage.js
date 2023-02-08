const Selector = require("../Selectors/Selectors");
const assert = require('chai').assert;
const should = require('chai').should();

class AddtoCartPage{
    async getProductCostAndVerify(){
        await page.waitForXPath(Selector.pricedetails);
        let actualPrice = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.actualPricexpath))[0]);
        let disscount = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.disscountxpath))[0]);
        let deliveryCharges = await page.evaluate(element => {
                return element.textContent;
        }, (await page.$x(Selector.deliveryChargesxpath))[0]);
        // let packagingFee = await page.evaluate(element => {
        //     return element.textContent;
        // }, (await page.$x(Selector.packagingFeexpath))[0]);
        let totalCost = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.totalCostxpath))[0]);
        assert.equal(actualPrice, ' ₹29,999');
        assert.include(disscount, '₹18,000');
        // assert.equal(deliveryCharges, 'Free');
        // // assert.equal(packagingFee, ' ₹49');
        // assert.equal(totalCost, ' ₹11,999');
        deliveryCharges.should.equal('Free');
        totalCost.should.equal(' ₹11,999');
    }
}
module.exports = AddtoCartPage;