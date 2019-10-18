describe('Accounts Test',  function() {
    it(`add new account `,  ()=> {
        cy.visit(`http://localhost:8080`)

        cy.get('.chart-of-account-link').click()

        cy.get('.add-account-link').click()


        // cy.get(`.account-type`).click()
        cy.get('.account-type').select(`Bank`)
        // cy.get('.account-type').contains('5').click({ force: true });

        cy.get('.account-name').type(`Chase Bank`);

        cy.get('.description').type(`This is a bank`);

        cy.get(`.save-btn`).click();

        cy.get('.account-name').should(($accountName) => {
            expect($accountName.text()).to.eq(``)
        })

        cy.get('.notification-title').should(($notifications) => {
            expect($notifications.text()).to.eq(`Account Chase Bank Saved Successfully!`)
        });

        cy.get('.chart-of-account-link').click()

        cy.get('.chart-of-account-list tr').its('length').then(lastItem=> {
            console.log(lastItem)

            cy.get(`.chart-of-account-list > tr:nth-child(${lastItem - 1}) > td:nth-child(1)`).then(a=> {
                expect(a.text()).to.eq('Chase Bank')
                console.log(a.text());
                }
            )

            cy.get(`.chart-of-account-list > tr:nth-child(${lastItem - 1}) > td:nth-child(2)`).then(a=> {
                    expect(a.text()).to.eq('Bank')
                    console.log(a.text());
                }
            );

            // expect(cy.get(`.chart-of-account-list > tr:nth-child(${lastItem - 1}) > td:nth-child(1)`)).to.eq(`Chase Bank`);
            // expect(cy.get(`.chart-of-account-list > tr:nth-child(${lastItem - 1}) > td:nth-child(2)`).text()).to.eq(`Bank`);
        })

        // #app > div.page > div > div.body > table > tr:nth-child(37) > td:nth-child(1)


        // expect(lastItem).to.eq(12)

        // cy.get('.datatable tr').should(($tr) => {
        //     expect($tr).to.have.length(4)
        // })


        //     cy.get('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)').should(($accountName) => {
        //         expect($accountName.text()).to.eq(`Opening, Balance Adjustments`);
        //     })



        // notification appeared
        // await cy.get(`.account-name`);
        // cy.get(`.account-name`).then($accountName=> {
        //     expect($accountName.text()).to.eq(``);
        // })

        // const $accountName =  await cy.get(`.account-name`);
        // expect($accountName.text()).to.eq(``);
        // const $accountName = await cy.get(`.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)`)

        // text emptied
        // expect($accountName.text()).to.eq(`Opening, Balance Adjustments`);

        // cy.get('.chart-of-account-link').click()



    })
    // it('Shows the chart of accounts!', function() {
    //     cy.visit(`http://localhost:8080`)
    //     // cy.get(`#app`)
    //     cy.get('.chart-of-account-link').click()
    //
    //     cy.get('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)').should(($accountName) => {
    //         expect($accountName.text()).to.eq(`Opening, Balance Adjustments`);
    //     })
    //
    //     cy.get('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(2)').should(($accountType) => {
    //         expect($accountType.text()).to.eq(`Equity`);
    //     })
    //
    //
    //     // const $accountName = await cy.get(`.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)`)
    //     //
    //     // expect($accountName.text()).to.eq(`Opening, Balance Adjustments`);
    //
    //
    //     // await browser
    //     //     .url(process.env.VUE_DEV_SERVER_URL)
    //     //     .waitForElementVisible('#app', 5000)
    //     //     .click(sideBar.chartOfAccounts)
    //     //     .waitForElementVisible('.chart-of-account-list', 5000)
    //     //     .assert.containsText('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(1)', `Opening, Balance Adjustments`)
    //     //     .assert.containsText('.chart-of-account-list > li:nth-child(11) .col-md-4:nth-child(2)', `Equity`)
    //     //     .end();
    //
    // })
})
