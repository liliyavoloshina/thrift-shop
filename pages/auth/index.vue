<template>
  <AuthTogglableForm @onSubmit="onSubmit"/>
</template>

<script>
export default {
  name: 'Auth',
  methods: {
    async onSubmit(userInfo) {

      try {
        await this.$store.dispatch('auth/authUser', userInfo)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  },
  layout: 'auth'
}
</script>