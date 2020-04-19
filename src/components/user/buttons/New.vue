<template>
  <router-link to="/user/new" tag="li" active-class="active" exact class="button">New</router-link>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class New extends Vue {}
</script>

