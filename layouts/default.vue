<template>
  <div class="wrapper">
    <UITheNav />
    <main>
      <Nuxt keep-alive />
    </main>
    <footer>
      <div>&copy; 2021 made by <a href="https://www.facebook.com/profile.php?id=100036259350594"> liliyavoloshine</a></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr 100px;
  grid-template-columns: 100%;

  main {
    min-height: calc(100vh - 180px);
    padding: 20px;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid $grey;
    background: white;
  }
}
</style>