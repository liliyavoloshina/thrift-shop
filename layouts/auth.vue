<template>
  <div class="wrapper">
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  
  main {
    min-height: 200px;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
}
</style>