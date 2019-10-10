<template>
    <div>
        <h2>Balance Sheet</h2>

       <h3>Assets</h3>
        <balance-sheet-accounts :accounts="assets.accounts"/>

        <h3>liabilities</h3>
        <balance-sheet-accounts :accounts="liabilities.accounts"/>

        <h3>equities</h3>
        <balance-sheet-accounts :accounts="equities.accounts"/>


    </div>
</template>
<script>
    import api from '../../config/api.config';
    import BalanceSheetAccounts from "./BalanceSheetAccounts";

    export default {
        name: 'BalanceSheet',
        components: {BalanceSheetAccounts},
        data: () => ({
            assets: {
                total: 4000,
                accounts: [
                    {
                        name: `Current Assets`,
                        total: 6000,
                        childAccounts: [
                            {
                                name: `Cash`,
                                accounts: [{name: `Petty Cash`, balanced: 1000}],
                                total: 3000
                            },
                            {
                                name: `Bank`,
                                accounts: [{name: `Chase Bank`, balanced: 3000}],
                                total: 3000
                            }
                        ],

                    },
                ]
            },
            liabilities: {
                total: 0,
                accounts: [
                    // {
                    //     name: `Current Assets`,
                    //     total: 0,
                    //     childAccounts: [
                    //         {
                    //             accountType: `Cash`,
                    //             accounts: [{name: `Petty Cash`, balanced: 1000}],
                    //             total: 3000
                    //         },
                    //         {
                    //             accountType: `Bank`,
                    //             accounts: [{name: `Chase Bank`, balanced: 3000}],
                    //             total: 3000
                    //         }
                    //     ],
                    //
                    // },
                ]
            },
            equities: {
                total: 4000,
                accounts: [
                    {
                        name: `Current Year Earnings`,
                        total: -1000,
                    },
                    {
                        name: `Owner's Equity`,
                        total: 5000,
                    },
                ]
            },
        }),
        mounted() {
            this.getAccounts();
        },
        methods: {
            async getAccounts() {
                let response = await api.get(`balancesheet`);
                this.accounts = response.data;
                console.log(this.accounts)
            }
        }
    }
</script>