<template>
  <div>User info: {{ id }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Info extends Vue {
  @Prop({ type: String }) readonly id!: string;
}
</script>

<style>
</style>
