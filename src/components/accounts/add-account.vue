<template>
    <div class="card">
        <div class="header">
            Create Account
        </div>
        <div class="body">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="form-label">Account Type</label>
                    <select class="form-control" v-model="account.parentId">
                        <template v-for="group in Object.keys(accounts)" :id="group">
                            <optgroup :label="group">
                                <option v-for="a in accounts[group]" :value="a.id" :key="a.id">{{a.name}}</option>
                            </optgroup>
                        </template>
<!--                        <optgroup v-for="a in accounts" label="{{Object.keys(a)}}">-->
<!--                            <option v-for="a in accounts" :value="a.id" :key="a.id">{{a.name}}</option>-->
<!--                        </optgroup>-->
                    </select>
                    <!--                    <input name="textinput" type="text" class="form-control input-md">-->
                </div>

                <div class="form-group">
                    <label class="form-label">Account Name</label>
                    <input name="textinput" v-model="account.name" type="text" class="form-control input-md">
                </div>

                <div class="form-group">
                    <label class="form-label">Account Code</label>
<!--                    <input name="textinput" v-model="account.code" type="text" class="form-control input-md">-->
                </div>

                <div class="form-group">
                    <label class="form-label">Description</label>
<!--                    <input name="textinput" v-model="account.description" type="text" class="form-control input-md">-->
                </div>

            </form>

        </div>
        <div class="footer">
            <!-- Button -->
            <button id="singlebutton" name="singlebutton" class="btn btn-primary" @click="save()">Save</button>
        </div>
    </div>
</template>

<script>
    import api from "../../config/api.config";

    export default {
        name: "addAccount",
        data: function () {
            return {
                account: {},
                parentId: null,
                accounts: [],
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
            save: function () {
                // this.account.parent = {
                //     id: this.parentId
                // };
                api.post(`accounts`, this.account).then(console.log)
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
