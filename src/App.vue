<template>
  <div id="app">
    <div class="router">
      <router-link
        v-for="(route, index) in _allRoutes"
        :key="index"
        :to="route.path"
        >{{ route.name }}</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import getRoutes from '@/mixins/getRoutes'

export default Vue.extend({
  mixins: [getRoutes]
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
</style>
