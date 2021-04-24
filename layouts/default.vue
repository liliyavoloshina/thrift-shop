<template>
  <div class="wrapper">
    <UITheNav />
    <main>
      <Nuxt />
    </main>
    <footer></footer>
  </div>
</template>

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
    background: $accent;
  }
}
</style>