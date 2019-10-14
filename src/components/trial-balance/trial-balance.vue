<template>
    <div class="card">
        <div class="header">
            Trial Balance
        </div>
        <div class="body">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th colspan="2">Account</th>
                    <th>Net Debt</th>
                    <th>Net Credit</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colspan="4"><b>Assets</b></td>
                </tr>
                <tr v-for="a in assets" :key="'a' + a.id">
                    <td></td>
                    <td>{{a.name}}</td>
                    <td>{{a.debt}}</td>
                    <td>{{a.credit}}</td>
                </tr>
                <tr>
                    <td colspan="4"><b>Equities</b></td>
                </tr>
                <tr v-for="e in equities" :key="'e'+ e.id">
                    <td></td>
                    <td>{{e.name}}</td>
                    <td>{{e.debt}}</td>
                    <td>{{e.credit}}</td>
                </tr>
                <tr>
                    <td colspan="4"><b>Income</b></td>
                </tr>
                <tr v-for="i in income" :key="'i'+i.id">
                    <td></td>
                    <td>{{i.name}}</td>
                    <td>{{i.debt}}</td>
                    <td>{{i.credit}}</td>
                </tr>
                <tr>
                    <td colspan="4"><b>Expense</b></td>
                </tr>
                <tr v-for="ex in expense" :key="'ex' + ex.id">
                    <td></td>
                    <td>{{ex.name}}</td>
                    <td>{{ex.debt}}</td>
                    <td>{{ex.credit}}</td>
                </tr>
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
    import api from '../../config/api.config';

    export default {
        name: "TrialBalance",
        data: () => (
            {
                assets: [],
                equities: [],
                income: [],
                expense: []
            }
        ),
        mounted: function () {
            api.get(`reports/trialBalance`).then(res => {
                this.assets = Object.values(res.data.Assets).flatMap(a => a);
                this.equities = Object.values(res.data.Equity).flatMap(a => a);
                this.income = Object.values(res.data["Income "]).flatMap(a => a);
                this.expense = Object.values(res.data.Expense).flatMap(a => a);
            });
        },
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
        }
    }
</script>

<style scoped>

</style>
