<template>
  <div>
    <h1>{{ title ? 'Directives and data' : 'Nada' }}</h1>

    <div class="title-button">
      <span v-text="msg"></span>

      <button v-on:click="showList()">Loop</button>

      <ul>
        <li v-for="(user, index) in users" :key="index">
          <p>{{ user.name.first }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { users } from "@/mocks/users";

@Component
export default class DataBinding extends Vue {
  // data
  private title = "Directives";
  private msg = "message from directive";
  private toggle = false;

  private showList() {
    this.toggle = !this.toggle;
  }

  created() {
    console.log(users);
  }
}
</script>

<style></style>
