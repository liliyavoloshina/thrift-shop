<template>
  <div class="wrapper">
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $accent;

  main {
    min-height: 200px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
}
</style>