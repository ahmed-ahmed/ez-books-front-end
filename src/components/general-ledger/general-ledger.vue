<template>
    <div class="card">
        <div class="header">
            General Ledger
        </div>
        <div class="body">
            <div class="row">
                <div class="mx-auto col-11">
                    <el-table class="general-ledger" :data="generalLedger" style="width: 80%">
                        <el-table-column label="Account" prop="name"></el-table-column>
                        <el-table-column label="Debt" prop="creditBalance" class-name="text-right"></el-table-column>
                        <el-table-column label="Credit" prop="debtBalance" class-name="text-right"></el-table-column>
                        <el-table-column label="Balance" class-name="text-right">
                            <template slot-scope="scope">
                                <span class="text-right">{{ scope.row.creditBalance - scope.row.debtBalance }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../services/api.service';

    export default {
        name: "generalLedger",
        data: function () {
            return {
                generalLedger: []
            }
        },
        mounted: function () {
            api.get(`reports/accountBalances`).then(res => {
                this.generalLedger = res.data;
            });
        }
    }
</script>

<style scoped>

</style>
