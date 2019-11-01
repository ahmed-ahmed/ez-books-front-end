<template>
    <div class="card">
        <div class="header">Add Journal</div>
        <div class="body">
            <div class="row">
                <div class="col-8">
                    <form class="form-horizontal">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label class="form-label required" for="textinput">Date</label>
                                    <el-date-picker v-model="journal.date" type="date" placeholder="Pick a day"/>
                                    <div class="text-danger" v-if="$v.journal.date.$error">Date type is required!</div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="form-group">
                                    <label class="form-label" for="textinput">Journal# </label>
                                    <input id="textinput" name="textinput" type="text" placeholder="Enter Journal No."
                                           class="form-control input-md" style="height: 40px; margin-top: 10px;">
                                </div>
                            </div>
                        </div>
                        <!-- Textarea -->
                        <div class="form-group">
                            <label class="form-label" for="Notes">Notes</label>
                            <textarea class="form-control" id="Notes"/>

                        </div>
                    </form>
                </div>
            </div>
            <div class="m-5"></div>
            <div class="row">
                <div class="text-danger" v-if="$v.journal.journalDetails.$error">
                    <div v-if="!$v.journal.journalDetails.minLength">You must have at least two line items</div>
                </div>
                <div class="col-12">
                    <table class="table">
                        <tr>
                            <th colspan="2">Account</th>
                            <th>Debits</th>
                            <th>Credits</th>
                            <th>
<!--                                <i class="el-icon-plus" style="color: green; font-weight: bolder"></i>-->
                            </th>
                        </tr>
                        <tr v-for="(d,i) in journal.journalDetails" :key="d.id">
                            <td colspan="2">
                                <select2 :options="accounts" v-model="d.account.id">
                                </select2>
                                <div class="text-danger" v-if="$v.journal.journalDetails.$each[i].account.id.$error">
                                    Please select account!
                                </div>
                            </td>
                            <td>
                                <input type="text" class="form-control text-right" v-model="d.debt"/>
                            </td>
                            <td>
                                <input type="text" class="form-control text-right" v-model="d.credit"/>
                            </td>
                            <td>
                                <el-button type="danger" size="small" icon="el-icon-delete" round
                                           @click="deleteLine(i)"></el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <el-button round size="small" icon="el-icon-plus" @click="addLine()">Add Another Line</el-button>
                            </td>
                            <td class="text-right">
                                Sub Total
                            </td>
                            <td class="text-right">{{totalDebit}}</td>
                            <td class="text-right">{{totalCredit}}</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-right">

                </div>
            </div>
        </div>

        <div class="footer">
            <el-button type="plain" @click="save()">
                <i class="far fa-save"></i>
                Save As Draft
            </el-button>

            <el-button type="primary" @click="save()">
                <i class="far fa-save"></i>
                Save And Publish
            </el-button>
        </div>
    </div>
</template>

<script>
    import api from '../../services/api.service';
    import select2 from "../select2";
    import {required, minLength} from "vuelidate/lib/validators";
    // import Vue from 'vue'

    export default {
        name: "addJournal",
        components: {
            select2
        },
        data: function () {
            return {
                accounts: [],
                errors: ``,
                journal: {
                    journalDetails: []
                }
            }
        },
        validations: {
            journal: {
                date: {required},
                journalDetails: {
                    required,
                    minLength: minLength(2),
                    $each: {
                        account: {
                            id: {required}
                        }
                    }
                }
            }

        },
        mounted: async function () {
            let res = await api.get(`accounts`);
            this.accounts = res.data.reduce((a, b) => {
                const parentIndex = a.map(a => a.text).indexOf(b.parentName);
                let parentObject = {};
                if (parentIndex === -1) {
                    parentObject = {text: b.parentName, children: []}
                    a.push(parentObject)

                } else {
                    parentObject = a[parentIndex]
                }
                parentObject.children.push({id: b.id, text: b.name})
                return a;
            }, []);
            this.addLine();
            this.addLine();
        },
        methods: {
            addLine: function () {
                this.journal.journalDetails.push({debt: 0, credit: 0, account: {}});
            },
            deleteLine: function (index) {
                this.journal.journalDetails.splice(index, 1);
            },
            save: async function () {
                this.$v.journal.$touch();
                if (this.$v.journal.$error) return;

                if (!(this.totalCredit > 0 && this.totalDebit > 0)) {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Total debt and total credit must be greater than 0'
                    });
                    return;
                }

                if (this.totalCredit !== this.totalDebit) {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Total debt must equals total credit!'
                    });
                    return;
                }

                await api.post(`journals`, this.journal);
                this.$notify.success({
                    title: 'Info',
                    message: `Journal Is Saved Successfully!`,
                    duration: 1000
                });
                this.$router.push('/journals')
            }
        },
        computed: {
            totalCredit: function () {
                if (this.journal.journalDetails.length < 1) return 0;
                return this.journal.journalDetails.map(a => parseFloat(a.credit)).reduce((a, b) => a + b, 0);
            },
            totalDebit: function () {
                if (this.journal.journalDetails.length < 1) return 0;
                return this.journal.journalDetails.map(a => parseFloat(a.debt)).reduce((a, b) => a + b, 0);
            }
        }
    }
</script>

<style scoped>

</style>
