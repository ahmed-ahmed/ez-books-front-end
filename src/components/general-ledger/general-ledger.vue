<template>
    <table class="table">
        <tr>
            <th>Account</th>
            <th>Debt</th>
            <th>Credit</th>
            <th>Balance</th>
        </tr>
        <tr v-for="g in generalLedger" :key="g.id">
            <td>{{g.name}}</td>
            <td>{{g.credit}}</td>
            <td>{{g.debt}}</td>
            <td>{{g.total}}</td>
        </tr>
    </table>
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
            api.get(`reports/generalLedger`).then(res => {
                this.generalLedger = res.data;
            });
        }
    }
</script>

<style scoped>

</style>
