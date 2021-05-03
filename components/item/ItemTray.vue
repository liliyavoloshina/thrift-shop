<template>
  <ul class="item-tray">
    <li v-for="item in items" :key="item.name" class="item">
      <nuxt-link :to="`/items/${item.id}`">
        <img :src="item.imageUrl" :alt="item.name">
        <div class="text">{{item.name}}</div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ItemTray',
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.item-tray {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: auto;
  &::-webkit-scrollbar {
    height: 1.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $grey;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
}

.item {
  width: 250px;
  margin-right: 1rem;
  position: relative;
  .text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 1.5rem;
    color: white;
    background-color: $trans-black;
  }
}
</style>