<template>
  <div>
    <h3>Life Cycles</h3>

    <div class="title-button">
      <button @click="increment()" class="btn">Somar</button>
      <span>{{ counter }}</span>
      <button class="btn" @click="$emit('clean')">Limpar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import GitUser from "@/models/IGitUser";

@Component
export default class LifeCycles extends Vue {
  // data
  count = 0;

  // computed
  get counter() {
    return this.count * 10;
  }

  // methods
  increment() {
    this.count++;
  }
  consoleToCycle(cycle: string) {
    console.log(
      `%c ${cycle}`,
      "font-family: Helvetica; color: green; font-size: 15px;"
    );
  }

  // lifecycle
  beforeCreate() {
    console.log(
      "%c beforeCreate",
      "font-family: Helvetica; color: green; font-size: 15px;"
    );
  }

  created() {
    this.consoleToCycle("created");
  }

  beforeMount() {
    this.consoleToCycle("beforeMounted");
  }

  mounted() {
    this.consoleToCycle("mounted");
  }

  beforeUpdate() {
    this.consoleToCycle("beforeUpdate");
  }

  updated() {
    this.consoleToCycle("update");
  }

  beforeDestroy() {
    this.consoleToCycle("beforeDestroyed");
  }

  destroyed() {
    this.consoleToCycle("destroyed");
  }

  // watch
  @Watch("count")
  onCountChange(newVal: number, oldVal: number) {
    console.log("ComputedLifeCycles -> onCountChange -> val", newVal);
    console.log("ComputedLifeCycles -> onCountChange -> oldVal", oldVal);
  }
}
</script>
