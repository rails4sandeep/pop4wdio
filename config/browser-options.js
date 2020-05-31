browserOptions =
{
    logLevel: 'debug',
        capabilities: {
            browserName: 'chrome',
            baseUrl: 'http://localhost',
            'goog:chromeOptions': {
                // to run chrome headless the following flags are required
                // (see https://developers.google.com/web/updates/2017/04/headless-chrome)

            }
    }
};

module.exports = browserOptions;

