const Page = require('../pop/page');
const Session = require('../pop/session');
const session = new Session();
let browser, page;
const duckDuckGo = require('../pop/duck-duck-go-obj');

describe('Duck Duck Go', () => {

    beforeEach(async () => {
        timeout = 30000;
        browser = await session.newSession();
        page = new Page(browser);
    });

    afterEach(async () => {
        await session.closeSession(browser);
    });

    it('should return search results when we search', async () => {
        await page.goto('https://duckduckgo.com');
        await page.enterText(duckDuckGo.searchInput,'WebdriverIO');
        await page.clickElement(duckDuckGo.searchButton);
        const title = await page.getTitle();
        expect(title).not.toBeNaN();
    });
});
