<template>
    <div>
        <h2>Balance Sheet</h2>

        <table class="table">
            <tr>
                <td colspan="3">Account</td>
                <td>Total</td>
            </tr>
            <tr>
                <td colspan="4">Assets</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">Current Assets</td>
            </tr>
            <tr>
                <td colspan="2"></td>
                <td>Bank</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">
                    Chase Bank
                </td>
                <td>
                    5000
                </td>
            </tr>
            <tr>
                5000
            </tr>

        </table>


    </div>
</template>
<script>
    import axios from 'axios';

    const baseUrl = "http://localhost:9001/api";

    export default {
        name: 'BalanceSheet',
        data: () => ({
            accounts: [],
        }),
        mounted() {
            this.getAccounts();
        },
        methods: {
            async getAccounts() {
                let response = await axios.get(baseUrl + `/balancesheet`);
                this.accounts = response.data;
                console.log(this.accounts)
            }
        }
    }
</script>