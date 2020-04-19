<template>
  <div class="title-button">
    <input type="text" v-model="user" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class New extends Vue {
  user = "";
}
</script>

<style>
</style>
