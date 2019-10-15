<template>
    <div class="card">
        <div class="header">Add Journal</div>
        <div class="body">
            <div class="col-4">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="form-label" for="textinput">Date</label>
                        <input name="textinput" type="text" placeholder="Date"
                               v-model="journal.date"
                               class="form-control input-md"
                               required="">
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="form-label" for="textinput">Journal# </label>
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

            <div class="col-12">
                <table class="table table-bordered">
                    <tr>
                        <th>Account</th>
                        <th>Description</th>
                        <th>Debits</th>
                        <th>Credits</th>
                    </tr>
                    <tr v-for="d in journal.journalDetails" :key="d.id">
                        <td>
                            <select class="form-control" v-model="d.account.id">
                                <template v-for="group in Object.keys(accounts)" :id="group">
                                    <optgroup :label="group">
                                        <option v-for="a in accounts[group]" :value="a.id" :key="a.id">{{a.name}}</option>
                                    </optgroup>
                                </template>
                            </select>
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
                    <tr>
                        <td colspan="2" class="text-right">Sub Total</td>
                        <td>{{totalDebit}}</td>
                        <td>{{totalCredit}}</td>
                    </tr>
                </table>
            </div>

            <div class="form-group">
                <div class="col-md-4">
                    <button class="btn btn-primary btn-sm" @click="addLine()">add another line</button>
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
    // import select2 from "../select2";

    export default {
        name: "addJournal",
        components: {
            // select2
        },
        data: function () {
            return {
                accounts: [],
                journal: {
                    journalDetails: [{
                        account: {},
                        debt: 0,
                        credit: 0
                    }]
                }
            }
        },
        mounted: async function () {
            let res = await api.get(`accounts`);
            this.accounts = this.groupBy(res.data, `parentName`)

            //     res.data.map(a => {
            //     return {id: a.id, text: a.name}
            // });
        },
        methods: {
            addLine: function () {
                this.journal.journalDetails.push({debt: 0, credit: 0, account: {}});
            },
            save: function () {
                api.post(`journals`, this.journal).then(console.log)
            },
            groupBy: function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            }
        },
        computed: {
            totalCredit: function () {
                return this.journal.journalDetails.map(a => parseFloat(a.credit)).reduce((a, b) => a + b, 0);
            },
            totalDebit: function () {
                return this.journal.journalDetails.map(a => parseFloat(a.debt)).reduce((a, b) => a + b, 0);
            }
        }
    }
</script>

<style scoped>

</style>
