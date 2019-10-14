// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'Accounts Test': browser => {
        browser
            .url(process.env.VUE_DEV_SERVER_URL)
            .waitForElementVisible('#app', 5000)
            .click('.chart-of-account-link');


      // browser.expect.element('chart-of-account-list').children.length

      // .pause(1000)
            // .assert.eq()

            // .assert(`chart-of-account-list>li`).size(12)

            // .assert.elementPresent('.hello')
            // .assert.containsText('h1', 'Welcome to Your Vue.js App')
            // .assert.elementCount('img', 1)
      browser.end();
    }
};
