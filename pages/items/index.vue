<template>
  <section>
    <aside>aside</aside>
    <div class="main">
      <div v-for="item in items" :key="item.id" class="item">
        <ItemCard :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Items',
  async fetch({store}) {
    await store.dispatch('items/getItems')
  },
  computed: {
    ...mapState('items', {
      items: 'items'
    })
  }
}
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0 2rem;
  min-height: 100vh;
}

aside {
  grid-column: 1/2;
  background-color: red;

  @media (max-width: 480px) {
    grid-column: 1/3;
  }
}

.main {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: 350px;
  gap: 1rem;
  @media (max-width: 480px) {
    grid-column: 1/3;
  }

  .item {
    background-color: #fff;
  }
}
</style>