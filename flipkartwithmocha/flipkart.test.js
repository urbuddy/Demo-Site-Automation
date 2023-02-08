const LoginPopup = require("./pageModules/LoginPopup");
const SearchProductPage = require("./pageModules/SearchProduct");
const NewPageObjectModule = require("./pageModules/NewpageObjectModule");
const ProductDetailsPage = require("./pageModules/ProductDetailsPage");
const AddtoCartPage = require("./pageModules/AddtoCartPage");
const { beforeEach } = require('mocha');
const { afterEach } = require('mocha');
const login = new LoginPopup();
const searchproductpage = new SearchProductPage();
const newPageObject = new NewPageObjectModule();
const productDetails = new ProductDetailsPage();
const addtoCart = new AddtoCartPage();
const product = "SAMSUNG Watch 4";

describe('Flipkart Automation', function () {

  beforeEach(async () => {
    await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });
  });
  
  it(`Product Details Verification for Product "${product}"`, async () => {
    
    await login.InvalidEmailError();
    await login.PopupClose();

    await searchproductpage.SearchProduct(product);
    await searchproductpage.getListofSearchedProductAndVerify();

    const newPage = await newPageObject.getNewPageObject(); //get the page object
    await productDetails.getProductDetailsAndVerify(newPage);

    await productDetails.AddtoCartProductBtn(newPage);
    await addtoCart.getProductCostAndVerify(newPage);
  });

});
