<template>
  <div>
    <button v-if="$route.path !== '/user'" class="button" @click="back()">Voltar</button>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class User extends Vue {
  back() {
    this.$router.push("/user");
  }
}
</script>

<style lang="stylus"></style>
