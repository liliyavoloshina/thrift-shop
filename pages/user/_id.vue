<template>
  <div v-if="user" class="profile container">
    <UserInfo :userInfo="userInfo" :isUser="isUser" />
    <UserItems :items="userItems" :isUser="isUser" />
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data() {
    return {
      userInfo: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapState('items', ['userItems']),
    ...mapGetters({
      isUserGetter: 'isUser'
    }),
    isUser() {
      return this.isUserGetter(this.$route.params.id)
    }
  },
  async created() {
    // получение вещей юзера, в чей профиль зашли
    this.$store.dispatch('items/getUserItems', this.$route.params.id)
    // получение инфо юзера, в чей профиль зашли
    if (this.isUser) {
      this.userInfo = this.user
    } else {
      const res = await this.$axios.$get(
        `https://thrift-shop-2b434-default-rtdb.firebaseio.com/users/${this.$route.params.id}.json`
        // `${process.env.firebaseApi}users/${this.$route.params.id}.json`
      )
      this.userInfo = {...res, id: this.$route.params.id}
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