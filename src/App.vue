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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import getRoutes from "@/mixins/getRoutes";

export default Vue.extend({
  mixins: [getRoutes]
});
</script>

<style src="./main.styl" lang="stylus">
.title-button {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.router {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.card {
  border: 1px solid gray;
  border-radius: 4px;
  margin-top: 20px;
}
</style>
