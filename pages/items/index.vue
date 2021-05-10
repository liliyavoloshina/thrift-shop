<template>
  <section class="container">
    <ItemFilterSidebar />
    <main>
      <div class="sortby-area">
        <ItemSortSelect />
      </div>
      <transition-group v-if="filteredItems" name="list" class="main">
        <div v-for="item in filteredItems" :key="item.id" class="item">
          <ItemCard :item="item" />
        </div>
      </transition-group>
      <UIEmptyMessage v-if="filteredItems.length < 1">Unfortunately, there are no items by such filter...
      </UIEmptyMessage>
    </main>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Items',
  async fetch({store, error}) {
    try {
      await store.dispatch('items/getItems')
    } catch ({response}) {
      error({
        statusCode: response.status,
        message: response.statusText
      })
    }
  },
  created() {
    this.getUserItems()
  },
  computed: {
    ...mapState('items', ['items', 'filteredItems']),
    ...mapState(['user'])
  },
  methods: {
    async getUserItems() {
      if (this.$store.getters['isAuthorized']) {
        await this.$store.dispatch('items/getUserItems', this.user.id)
      }
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
  grid-auto-rows: min-content;
  @media (max-width: 480px) {
    grid-column: 1/3;
  }
}

.main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-auto-rows: 350px;
  gap: 1rem;
}
</style>