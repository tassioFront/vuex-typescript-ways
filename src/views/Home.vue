<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Class />
    <Normal />
  </div>
</template>

<script>
export default {
  components: {
    Normal: () =>
      import(/* webpackChunkName: "Normal" */ "@/components/Normal.vue"),
    Class: () =>
      import(/* webpackChunkName: "Class" */ "@/components/Class.vue")
  }
};
</script>
