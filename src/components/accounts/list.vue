<template>
    <div class="card">
        <div class="header">
            Chart of Accounts
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
