<template>
  <div>
    <h1>YOUR FAVORITE ITEMS</h1>
    <ItemTray :items="favoriteItems" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
    ...mapState('items', ['favoriteItems']),
  },
  created() {
    this.$store.dispatch('items/getFavoriteItems', this.user.id)
  },
  middleware: ['check-auth']
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}
</style>