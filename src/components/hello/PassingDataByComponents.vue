<template>
  <div>
    <h3>Passing Data</h3>
    <p>Props: {{ userLogin }}</p>
    <div>
      <button class="btn" @click="openNext">Abrir</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class PassingDataByComponents extends Vue {
  // props
  @Prop({ required: true, type: String }) readonly userLogin!: string;

  // methods
  @Emit()
  openNext() {
    return true;
  }
}
</script>

<style scoped>
.btn__brown {
  color: brown;
}
</style>
