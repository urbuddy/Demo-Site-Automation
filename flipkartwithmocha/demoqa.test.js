const HomePage = require("./pageModules/HomePage");
const Links = require("./pageModules/Links");
const BrokenLink = require("./pageModules/BrokenLink");
const Selector = require("./Selectors/Selector2");
const { beforeEach } = require('mocha');
const brokenLink = new BrokenLink();
const homepage = new HomePage();
const links = new Links();

describe('"demoqa.com" Site Automation', function () {
  
    beforeEach(async () => {
        await homepage.elementPageBtn();
    });
    
    it(`Links Automation of "demoqa.com"`, async () => {
        
        await links.clickLinksLinkBtn();
        await links.clickHomeLinkAndVerifyTitleAndURL();

        let status = {
            code: '201',
            text: 'Created'
        }
        await links.clickAPILinkAndVerifyStatusCodeAndText(Selector.createdLinkID, status);

        status = {
            code: '204',
            text: 'No Content'
        }
        await links.clickAPILinkAndVerifyStatusCodeAndText(Selector.noContentLinkID, status);

        status = {
            code: '301',
            text: 'Moved Permanently'
        }
        await links.clickAPILinkAndVerifyStatusCodeAndText(Selector.movedLinkID, status);

        status = {
            code: '400',
            text: 'Bad Request'
        }
        await links.clickAPILinkAndVerifyStatusCodeAndText(Selector.badRequestLinkID, status);

        status = {
            code: '401',
            text: 'Unauthorized'
        }
        await links.clickAPILinkAndVerifyStatusCodeAndText(Selector.unauthorizedLinkID, status);

        status = {
            code: '403',
            text: 'Forbidden'
        }
        await links.clickAPILinkAndVerifyStatusCodeAndText(Selector.forbiddenLinkID, status);

        status = {
            code: '404',
            text: 'Not Found'
        }
        await links.clickAPILinkAndVerifyStatusCodeAndText(Selector.invalidURLLinkID, status);
    });

    it('Broken Links Automation of "demoqa.com"', async () => {
        
        await brokenLink.clickBrokenLinksLinkBtn();

        await brokenLink.clickBrokenLinkAndVerifyResult();
    });
});