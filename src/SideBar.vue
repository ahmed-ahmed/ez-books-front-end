<template>
    <div class="sidebar card">
        <ul class="main-menu">
            <li>
                <router-link to="/">
                    <i class="fa fa-home"></i>
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="/accounts" class="chart-of-account-link">
                    <i class="el-icon-money"></i>
                    Chart Of Accounts
                </router-link>
            </li>
            <li>
                <router-link to="/journals">
                    <i class="el-icon-wallet"></i>
                    Journals
                </router-link>
            </li>
            <li>
                <router-link to="/balance-sheet">
                    <i class="el-icon-refrigerator"></i>
                    Balance Sheet
                </router-link>
            </li>
            <li>
                <router-link to="/trial-balance">
                    <i class="el-icon-s-marketing"></i>
                    Trial Balance
                </router-link>
            </li>
            <li>
                <router-link to="/general-ledger">
                    <i class="el-icon-s-data"></i>
                    General Ledger
                </router-link>
            </li>
            <li v-if="loggedIn">
                <a @click="logout()">logout</a>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'side-bar',
        computed: {
          ...mapGetters("auth", [
            "loggedIn"
          ])
        },
        methods: {
          ...mapActions("auth", ["logout"])
        }
    }
</script>
<style lang="scss" scoped>
    .sidebar {
        margin-left: 10px;
        border-top: solid 2px #007bff;
        background: #ffffff;
    }

    .sidebar .card {
        padding: 0;
    }

    .main-menu {
        margin: 0;
        padding: 0;

        li:first-child {
            border-bottom: 1px solid rgba(0, 40, 100, 0.12);
            svg {
                /*color: green;*/
            }
        }

        li {
            cursor: pointer;
            font-size: 12px;
            color: #90a4ae;
            font-weight: 500;
            list-style: none;

            &:hover {
                border-left: solid 2px #54667a;
                background: #f9f9fa;


                /*border-left: solid 2px #007bff;*/
                /*color: #007bff;*/
                /*background: #007bff0f;*/

                a {
                    color: #007bff;
                }

            }

            a {
                color: #54667a;
                text-decoration: none;
                padding: 14px 14px 14px 20px;
                display: block;
                font-size: 15px;
                width: 100%;

                &:hover {
                    color: #007bff;
                }

            }

        }
    }

    i {
        font-size: 20px;
        margin-right: 3px;
    }
</style>
