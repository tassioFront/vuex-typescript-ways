<template>
  <div>
    <h3>Login</h3>
    <button v-on:click="setUser()">Login</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

import { get } from "@/services/fakeUser.service";
import storage from "@/services/localStorage.service";
import GitUser from "../models/IGitUser";
const namespace = "stateManagement";

@Component
export default class StateManagement extends Vue {
  @Mutation("setUser", { namespace }) login!: (user: GitUser) => void;
  created() {
    this.$data.consoleHelper("stateManagement", "color: green");
  }
  setUser() {
    get("https://api.github.com/users/tassioFront").then(response => {
      storage.set<string>("fakeToken", "fakeValueToken");

      this.$data.consoleHelper("login", "color: green");

      this.login(response.data);
    });
  }
}
</script>

<style lang="stylus">
.btn {
  margin: 10px 0;
}

.search {
  font-size: 10px;
  padding: 5px;
  color: green;
}
</style>
