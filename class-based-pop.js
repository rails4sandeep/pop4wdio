const { remote } = require('webdriverio');


const DuckDuckGo = require('./pop/duck-duck-go-class');
const duckDuckGo = new DuckDuckGo();

const wdioExample = async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    });
    const Page = require('./pop/page');
    const page = new Page(browser);
    await page.goto('https://duckduckgo.com');
    await page.enterText(duckDuckGo.searchInput,'WebdriverIO');
    await page.clickElement(duckDuckGo.searchButton);
    const title = await page.getTitle();
    console.log(title); // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    await page.close();
} ;

wdioExample();

