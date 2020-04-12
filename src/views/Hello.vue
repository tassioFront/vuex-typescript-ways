<template>
  <div>
    <h1>Data: {{ title }}</h1>

    <div class="title-button">
      <input type="text" v-model="userLogin" @keydown.enter="fetch()" />
      <button class="btn" :disabled="!userLogin || false" @click="fetch()">Fetch User</button>
    </div>

    <div v-if="userData">
      <PassingDataByComponents
        class="card"
        :userLogin="userLogin"
        @clean="cleanDad()"
        @open-next="open($event)"
      />

      <ComputedLifeCycles v-show="openComputed" class="card" :userData="userData" />
    </div>

    <div v-else>Nada por aqui</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import PassingDataByComponents from "@/components/PassingDataByComponents.vue";
import ComputedLifeCycles from "@/components/ComputedLifeCycles.vue";

import axios from "axios";
import GitUser from "@/models/IGitUser";
import { gitUserMock } from "@/mocks/gitUser";

@Component({
  components: {
    PassingDataByComponents,
    ComputedLifeCycles
  }
})
export default class Dad extends Vue {
  // data
  private title = "GitHub User";
  private userLogin = "";
  private userData: GitUser | null = null;
  private openComputed = false;

  // methods
  private async fetch() {
    axios({
      url: `https://api.github.com/users/${this.userLogin}`
    }).then(
      response => {
        this.userData = response.data;
      },
      erro => {
        console.error(erro);
        this.userData = gitUserMock;
      }
    );
  }

  // emited from child component
  private cleanDad() {
    this.userData = null;
    this.userLogin = "";
  }

  private open(value: boolean) {
    this.openComputed = value;
  }
}
</script>

<style lang="stylus">
.btn {
  margin: 10px 0;
}
</style>
