<template>
  <div class="error">
    <h1>{{error.statusCode}}</h1>
    <h2>{{error.message}}</h2>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout' 
}
</script>

<style lang="scss" scoped>
.error {
  font-size: 2em;
  text-align: center;
  color: #fff;

  a {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
