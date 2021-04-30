<template>
  <div class="item">
    <nuxt-link :to="`/items/${item.id}`">
      <div class="image"><img :src="item.imageUrl" alt="Item image"></div>
    </nuxt-link>
    <div class="info">
      <div class="detail">
        <div class="name">{{item.name}}</div>
        <div class="owner">Contact: <nuxt-link :to="`/users/${item.ownerId}`">{{item.ownerName}}</nuxt-link>
        </div>
      </div>
      <UIButtonFavorite />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 100%;
  width: 100%;
  border: $border-thin;
}
.image {
  width: 100%;
  height: 70%;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 30%;
  padding: 1rem;
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .owner a {
    color: $accent;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
      color: $accent-2;
    }
  }
}
</style>