<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloClass />
    <HelloNormal />
  </div>
</template>

<script>

export default {
  components: {
    HelloNormal: () => import(/* webpackChunkName: "Normal" */ '@/components/HelloNormal.vue'),
    HelloClass: () => import(/* webpackChunkName: "Class" */ '@/components/HelloClass.vue')
  }
}
</script>
