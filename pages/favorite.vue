<template>
  <div class="container">
    <h1>YOUR FAVORITE ITEMS</h1>
    <UIEmptyMessage v-if="favoriteItems.length < 1">You have no favorite items yet...</UIEmptyMessage>
    <ItemTray :items="favoriteItems" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
    ...mapState('users', ['favoriteItems']),
  },
  created() {
    this.$store.dispatch('users/getFavoriteItems', this.user.id)
  },
  middleware: ['check-auth']
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}
</style>