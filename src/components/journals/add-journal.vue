<template>
    <div class="card">
        <div class="header">Add Journal</div>
        <div class="body">
            <div class="col-4">
                <form class="form-horizontal">
                    <div class="form-group co">
                        <label class="form-label" for="textinput">Date</label>
                        <input name="textinput" type="text" placeholder="Date"
                               v-model="journal.date"
                               class="form-control input-md"
                               required="">
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 form-label" for="textinput">Journal# </label>
                        <input id="textinput" name="textinput" type="text" placeholder="Enter Journal No."

                               class="form-control input-md" required="">
                    </div>

                    <!-- Textarea -->
                    <div class="form-group">
                        <label class="form-label" for="Notes">Notes</label>
                        <textarea class="form-control" id="Notes"/>

                    </div>
                </form>
            </div>
            <table class="table table-bordered">
                <tr>
                    <th>Account</th>
                    <th>Description</th>
                    <th>Debits</th>
                    <th>Credits</th>
                </tr>
                <tr v-for="d in journal.journalDetails" :key="d.id">
                    <td>
                        <select2 :data="accounts" v-model="d.accountId"></select2>
                    </td>
                    <td>
                        <textarea class="form-control"></textarea>
                    </td>
                    <td>
                        <input type="text" class="form-control" v-model="d.debt"/>
                    </td>
                    <td>
                        <input type="text" class="form-control" v-model="d.credit"/>
                    </td>
                </tr>
            </table>
            <!-- Button -->
            <div class="form-group">
                <div class="col-md-4">
                    <button class="btn btn-primary" @click="addLine()">add another line</button>
                </div>
            </div>
        </div>

        <div class="footer">
            <!-- Button -->
            <div class="form-group">
                <div class="col-md-4">
                    <button id="singlebutton" name="singlebutton" class="btn btn-primary" @click="save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../../config/api.config";
    import select2 from "../select2";

    export default {
        name: "addJournal",
        components: {
            select2
        },
        data: function () {
            return {
                accounts: [],
                // options: [
                //     {
                //         id: 0,
                //         text: 'enhancement'
                //     },
                //     {
                //         id: 1,
                //         text: 'bug'
                //     },
                //     {
                //         id: 2,
                //         text: 'duplicate'
                //     },
                //     {
                //         id: 3,
                //         text: 'invalid'
                //     },
                //     {
                //         id: 4,
                //         text: 'wontfix'
                //     }
                // ],
                journal: {
                    journalDetails: [{
                        debt: 0,
                        credit: 0
                    }]
                }
            }
        },
        mounted: async function () {
            let res = await api.get(`accounts`);
            this.accounts = res.data.map(a => {
                return {id: a.id, text: a.name}
            });
        },
        methods: {
            addLine: function () {
                this.journal.journalDetails.push({});
            },
            save: function () {
                api.post(`journals`, this.journal).then(console.log)
            }
        }
    }
</script>

<style scoped>

</style>
