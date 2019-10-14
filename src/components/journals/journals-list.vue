<template>
    <div class="card">
        <div class="header">
            Journal
        </div>
        <div class="body">
            <table class="table table-bordered table-striped">
                <tr>
                    <td>Date</td>
                    <td>Journal #</td>
                    <td>Status</td>
                    <td>Amount</td>
                </tr>

                <tr v-for="j in journals" :key="j.id">
<!--                    <td>{{j.id}}</td>-->
                    <td>{{j.date}}</td>
                    <td>{{j.no}}</td>
                    <td>{{j.status}}</td>
                    <td>{{j.amount}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import api from "../../config/api.config";

    export default {
        name: "journalsList",
        data: function () {
            return {
                journals: [ ]
            }
        },
        mounted: async function () {
            let res = await api.get(`journals`);
            this.journals = res.data;
        },

    }
</script>

<style scoped>

</style>
