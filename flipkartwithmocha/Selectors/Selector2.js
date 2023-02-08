module.exports = {
    elementPageXPath: "//h5[normalize-space()='Elements']",
    linkClassXPath: "//span[@class='text' and text()='Links']",
    homeLink: "//a[@id='simpleLink' and text()='Home']",
    linkResponse: function(statusCode) {
        return "//b[normalize-space()='"+statusCode+"']";
    },
    statusCodeLinkResponse: "//p[@id='linkResponse']/b[1]",
    statusTextLinkResponse: "//p[@id='linkResponse']/b[2]",
    brokenLinkClassXPath: "//span[text()='Broken Links - Images']",
    brokenLinkXPath: "//a[text()='Click Here for Broken Link']",
    messageClass: ".example",
    paragraphClass: "//div[@class='example']/p",
    createdLinkID: "#created",
    noContentLinkID: "#no-content",
    movedLinkID: "#moved",
    badRequestLinkID: "#bad-request",
    unauthorizedLinkID: "#unauthorized",
    forbiddenLinkID: "#forbidden",
    invalidURLLinkID: "#invalid-url",
};