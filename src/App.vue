<template>
    <div id="app">
        <!--        <div id="nav">-->

        <!--        </div>-->
        <div class="sidebar">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
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
        <div class="page">
            <router-view/>
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
        background: #eee;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: grid;
        grid-template-columns: 250px auto
    }

    .sidebar {
        border-top: solid 2px #007bff;
        background: #ffffff;
        margin: 10px;
        padding: 20px;
    }

    .page {
        border-top: solid 2px #007bff;
        margin: 10px;
        padding: 20px;
        background: #ffffff;
    }


    #nav {
        padding: 30px;
    }
</style>

