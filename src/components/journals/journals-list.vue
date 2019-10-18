<template>
    <div class="card">
        <div class="header">
            <div class="col-5">
                <i class="far fa-newspaper"></i>
                Journals
            </div>
            <div class="col-7 text-right">
                <router-link to="/journals/add" class="btn btn-outline-primary btn-sm add-account-link">
                    <i class="fas fa-plus"></i>
                    Add Journal
                </router-link>
            </div>

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
                journals: []
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
