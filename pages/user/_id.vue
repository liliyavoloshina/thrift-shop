<template>
  <div v-if="user" class="profile container">
    <UserInfo :user="user" :owner="owner" />
    <UserItems :items="userItems" :owner="owner" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    owner() {
      return this.user.id === this.$route.params.id
    },
    ...mapState(['user']),
    ...mapState('users', ['userItems'])
  },
  // fetch useritems with ssr
  async fetch({store, params}) {
    await store.dispatch('users/getUserItems', params.id)
  },
  middleware: ['check-auth']
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 1rem;
  }
  .profile-block:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style>