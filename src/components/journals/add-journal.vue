<template>
    <div>
        <form class="form-horizontal">
            <fieldset>
                <legend>Add Journal</legend>

                <div class="form-group">
                    <label class="col-md-4 control-label" for="textinput">Date</label>
                    <div class="col-md-4">
                        <input name="textinput" type="text" placeholder="Date"
                               v-model="journal.date"
                               class="form-control input-md"
                               required="">
                        <span class="help-block">Enter journal date</span>
                    </div>
                </div>

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="textinput">Journal# </label>
                    <div class="col-md-4">
                        <input id="textinput" name="textinput" type="text" placeholder="Enter Journal No."

                               class="form-control input-md" required="">
                        <span class="help-block">Journal# </span>
                    </div>
                </div>

                <!-- Textarea -->
                <div class="form-group">
                    <!--                    <label class="col-md-4 control-label" for="Notes">Notes</label>-->
                    <div class="col-md-4">
                        <!--                        <textarea class="form-control" id="Notes"-->
                        <!--                                  v-model="journal.notes"-->
                        <!--                                  name="Notes">Enter Notes.</textarea>-->
                    </div>
                </div>

            </fieldset>
        </form>

        <table class="table">
            <tr>
                <th>Account</th>
                <th>Description</th>
                <th>Debits</th>
                <th>Credits</th>
            </tr>
            <tr v-for="d in journal.journalDetails" :key="d.id">
                <td>
                    <select2 :data="accounts" v-model="d.accountId"></select2>
                    <!--                    <select id="selectbasic" name="selectbasic" class="form-control" v-model="d.accountId">-->
                    <!--                        <option v-for="a in accounts" :value="a.id" :key="a.id">{{a.name}}</option>-->
                    <!--                    </select>-->
                </td>
                <td>
                    <!--                    <textarea v-model="d.description"></textarea>-->
                </td>
                <td>
                    <input type="text" v-model="d.debt"/>
                </td>
                <td>
                    <input type="text" v-model="d.credit"/>
                </td>
            </tr>
        </table>
        <!-- Button -->
        <div class="form-group">
            <div class="col-md-4">
                <button class="btn btn-primary" @click="addLine()">add another line</button>
            </div>
        </div>


        <!-- Button -->
        <div class="form-group">
            <div class="col-md-4">
                <button id="singlebutton" name="singlebutton" class="btn btn-primary" @click="save()">Save</button>
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
