<template>
    <div id="app">
        <div class="header">
            <div class="card">
                This is header
            </div>
        </div>
        <div class="sidebar card">
            <div class="body">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/accounts" class="chart-of-account-link">Chart Of Accounts</router-link>
                    </li>
                    <li>
                        <router-link to="/accounts/add">add Account</router-link>
                    </li>
                    <li>
                        <router-link to="/journals">journals</router-link>
                    </li>
                    <li>
                        <router-link to="/journals/add">new journal</router-link>
                    </li>
                    <li>
                        <router-link to="/balance-sheet">Balance Sheet</router-link>
                    </li>
                    <li>
                        <router-link to="/trial-balance">Trial Balance</router-link>
                    </li>
                    <li>
                        <router-link to="/general-ledger">General Ledger</router-link>
                    </li>
                </ul>
            </div>

        </div>
        <div class="page">
            <router-view/>
        </div>

        <div class="footer">
            <div class="card">
                This is footer
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            // HelloWorld,
        },
        data: () => ({
            //
        }),
    };
</script>

<style lang="scss">
    @import '~bootstrap/dist/css/bootstrap.css';
    @import "~select2/dist/css/select2.css";

    body {
        margin: 0;
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
        font-size: 0.9375rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        text-align: left;
        background-color: #f5f7fb;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 10px;
        grid-gap: 10px;
        display: grid;
        grid-template-rows: [header] 100px [body] auto [footer] 50px;
        grid-template-columns: [sidebar] 250px [main] auto
    }

    .header {
        /*background: #ffffff;*/
        grid-row: header;
        grid-column-start: 1;
        grid-column-end: 3;

        .card {
            height: 100%;
            padding: 20px;
        }
        /*gri*/
    }

    .footer {
        grid-row: footer;
        grid-column-start: 1;
        grid-column-end: 3;

        .card {
            height: 100%;
            padding: 20px;
        }
    }

    .sidebar {
        border-top: solid 2px #007bff;
        background: #ffffff;
        /*margin: 10px;*/
        padding: 20px;
    }

    .card {
        /*margin: 10px;*/
        border: 1px solid rgba(0, 40, 100, 0.12);
        border-radius: 3px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);


        .body {
            position: relative;
            margin-bottom: 1.5rem;
            width: 100%;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            padding: 1.5rem 1.5rem;
        }

        .header {
            border-radius: calc(3px - 1px) calc(3px - 1px) 0 0;
            background: none;
            padding: 0.5rem 1.5rem;
            display: -ms-flexbox;
            display: flex;
            min-height: 3.5rem;
            -ms-flex-align: center;
            align-items: center;
            border-bottom: 1px solid rgba(0, 40, 100, 0.12);
        }

        .footer {
            border-top: 1px solid rgba(0, 40, 100, 0.12);
            color: #6e7687;
            padding: 1rem 1.5rem;
            background: none;
            text-align: right;
        }
    }

    #nav {
        padding: 30px;
    }

    .table-bordered {
        border-top: solid 3px #eeeeee;
        border-radius: 5px;
    }

    .form-group {
        display: block;
        margin-bottom: 1rem;
    }

    .form-control {
        display: block;
        width: 100%;
        height: 2.375rem;
        padding: 0.375rem 0.75rem;
        font-size: 0.9375rem;
        font-weight: 400;
        line-height: 1.6;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 40, 100, 0.12);
        border-radius: 3px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .form-label {
        display: block;
        margin-bottom: .375rem;
        font-weight: 600;
        font-size: 0.875rem;
    }
</style>

