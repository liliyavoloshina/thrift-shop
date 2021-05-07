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
        let redirectUrl = this.$route.query.redirect || '/'
        this.$router.push(`${redirectUrl}`)
      } catch (e) {
        console.log(e)
      }
    }
  },
  layout: 'auth'
}
</script>