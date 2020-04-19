<template>
  <div>
    <h1>{{ title + 'and Data binding' }}</h1>

    <div class="title-button">
      <span v-text="msg"></span>

      <button v-on:click="showList()">Loop</button>

      <transition name="fade">
        <ul v-if="users.length">
          <UserDetail
            v-for="(user, index) in users"
            v-bind:key="index"
            v-bind:userDetail="user"
            class="card"
          />
        </ul>
      </transition>

      <TwoWay v-show="users.length" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { usersData } from "@/mocks/users";
import User from "@/models/User";

import UserDetail from "@/components/directives/UserDetail.vue";
import TwoWay from "@/components/directives/TwoWay.vue";

@Component({
  components: {
    UserDetail,
    TwoWay
  }
})
export default class DataBinding extends Vue {
  // data
  title = "Directives ";
  msg = "message from v-text directive";
  users: User[] = [];

  // methods
  showList() {
    this.users = usersData;
  }
}
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
