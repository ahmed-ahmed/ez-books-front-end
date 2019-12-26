<template>
    <div class="card login">
        <div class="header">Login</div>
        <div class="body">
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" v-model="form.username" name="username" class="form-control">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="form.password" name="password" class="form-control">
                </div>

                <div class="form-group">
                    <button class="btn btn-primary" :disabled="loading">
                        <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                        <span>Login</span>
                    </button>
                    <router-link to="/register" class="btn btn-link">Register</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "login",
        metaInfo: {
            title: "Login",
            titleTemplate: "%s",
            description: "Login page"
        },
        data() {
            return {
                submitted: false,
                loading: false,
                form: {
                    username: "user",
                    password: "userpassword"
                }
            };
        },
        computed: {
            ...mapGetters("auth", [
                "authenticating",
                "authenticationError",
                "authenticationErrorCode",
                "authenticationSuccess"
            ])
        },
        methods: {
            ...mapActions("auth", ["login"]),
            onSubmit(evt) {
                this.submitted = true;
                this.loading = true;
                evt.preventDefault();
                // Perform a simple validation that username and password have been typed in
                if (this.form.username != "" && this.form.password != "") {
                    this.login({
                        username: this.form.username,
                        password: this.form.password,
                        rememberMe: false
                    });
                    this.form.password = "";
                    this.loading = false;
                }
            }
        }
    };
</script>

<style scoped>
    .login {
        width: 500px;
        margin-left: 20%;
        height: 300px;
    }
</style>
