const Page = require('./pop/page');
const Session = require('./pop/session');
const session = new Session();

const duckDuckGo = require('./pop/duck-duck-go-obj');

const search = async () => {
    const browser = await session.newSession();
    const page = new Page(browser);
    await page.goto('https://duckduckgo.com');
    await page.enterText(duckDuckGo.searchInput,'WebdriverIO');
    await page.clickElement(duckDuckGo.searchButton);
    const title = await page.getTitle();
    console.log(title);
    await session.closeSession(browser);
};

search();
