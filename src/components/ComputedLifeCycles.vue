<template>
  <div>
    <h4>Computed</h4>

    <div class="title-button">
      <button @click="up()" class="btn">Toggle update</button>
      <span>{{ change }}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint no-warning-comments: "error" */
import { Component, Prop, Vue } from 'vue-property-decorator'
import GitUser from '@/models/IGitUser'

@Component
export default class ComputedLifeCycles extends Vue {
  // props
  @Prop({ required: true, type: Object }) readonly userData!: GitUser;

  // data
  private change = true;

  // computed
  private get userInfo (): string {
    const name = this.userData?.name ?? 'someone'
    const company = this.userData?.company ?? 'someplace'
    return `${name} from ${company}`
  }

  // methods
  up () {
    this.change = !this.change
  }

  // lifecycle
  beforeCreate () {
    console.log('Child -> beforeCreated -> beforeCreated')
  }

  created () {
    console.log('Child -> created -> created')
  }

  beforeMount () {
    console.log('Child -> beforeMounted -> beforeMounted')
  }

  mounted () {
    console.log('Child -> mounted -> mounted')
  }

  beforeUpdate () {
    console.log('Child -> beforeUpdate -> beforeUpdate')
  }

  updated () {
    console.log('Child -> update -> update')
  }

  beforeDestroy () {
    console.log('Child -> beforeDestroyed -> beforeDestroyed')
  }

  destroyed () {
    console.log('Child -> destroyed -> destroyed')
  }
}
</script>
