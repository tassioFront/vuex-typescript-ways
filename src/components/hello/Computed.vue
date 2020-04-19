<template>
  <div>
    <h3>Computed</h3>

    <div v-for="(option, key) in options" :key="key">
      <input type="checkbox" :id="option.id" :value="option.id" v-model="checkedNames" />
      <label :for="option.id">{{ option.value }}</label>
    </div>

    <div class="title-button">
      <ul v-if="users.length">
        <UserDetail
          v-for="(user, index) in users"
          v-bind:key="index"
          v-bind:userDetail="user"
          class="card"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { usersData } from "@/mocks/users";
import User from "@/models/User";

import UserDetail from "@/components/directives/UserDetail.vue";

@Component({
  components: {
    UserDetail
  }
})
export default class Computed extends Vue {
  // data
  options = [
    {
      id: "alda",
      value: "Alda"
    },
    {
      id: "marilene",
      value: "Marilene"
    },
    {
      id: "ariela",
      value: "Ariela"
    }
  ];
  checkedNames = [];

  // computed
  get users(): User[] {
    return !this.checkedNames.length
      ? usersData
      : usersData.filter(user => {
          if (this.checkedNames.some(option => option === user.name.first)) {
            return user;
          }
        });
  }
}
</script>
