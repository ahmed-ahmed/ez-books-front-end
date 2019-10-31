<template>
    <div class="card">
        <div class="header">
            <i class="fas fa-file-invoice-dollar"></i>
            Add Account
        </div>
        <div class="body">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="form-label required">Account Type</label>
                    <select class="form-control account-type" v-model="account.parentId">
                        <template v-for="group in Object.keys(accounts)" :id="group">
                            <optgroup :label="group">
                                <option v-for="a in accounts[group]" :value="a.id" :key="a.id">{{a.name}}</option>
                            </optgroup>
                        </template>
                    </select>
                    <span class="text-danger" v-if="$v.account.parentId.$error">Account type is required!</span>
                </div>

                <div class="form-group">
                    <label class="form-label required">Account Name</label>
                    <input v-model="account.name" type="text" class="form-control input-md account-name" @keyup.enter="save"
                           ref="accountName"/>
                    <span class="text-danger" v-if="$v.account.name.$error">Account name is required!</span>
                </div>

                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea  v-model="account.description" type="text" class="form-control input-md description">
                    </textarea>
                </div>

            </form>

        </div>
        <div class="footer">
            <button class="btn btn-primary save-btn" @click="save()">Save</button>
        </div>
    </div>
</template>

<script>
    import api from "../../config/api.config";
    import {required} from "vuelidate/lib/validators";


    export default {
        name: "addAccount",
        data: function () {
            return {
                account: {},
                parentId: null,
                accounts: [],
            }
        },
        validations: {
            account: {
                name: {required},
                parentId: {required}
            }
        },
        mounted: async function () {
            let res = await api.get(`accountTypes`);
            this.accounts = this.groupBy(res.data, 'accountType')
            // this.accounts = res.data.map(a => {
            //     return {id: a.id, text: a.name}
            // });
        },
        methods: {
            save: async function () {
                this.$v.account.$touch();
                if (this.$v.account.$error) return;

                await this.$store.dispatch('accounts/add', this.account);
                this.$notify.success({
                    title: 'Info',
                    message: `Account ${this.account.name} Saved Successfully!`,
                    duration: 1000
                });

                this.$v.account.$reset();
                this.account.name = null;
                this.account.description = null;

                this.$refs.accountName.focus()

            },
            groupBy: function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            }
        }

    }
</script>

<style scoped>

</style>
