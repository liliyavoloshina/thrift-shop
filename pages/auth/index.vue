<template>
  <AuthTogglableForm @onSubmit="onSubmit" />
</template>

<script>
export default {
  name: 'AuthPage',
  methods: {
    async onSubmit(userInfo) {
      try {
        await this.$store.dispatch('authUser', userInfo)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  },
  layout: 'auth'
}
</script>