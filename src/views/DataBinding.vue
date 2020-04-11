<template>
  <div>
    <h1>{{ title ? 'Directives and data' : 'Nada' }}</h1>

    <div class="title-button">
      <span v-text="msg"></span>

      <button v-on:click="showList()">Loop</button>

      <ul>
        <li class="card" v-for="(user, index) in users" :key="index">
          <p>{{ user.name.first }}</p>
          <img :src="user.image" :alt="`foto de ${user.name.firt}`" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { usersData } from "@/mocks/users";
import User from "@/models/User";

@Component
export default class DataBinding extends Vue {
  // data
  private title = "Directives";
  private msg = "message from directive";
  private toggle = false;
  private users: User[] = usersData;

  private showList() {
    this.toggle = !this.toggle;
  }
}
</script>

<style></style>
