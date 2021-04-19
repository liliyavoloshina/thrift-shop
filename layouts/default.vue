<template>
  <div class="wrapper">
    <UIAppNav />
    <main>
      <Nuxt />
    </main>
    <footer></footer>
  </div>
</template>

<style lang="scss">
@import '~assets/variables.scss';
.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: 150px 1fr 100px;
  grid-template-columns: 100%;

  header {
    background: $white;
    border-bottom: 1px solid $grey;
  }
  main {
    min-height: calc(100vh - 180px);
  }
  footer {
    background: deeppink;
  }
}
</style>