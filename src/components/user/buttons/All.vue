<template>
  <router-link to="/user/all" tag="li" active-class="active" exact class="button">All</router-link>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class All extends Vue {}
</script>

