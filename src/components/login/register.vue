<template>
    <div class="card register">
        <div class="header ">Register</div>
        <div class="body">
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" v-model="form.firstname" name="firstname" class="form-control">
                </div>
                <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" v-model="form.lastname" name="lastname" class="form-control">
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" v-model="form.username" name="username" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="form.password" name="password" class="form-control">
                </div>

                <div class="form-group">
                    <button class="btn btn-primary" :disabled="loading">
                        <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                        <span>Register</span>
                    </button>
                    <router-link to="/login" class="btn btn-link">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "register",
        metaInfo: {
            title: "register",
            titleTemplate: "%s",
            description: "Register page"
        },
        data() {
            return {
                submitted: false,
                loading: false,
                form: {
                    username: "user1",
                    password: "userpassword1",
                    firstname: "firstname",
                    lastname: "lastname"
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
            ...mapActions("auth", ["register"]),
            onSubmit(evt) {
                this.submitted = true;
                this.loading = true;
                evt.preventDefault();
                // Perform a simple validation that username and password have been typed in
                if (this.form.username != "" && this.form.password != "") {
                    this.register({
                        firstname: this.form.firstname,
                        lastname: this.form.lastname,
                        username: this.form.username,
                        password: this.form.password
                    });
                    this.form.password = "";
                    this.loading = false;
                }
            }
        }
    };
</script>

<style scoped>
    .register {
        width: 500px;
        margin-left: 20%;
        height: 300px;
    }
</style>
