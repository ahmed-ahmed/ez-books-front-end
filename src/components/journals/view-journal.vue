<template>
    <div class="card">
        <div class="header">Journal</div>
        <div class="body">

            <table>
                <tr>
                    <td>Account</td>
                    <td>Debits</td>
                    <td>Credits</td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>


</template>

<script>
    export default {
        name: "viewJournal",
        data: function () {
            return {
                journal: {}
            }
        },
        mounted: async function () {
            let res = await api.get(`accounts`);
            this.accounts = res.data.map(a => {
                return {id: a.id, text: a.name}
            });
        },
    }
</script>

<style scoped>

</style>
