<template>
  <div v-if="user" class="profile container">
    <!-- <UserInfo :user="userInfo" :owner="owner" />
    <UserItems :items="userItems" :owner="owner" /> -->
    {{user.items}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      userInfo: [],
      userItems: []
    }
  },
  computed: {
    owner() {
      return this.user.id === this.$route.params.id
    },
    ...mapState(['user'])
  },
  created() {
    // this.$store.dispatch('users/getUserItems', this.$route.params.id)
    // const user = await this.$axios.$get(
    //   `${process.env.firebaseApi}users/${this.$route.params.id}.json`
    // )
    // this.userInfo = {
    //   email: user.email,
    //   name: user.name,
    //   location: user.location
    // }
    // const userItems = []
    // for (let item in user.items) {
    //   userItems.push({...user.items[item]})
    // }
    // console.log(userItems)
    // this.userItems = userItems
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