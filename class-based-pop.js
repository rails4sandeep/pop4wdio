const Session = require('./pop/session');
const session = new Session();
const DuckDuckGo = require('./pop/duck-duck-go-class');
const duckDuckGo = new DuckDuckGo();

const wdioExample = async () => {
    const browser = await session.newSession();
    const Page = require('./pop/page');
    const page = new Page(browser);
    await page.goto('https://duckduckgo.com');
    await page.enterText(duckDuckGo.searchInput,'WebdriverIO');
    await page.clickElement(duckDuckGo.searchButton);
    const title = await page.getTitle();
    console.log(title); // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    await session.closeSession(browser);
} ;

wdioExample();

