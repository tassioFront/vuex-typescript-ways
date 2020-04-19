<template>
  <div id="app">
    <div class="router">
      <router-link
        v-for="(route, index) in _allRoutes"
        :key="index"
        :to="route.path"
      >{{ route.name }}</router-link>
    </div>
    <router-view />
    <router-view name="new" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import getRoutes from "@/mixins/getRoutes";

export default Vue.extend({
  mixins: [getRoutes]
});
</script>

<style src="./main.styl" lang="stylus"></style>
