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
    ...mapState('items', ['userItems'])
  },
  async created() {
    try {
      await this.$store.dispatch('items/getUserItems', this.$route.params.id)
    } catch (e) {
      console.log(e)
      return this.$nuxt.error(e)
    }
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