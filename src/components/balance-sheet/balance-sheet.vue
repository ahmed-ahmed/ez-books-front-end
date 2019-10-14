<template>
    <div class="card">
        <div class="header">
            Balance Sheet
        </div>
        <div class="body">
            <ul>
                <li v-for="t in accountTypes" :id="t.id">
                    {{t.name}}

                    <ul>
                        <li v-for="c in t.accountCategorieses" :id="c.id">
                            {{c.name}}
                            <ul>
                                <li v-for="a in c.accounts" :id="a.id">
                                    <div class="row">
                                        <div class="col-4">{{a.name}}</div>
                                        <div class="col-4 text-right">{{a.credit - a.debt}}</div>
                                    </div>
                                </li>

                                <li>
                                    <div class="row">
                                        <div class="col-md-4"></div>
                                        <div class="col-md-4 text-right">===========================</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"></div>
                                        <div class="col-md-4 text-right">4000</div>
                                    </div>

                                </li>
                            </ul>
                        </li>
                    </ul>

                </li>
            </ul>

        </div>
    </div>
</template>
<script>
    import api from '../../config/api.config';
    import BalanceSheetAccounts from "./BalanceSheetAccounts";

    export default {
        name: 'BalanceSheet',
        components: {BalanceSheetAccounts},
        data: () => (
            {
                accountTypes: {}
            }
        ),
        mounted() {
            this.getAccounts();
        },
        methods: {
            async getAccounts() {
                let response = await api.get(`accountTypes`);
                this.accountTypes = response.data;
            }
        }
    }
</script>
