<template>
    <div>
        <div>
            <h2>Accounts</h2>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="account in accounts" :key="account.id">
                        <td>{{account.name}}</td>
                        <td>{{account.code}}</td>
                        <td>{{account.accountType}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import api from '../../config/api.config';

    export default {
        name: 'AccountsList',
        data: () => ({
            accounts: [],
        }),
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