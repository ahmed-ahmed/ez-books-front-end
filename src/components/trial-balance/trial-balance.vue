<template>
    <table class="table">
        <thead>
        <tr>
            <th colspan="2">Account</th>
            <th>Net Debt</th>
            <th>Net Credit</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td colspan="4">Assets</td>
        </tr>
        <tr v-for="a in assets" :key="'a' + a.id">
            <td></td>
            <td>{{a.name}}</td>
            <td>{{a.debt}}</td>
            <td>{{a.credit}}</td>
        </tr>
        <tr>
            <td colspan="4">Equities</td>
        </tr>
        <tr v-for="e in equities" :key="'e'+ e.id">
            <td></td>
            <td>{{e.name}}</td>
            <td>{{e.debt}}</td>
            <td>{{e.credit}}</td>
        </tr>
        <tr>
            <td colspan="4">Income</td>
        </tr>
        <tr v-for="i in income" :key="'i'+i.id">
            <td></td>
            <td>{{i.name}}</td>
            <td>{{i.debt}}</td>
            <td>{{i.credit}}</td>
        </tr>
        <tr>
            <td colspan="4">Expense</td>
        </tr>
        <tr v-for="ex in expense" :key="'ex' + ex.id">
            <td></td>
            <td>{{ex.name}}</td>
            <td>{{ex.debt}}</td>
            <td>{{ex.credit}}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>{{totalDebt}}</td>
            <td>{{totalCredit}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "TrialBalance",
        data: () => ({
            assets: [
                {id: 1, name: `chase bank`, debt: 2000, credit: 0},
                {id: 2, name: `Petty Cash`, debt: 2000, credit: 0}
            ],
            equities: [
                {id: 1, name: `chase bank`, debt: 0, credit: 2000},
                {id: 2, name: `Petty Cash`, debt: 0, credit: 3000}
            ],
            income: [
                {id: 1, name: `chase bank`, debt: 2000, credit: 0},
                {id: 2, name: `Petty Cash`, debt: 2000, credit: 0}
            ],
            expense: [
                {id: 1, name: `chase bank`, debt: 0, credit: 2000},
                {id: 2, name: `Petty Cash`, debt: 0, credit: 2000}
            ]
        }),
        computed: {
            allAccounts: function () {
                return [...this.assets, ...this.equities, ...this.income, ...this.expense]
            },
            totalCredit: function () {
                return this.allAccounts.map(a => a.credit).reduce(((a, b) => a + b), 0);
            },
            totalDebt: function () {
                return this.allAccounts.map(a => a.debt).reduce(((a, b) => a + b), 0);
            }
            // total: ()=> this.totaldebt() + this.totalCredit()

        }
    }
</script>

<style scoped>

</style>