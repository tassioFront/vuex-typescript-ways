<template>
  <li @click="click()">
    <p>{{ userDetail.name.first }}</p>
    <img :src="userDetail.image" :alt="`foto de ${userDetail.name.firt}`" />
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import User from "@/models/User";

@Component
export default class UserDetail extends Vue {
  //props
  @Prop({ required: true, type: Object }) readonly userDetail!: User;

  //methods
  click() {
    console.group(this.userDetail.name.first);
    this.$data.consoleHelper("", "", this.$vnode.key);
    this.$data.consoleHelper("", "", this.userDetail);
    console.groupEnd();
  }
}
</script>
