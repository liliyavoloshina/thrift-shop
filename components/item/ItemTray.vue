<template>
  <div class="item-tray">
    <div v-for="item in items" :key="item.id" class="item">
      <nuxt-link :to="`/items/${item.id}`">
        <img :src="item.imageUrl" :alt="item.name">
        <div class="text">{{item.name}}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemTray',
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.item-tray {
  display: flex;
  overflow-x: auto;
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
  flex-basis: 15rem;
  flex-grow: 0;
  flex-shrink: 0;
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