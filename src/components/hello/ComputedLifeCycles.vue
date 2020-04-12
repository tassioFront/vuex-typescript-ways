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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
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
  consoleToCycle(cycle: string) {
    console.log(
      `%c ${cycle}`,
      "font-family: Helvetica; color: green; font-size: 15px;"
    );
  }

  @Watch("count")
  onCountChange(newVal: number, oldVal: number) {
    console.log("ComputedLifeCycles -> onCountChange -> val", newVal);
    console.log("ComputedLifeCycles -> onCountChange -> oldVal", oldVal);
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
}
</script>
