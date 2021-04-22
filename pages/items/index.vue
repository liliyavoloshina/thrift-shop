<template>
  <section>
    <aside>aside</aside>
    <main>
      <div class="item">
        <ItemCart/>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </main>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  min-height: 100vh;
}

aside {
  grid-column: 1/2;
  background-color: red;

  @media (max-width: 480px) {
    grid-column: 1/3;
  }
}

main {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: 300px;
  gap: 1rem;
  background-color: green;
  @media (max-width: 480px) {
    grid-column: 1/3;
  }

  .item {
    background-color: #fff;
  }
}
</style>