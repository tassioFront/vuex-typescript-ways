<template>
  <div class="container">
    <h3>vuex-class import</h3>
    <div v-if="profile.user">
      <p>{{ userInfo }}</p>
    </div>
    <div v-else>Oops an error occured</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { State, Action, Getter } from 'vuex-class'
import Component from 'vue-class-component'
import { ProfileState } from '@/store/profile/types'
const namespace = 'profile'

@Component
export default class Class extends Vue {
        @State('profile') profile!: ProfileState;
        @Action('fetchData', { namespace }) fetchData!: Function;
        @Getter('userInfo', { namespace }) userInfo!: string;

        mounted () {
          this.fetchData()
        }

        get login () {
          const user = this.profile && this.profile.user
          return (user && user.login) || ''
        }
}
</script>
