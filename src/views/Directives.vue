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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { usersData } from "@/mocks/users";
import User from "@/models/User";

import UserDetail from "@/components/data-binding/UserDetail.vue";

@Component({
  components: {
    UserDetail
  }
})
export default class DataBinding extends Vue {
  // data
  private title = "Directives ";
  private msg = "message from v-text directive";
  private users: User[] = [];

  // methods
  private showList() {
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
  transition: opacity 2s;
}
</style>
