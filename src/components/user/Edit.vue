<template>
  <div>
    Edit user id:
    <p>{{ id }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Edit extends Vue {
  @Prop({ type: String }) readonly id!: string;
}
</script>


<style>
</style>
