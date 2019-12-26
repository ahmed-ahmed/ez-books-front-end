<template>
    <div class="card">
        <div class="header">
            Trial Balance
        </div>
        <div class="body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th colspan="2">Account</th>
                    <th>Net Debt</th>
                    <th>Net Credit</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="accountCategory in Object.keys(accounts)">
                    <tr :key="accountCategory">
                        <td colspan="4"><b>{{accountCategory}}</b></td>
                    </tr>
                    <tr v-for="a in accounts[accountCategory]" :key="'a' + a.id">
                        <td></td>
                        <td>{{a.name}}</td>
                        <td>{{a.debtBalance}}</td>
                        <td>{{a.creditBalance}}</td>
                    </tr>
                </template>
                <tr>
                    <td><b>Total</b></td>
                    <td></td>
                    <td>{{totalDebt}}</td>
                    <td>{{totalCredit}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import api from '../../services/api.service';

    export default {
        name: "TrialBalance",
        data: () => (
            {
                accounts: {
                    Assets: [],
                    Liability: [],
                },
                // assets: [],
                // equities: [],
                // income: [],
                // expense: []
            }
        ),
        mounted: async function () {
            let res = await api.get(`reports/trialBalance`);
            this.accounts = this.groupBy(res.data, `accountType`)
            // api.get(`reports/accountBalances`).then(res => {
            //     this.assets = Object.values(res.data.Assets).flatMap(a => a);
            //     this.equities = Object.values(res.data.Equity).flatMap(a => a);
            //     this.income = Object.values(res.data["Income "]).flatMap(a => a);
            //     this.expense = Object.values(res.data.Expense).flatMap(a => a);
            // });
        },
        computed: {
            allAccounts: function () {
                return [...this.accounts.Assets, ...this.accounts.Liability]//, ...this.accounts.income, ...this.accounts.expense]
            },
            totalCredit: function () {
                return this.allAccounts.map(a => a.creditBalance).reduce(((a, b) => a + b), 0);
            },
            totalDebt: function () {
                return this.allAccounts.map(a => a.debtBalance).reduce(((a, b) => a + b), 0);
            }
        },
        methods: {
            groupBy: function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            }
        }
    }
</script>

<style scoped>

</style>
