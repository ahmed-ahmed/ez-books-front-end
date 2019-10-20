<template>
    <div id="app">
        <notifications group="n"/>
        <div class="header">
            <div class="row">
                <div class="logo">
                    <img class="logo-img" src="https://app.zipbooks.com/assets/images/logo.svg" alt="">
                </div>

            </div>
        </div>
        <side-bar/>
        <div class="page">
            <router-view/>
        </div>

        <!--        <div class="footer">-->
        <!--            <div class="card">-->
        <!--                This is footer-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script>
    import SideBar from "./SideBar";

    export default {
        name: 'App',
        components: {
            SideBar
            // HelloWorld,
        },
        data: () => ({
            //
        }),
    };
</script>

<style lang="scss">
    @import '~bootstrap/dist/css/bootstrap.css';
    /*@import "~select2/dist/css/select2.css";*/
    @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
    @import "~element-ui/lib/theme-chalk/index.css";

    body {
        margin: 0;
        font-family: 'Karla', sans-serif;
        /*font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;*/
        font-size: 0.9375rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        text-align: left;
        background-color: #f9f9fa;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        grid-gap: 10px;
        display: grid;
        grid-template-rows: [header] 80px [body] auto [footer] 50px;
        grid-template-columns: [sidebar] 250px [main] auto
    }

    a {
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
    }
    .header {
        background: #fff;
        border-bottom: solid 1px #e4e7eb;
        height: 64px;
        grid-row: header;
        grid-column-start: 1;
        grid-column-end: 3;

        .logo {
            padding: 19px 96px 19px 35px;
            border-right: solid 1px #e3e7eb;

            img {
                display: inline-block;
                line-height: 64px;
                max-height: 26px;
            }
        }

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

    .card {
        border: 1px solid rgba(0, 40, 100, 0.12);
        border-radius: 0;
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
            background: none;
            padding: 10px 20px;
            display: -ms-flexbox;
            display: flex;
            min-height: 3.5rem;
            -ms-flex-align: center;
            align-items: center;
            border-bottom: 1px solid rgba(0, 40, 100, 0.12);

            font-size: 20px;
            font-weight: 400;

            svg {
                margin-right: 10px;
            }
        }

        .footer {
            border-top: 1px solid rgba(0, 40, 100, 0.12);
            color: #6e7687;
            padding: 1rem 1.5rem;
            background: none;
            text-align: right;
        }
    }

    .page {
        padding-right: 10px;
    }


    #nav {
        padding: 30px;
    }

    .table-bordered {
        border-top: solid 3px #eeeeee;
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
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .form-label {
        display: block;
        margin-bottom: .375rem;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .sidebar .card {
        padding: 0;
    }

</style>

