const Selector = require("../Selectors/Selectors");
const assert = require('chai').assert;

class LoginPopup {

    async InvalidEmailError(){
        let submitBtn = await page.waitForXPath(Selector.submitButton);
        await page.type(Selector.emailinput, "harshalgawali");
        await submitBtn.click();
        let errortext = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.emailerror))[0]);
        assert.equal(errortext, "Please enter valid Email ID/Mobile number");
    }

    async PopupClose(){
        let closeBtn = await page.waitForXPath(Selector.xbtn);
        await closeBtn.click();
    }
}
module.exports = LoginPopup;