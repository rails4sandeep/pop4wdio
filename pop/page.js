
class Page {

    constructor(browser) {
        this.b = browser;
    };

    goto = async pageUrl => {
        await this.b.url(pageUrl);
    };

    getElementByXpath = async xpath => {
        return $(xpath);
    };

    getElementByAttributeValue = async (attribute, value) => {
        const e = './/*[@' + attribute + '=' + value + ']';
        return $(e);
    };

    scrollElementIntoView = async element => {
        const status = await element.isDisplayedInViewport();
        if (status) {
            return;
        }
        await element.scrollIntoView();
    };

    enterText = async (id, text) => {
        const e = await this.b.$(id);
        await e.waitForDisplayed();
        await this.scrollElementIntoView(e);
        await e.setValue(text);
    };

    clickElement = async id => {
        const e = await this.b.$(id);
        await e.waitForDisplayed();
        await this.scrollElementIntoView(e);
        await e.click();
    };

    getElementByText = async (type, text) => {
        const e = `.//type[contains(text(),${text})]`;
        return $(e);
    };

    pressSpecialKeys = async seq => {
        await this.b.keys(seq);
    };

    breath = async millisec => {
        await this.b.pause(millisec);
    };

    getTitle = async () => {
        const title = await this.b.getTitle();
        return title;
    };

    close = async () => {
        await this.b.deleteSession();
    };

}

module.exports = Page;
