<template>
  <div>
    <h3>Computed</h3>
    <p>{{ userInfo }}</p>

    <div class="title-button">
      <button @click="increment()" class="btn">Somar</button>
      <span>{{ counter }}</span>
      <button class="btn" @click="$emit('clean')">Limpar</button>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint no-warning-comments: "error" */
import { Component, Prop, Vue } from "vue-property-decorator";
import GitUser from "@/models/IGitUser";

@Component
export default class ComputedLifeCycles extends Vue {
  // props
  @Prop({ required: true, type: Object }) readonly userData!: GitUser;

  // data
  count = 0;

  // computed
  get userInfo(): string {
    const name = this.userData?.name ?? "someone";
    const company = this.userData?.company ?? "someplace";
    return `${name} from ${company}`;
  }
  get counter() {
    return this.count * 10;
  }

  // methods
  increment() {
    this.count++;
  }

  // lifecycle
  beforeCreate() {
    console.log("Child -> beforeCreated -> beforeCreated");
  }

  created() {
    console.log("Child -> created -> created");
  }

  beforeMount() {
    console.log("Child -> beforeMounted -> beforeMounted");
  }

  mounted() {
    console.log("Child -> mounted -> mounted");
  }

  beforeUpdate() {
    console.log("Child -> beforeUpdate -> beforeUpdate");
  }

  updated() {
    console.log("Child -> update -> update");
  }

  beforeDestroy() {
    console.log("Child -> beforeDestroyed -> beforeDestroyed");
  }

  destroyed() {
    console.log("Child -> destroyed -> destroyed");
  }
}
</script>
