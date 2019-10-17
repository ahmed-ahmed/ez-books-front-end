<template>
  <div>
    <nav v-if="currentUser" class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/accounts" class="nav-item nav-link">Chart Of Accounts</router-link>
        <router-link to="/accounts/add" class="nav-item nav-link">add Account</router-link>
        <router-link to="/journals" class="nav-item nav-link">journals</router-link>
        <router-link to="/journals/add" class="nav-item nav-link">new journal</router-link>
        <router-link to="/balance-sheet" class="nav-item nav-link">Balance Sheet</router-link>
        <router-link to="/trial-balance" class="nav-item nav-link">Trial Balance</router-link>
        <router-link to="/general-ledger" class="nav-item nav-link">General Ledger</router-link>
        <router-link to="/general-ledger" class="nav-item nav-link">General Ledger</router-link>

        <router-link v-if="isAdmin" to="/admin" class="nav-item nav-link">Admin</router-link>
        <a @click="logout" class="nav-item nav-link">Logout</a>
      </div>
    </nav>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authenticationService } from "@/_services";
import { Role } from "@/_helpers";
import { router } from "@/router";

export default {
  name: "app",
  data() {
    return {
      currentUser: null
    };
  },
  computed: {
    isAdmin() {
      return this.currentUser && this.currentUser.role === Role.Admin;
    }
  },
  created() {
    authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  },
  methods: {
    logout() {
      authenticationService.logout();
      router.push("/login");
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "~select2/dist/css/select2.css";

body {
  margin: 0;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
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
  display: grid;
  grid-template-columns: 250px auto;
}

.sidebar {
  border-top: solid 2px #007bff;
  background: #ffffff;
  margin: 10px;
  padding: 20px;
}

.card {
  margin: 10px;
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
  margin-bottom: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
}
</style>

