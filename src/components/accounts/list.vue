<template>
    <div class="card">
        <div class="header">
            <div class="col-5">
                Chart of Accounts
            </div>
            <div class="col-7 text-right">
                <router-link to="/accounts/add" class="el-button el-button--default el-button--mini add-account-link">
                    <i class="el-icon-plus"></i>
                    Add Account
                </router-link>
            </div>
        </div>
        <div class="body">
            <el-table class="chart-of-account-list"
                      :data="accounts"
                      :default-sort="{prop: 'name', order: 'descending'}"
                      style="width: 100%">
                <el-table-column
                        prop="name"
                        label="Account"
                        sortable
                >
                </el-table-column>
                <el-table-column
                        prop="accountSubType"
                        label="Type"
                        sortable
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'AccountsList',
        computed: mapState({
            accounts: state => state.accounts.list
        })
    }
</script>
