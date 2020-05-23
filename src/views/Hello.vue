<template>
  <div>
    <h1>Data: {{ title }}</h1>

    <div class="title-button">
      <input type="text" v-model.trim="userLogin" @keydown.enter="fetch()" />
      <span v-if="userLogin" class="search">Buscar pelo usuário: {{ userLogin }}</span>

      <button class="btn" :disabled="!userLogin || false" @click="fetch()">Fetch User</button>
    </div>

    <div v-if="userData">
      <PassingDataByComponents class="card" :userLogin="userLogin" @open-next="open($event)" />

      <Computed v-if="openComputed" class="card" />

      <LifeCycles v-if="openComputed" class="card" @clean="cleanDad()" />
    </div>

    <div v-else>Nada por aqui</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PassingDataByComponents from "@/components/hello/PassingDataByComponents.vue";
import LifeCycles from "@/components/hello/LifeCycles.vue";
import Computed from "@/components/hello/Computed.vue";

import axios from "axios";
import GitUser from "@/models/IGitUser";
import { gitUserMock } from "@/mocks/gitUser";

@Component({
  components: {
    PassingDataByComponents,
    LifeCycles,
    Computed
  }
})
export default class Hello extends Vue {
  // data
  title = "GitHub User";
  userLogin = "";
  userData: GitUser | null = null;
  openComputed = false;

  // methods
  fetch() {
    const url = `https://api.github.com/users/${this.userLogin}`;
    axios({ url }).then(
      response => {
        this.userData = response.data;
      },
      () => {
        // console.error(erro);
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
