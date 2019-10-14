<template>
    <div class="card">
        <div class="header">
            General Ledger
        </div>
        <div class="body">
            <table class="table table-bordered table-striped">

                <tr>
                    <th>Account</th>
                    <th class="text-right">Debt</th>
                    <th class="text-right">Credit</th>
                    <th class="text-right">Balance</th>
                </tr>
                <tr v-for="g in generalLedger" :key="g.id">
                    <td>{{g.name}}</td>
                    <td class="text-right">{{g.creditBalance}}</td>
                    <td class="text-right">{{g.debtBalance}}</td>
                    <td class="text-right">{{g.creditBalance - g.debtBalance}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import api from '../../config/api.config';

    export default {
        name: "generalLedger",
        data: function () {
            return {
                generalLedger: []
            }
        },
        mounted: function () {
            api.get(`reports/accountBalances`).then(res => {
                this.generalLedger = res.data;
            });
        }
    }
</script>

<style scoped>

</style>
