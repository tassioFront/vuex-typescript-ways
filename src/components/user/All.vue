<template>
  <div>
    <router-link tag="li" v-for="(user, key) in users" :key="key" :to="`/user/${key}`">{{key}}</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class All extends Vue {
  @Prop({ type: String }) readonly id!: string;

  users = [1, 2, 3, 4];
}
</script>
