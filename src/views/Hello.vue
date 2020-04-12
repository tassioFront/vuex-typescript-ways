<template>
  <div>
    <h1>Data: {{ title }}</h1>

    <div class="title-button">
      <input type="text" v-model="userLogin" @keydown.enter="fetch()" />
      <span v-if="userLogin" class="search">Buscar pelo usuário: {{ userLogin }}</span>

      <button class="btn" :disabled="!userLogin || false" @click="fetch()">Fetch User</button>
    </div>

    <div v-if="userData">
      <PassingDataByComponents class="card" :userLogin="userLogin" @open-next="open($event)" />

      <ComputedLifeCycles
        v-if="openComputed"
        class="card"
        :userData="userData"
        @clean="cleanDad()"
      />
    </div>

    <div v-else>Nada por aqui</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import PassingDataByComponents from "@/components/hello/PassingDataByComponents.vue";
import ComputedLifeCycles from "@/components/hello/ComputedLifeCycles.vue";

import axios from "axios";
import GitUser from "@/models/IGitUser";
import { gitUserMock } from "@/mocks/gitUser";

@Component({
  components: {
    PassingDataByComponents,
    ComputedLifeCycles
  }
})
export default class Hello extends Vue {
  // data
  title = "GitHub User";
  userLogin = "";
  userData: GitUser | null = null;
  openComputed = false;

  // methods
  async fetch() {
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
  cleanDad() {
    this.userData = null;
    this.userLogin = "";
  }

  open(value: boolean) {
    this.openComputed = value;
  }
}
</script>

<style lang="stylus">
.btn {
  margin: 10px 0;
}

.search {
  font-size: 10px;
  padding: 5px;
  color: green;
}
</style>
