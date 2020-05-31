browserOptions =
{
    logLevel: 'silent',
        capabilities: {
            automationProtocol: 'devtools',
            browserName: 'chrome',
            'goog:chromeOptions': {
                // to run chrome headless the following flags are required
                // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
                args: ['--headless', '--disable-gpu']
            }
    }
};

module.exports = browserOptions;

