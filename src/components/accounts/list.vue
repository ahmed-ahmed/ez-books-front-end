<template>
    <div class="card">
        <div class="header">
            <div class="col-5">
                Chart of Accounts
            </div>
            <div class="col-7 text-right">
                <router-link to="/accounts/add" class="btn btn-outline-primary btn-sm add-account-link">
                    <i class="fas fa-plus"></i>
                    Add Account
                </router-link>
            </div>
        </div>
        <div class="body">
            <table class="table table-bordered table-striped chart-of-account-list">
                <tr>
                    <td>Account</td>
                    <td>Type</td>
                </tr>
                <tr v-for="t in accounts" :key="t.id">
                    <td>{{t.name}}</td>
                    <td>{{t.parentName}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import api from '../../config/api.config';

    export default {
        name: 'AccountsList',
        data: () => (
            {
                accounts: {}
            }
        ),
        mounted() {
            this.getAccounts();
        },
        methods: {
            async getAccounts() {
                let response = await api.get(`accounts`);
                this.accounts = response.data;
            }
        }
    }
</script>
