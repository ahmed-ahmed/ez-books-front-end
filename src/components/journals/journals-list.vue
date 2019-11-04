<template>
    <div class="card">
        <div class="header">
            <div class="col-5">
                <i class="far fa-newspaper"></i>
                Journals
            </div>
            <div class="col-7 text-right">
                <router-link to="/journals/add" class="el-button el-button--default el-button--mini add-account-link">
                    <i class="el-icon-plus"></i>
                    Add Journal
                </router-link>
            </div>

        </div>
        <div class="body">
            <!--            :default-sort = "{prop: 'date', order: 'descending'}"-->
            <el-table :data="journals">
                <el-table-column prop="date" label="Date" sortable width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">
                            <a href="#">
                                {{ scope.row.date }}
                            </a>
                        </span>
                    </template>

                </el-table-column>
                <el-table-column
                        prop="no"
                        label="Journal #"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="Status">
                </el-table-column>
                <el-table-column
                        align="right"
                        prop="amount"
                        label="Amount">
                </el-table-column>
                <el-table-column
                        label="Created by">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import api from '../../services/api.service';

    export default {
        name: "journalsList",
        data: function () {
            return {
                journals: []
            }
        },
        mounted: async function () {
            let res = await api.get(`journals`);
            this.journals = res.data;
        },
        methods: {
            // currencyFormat: function(row, column, cellValue, index) {
            //     return row
            // }
        }

    }
</script>

<style scoped>

</style>
