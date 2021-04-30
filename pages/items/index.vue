<template>
  <section class="container">
    <UIFilteringAside @changed="filterBy" />

    <main>
      <div class="sortby-area">
        <UISortingSelect @change="sortBy($event)" />
      </div>
      <transition-group name="list" class="main">
        <div v-for="item in items" :key="item.id" class="item">
          <ItemCard :item="item" />
        </div>
      </transition-group>
    </main>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Items',
  // data() {
  //   return {
  //     filtering: ''
  //   }
  // },
  async fetch({store}) {
    await store.dispatch('items/getItems')
  },
  computed: {
    ...mapState('items', ['items']),
  },
  methods: {
    sortBy(sort) {
      this.$store.commit('items/sortItems', sort)
    },
    filterBy(filter) {
      console.log(filter)
      this.$store.commit('items/filterItems', filter)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 3fr;
  gap: 0 2rem;
  min-height: 100vh;
}

.sortby-area {
  height: 3rem;
  margin-bottom: 2rem;
}

main {
  grid-column: 2/4;
  @media (max-width: 480px) {
    grid-column: 1/3;
  }
}

.main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: 350px;
  gap: 1rem;
}
</style>