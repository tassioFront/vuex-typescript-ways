<template>
  <div class="container">
    <h3>normal import</h3>
    <div v-if="profile.user">
      <p>{{ userInfo }}</p>
    </div>
    <div v-else>Oops an error occured</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { createNamespacedHelpers, ActionMethod } from "vuex";
import { ProfileState } from "@/store/profile/types";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers(
  "profile/"
);

@Component({
  computed: {
    ...mapState({
      profile: state => state
    }),
    ...mapGetters({
      userInfo: "userInfo"
    })
  },
  methods: {
    ...mapActions({
      fetchData: "fetchData"
    })
  }
})
export default class Normal extends Vue {
  public userInfo!: ProfileState;
  public profile!: ProfileState;
  public fetchData!: ActionMethod;

  mounted() {
    this.fetchData();
  }
}
</script>
