<template>
  <div>
    <h2>Profile</h2>
    <p>{{user}}</p>
    <button @click="logout" class="button">Logout</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  middleware: ['check-auth']
}
</script>

<style lang="scss" scoped>
</style>