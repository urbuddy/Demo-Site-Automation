const Selector = require("../Selectors/Selectors");
const assert = require('chai').assert;

class SearchProduct{
    async SearchProduct(product){
        await page.type(Selector.searchinput, product);
        await page.click(Selector.searchbtn);
    }
    
    async getListofSearchedProductAndVerify(){
        await page.waitForXPath(Selector.productlistclass);
        let SearchedProductList = await page.$$eval(Selector.productlist, ele => { return ele.map(e => e.innerText)});
        assert.equal(SearchedProductList.length, 24);
    }
}
module.exports = SearchProduct;