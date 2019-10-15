describe('Accounts Test',  function() {
    it('Shows the chart of accounts!', function() {
        cy.visit(`http://localhost:8081`)
        // cy.get(`#app`)
        cy.get('.chart-of-account-link').click()

        cy.get('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)').should(($accountName) => {
            expect($accountName.text()).to.eq(`Opening, Balance Adjustments`);
        })

        cy.get('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(2)').should(($accountType) => {
            expect($accountType.text()).to.eq(`Equity`);
        })


        // const $accountName = await cy.get(`.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)`)
        //
        // expect($accountName.text()).to.eq(`Opening, Balance Adjustments`);


        // await browser
        //     .url(process.env.VUE_DEV_SERVER_URL)
        //     .waitForElementVisible('#app', 5000)
        //     .click(sideBar.chartOfAccounts)
        //     .waitForElementVisible('.chart-of-account-list', 5000)
        //     .assert.containsText('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)', `Opening, Balance Adjustments`)
        //     .assert.containsText('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(2)', `Equity`)
        //     .end();

    })
})
