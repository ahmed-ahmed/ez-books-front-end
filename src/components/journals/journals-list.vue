<template>
    <table class="table">
        <tr>
            <td>Date</td>
            <td>Journal #</td>
            <td>Status</td>
            <td>Amount</td>
        </tr>

        <tr v-for="j in journals" :key= "j.id">
            <td>{{j.id}}</td>
            <td>{{j.date}}</td>
            <td>{{j.no}}</td>
            <td>{{j.status}}</td>
        </tr>
    </table>

</template>

<script>
    export default {
        name: "journalsList",
        data: function () {
            return {
                journals: [
                    {
                        id: 1,
                        date: '12-12-12',
                        no: 1521,
                        status: 'paid',
                        amount: '$440'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
