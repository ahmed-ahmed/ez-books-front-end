<template>
    <div class="card">
        <div class="header">
            Chart of Accounts
        </div>
        <div class="body">
            <ul class="chart-of-account-list">
                <li v-for="t in accounts" :id="t.id">
                    <div class="row">
                        <div class="col-md-4">{{t.name}}</div>
                        <div class="col-md-4">{{t.parentName}}</div>
                    </div>

<!--                    <ul>-->
<!--                        <li v-for="c in t.children" :id="c.id">-->
<!--                            <div class="row">-->
<!--                                <div class="col-md-4">{{c.name}}</div>-->
<!--                                <div class="col-md-4">{{c.accountType}}</div>-->
<!--                            </div>-->

<!--                            &lt;!&ndash;                            <ul>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                <li v-for="a in c.accounts" :id="a.id">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    {{a.name}}&ndash;&gt;-->
<!--                            &lt;!&ndash;                                </li>&ndash;&gt;-->
<!--                            &lt;!&ndash;                            </ul>&ndash;&gt;-->

<!--                        </li>-->
<!--                    </ul>-->

                </li>
            </ul>

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
                this.accounts = response.data.filter(a => !a.parentAccount);
            }
        }
    }
</script>
