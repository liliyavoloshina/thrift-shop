<template>
  <div class="wrapper">
    <UITheNav />
    <main>
      <Nuxt />
    </main>
    <footer>
      <div>&copy; 2021 made by <a href="https://github.com/liliyavoloshina" target="_blank"> liliyavoloshine</a></div>
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
    padding: 1.5em;
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