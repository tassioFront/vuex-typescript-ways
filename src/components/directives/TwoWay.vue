<template>
  <div>
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
    </div>
    <div>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
    </div>
    <div>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TwoWay extends Vue {
  // data
  checkedNames = [];
}
</script>
