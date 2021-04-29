<template>
  <section class="container">
    <aside>
      <nuxt-link to="/items/create" class="create-button button">Add Your Own!</nuxt-link>
    </aside>

    <div>
      <div class="sortby-area">
        <UISortingSelect @change="sortBy($event)" />
      </div>
      <transition-group name="items" tag="div" class="main">
        <div v-for="item in items" :key="item.id" class="item">
          <ItemCard :item="item" />
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Items',
  async fetch({store}) {
    if (store.state.items.items.length === 0) {
      await store.dispatch('items/getItems')
    }
  },
  computed: {
    ...mapState('items', ['items'])
  },
  methods: {
    sortBy(sort) {
      this.$store.commit('items/sortItems', sort)
    }
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

  .create-button {
    display: block;
    width: 100%;
    height: 3rem;
    text-align: center;
    color: white;
    background-color: $accent;
    font-size: 1.8rem;
    line-height: 1.6;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: $accent-2;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1/3;
  }
}

.sortby-area {
  // display: flex;
  height: 3rem;
  margin-bottom: 2rem;
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

.items-leave-active {
  transition: opacity 0.2s ease-out, scale 0.2s ease-out;
}

.items-move {
  transition: opacity 0.2s ease-out, scale 0.2s ease-out;
}

.items-enter-active {
  transition: opacity 0.2s ease-out, scale 0.2s ease-out;
}

.items-enter,
.items-leave-to {
  opacity: 0;
  transform: scale(0.9);
  transform-origin: 50% 50%;
}
</style>