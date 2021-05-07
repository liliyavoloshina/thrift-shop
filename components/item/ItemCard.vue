<template>
  <div class="item">
    <nuxt-link :to="`/items/${item.id}`">
      <div class="image"><img :src="item.imageUrl" alt="Item image"></div>
    </nuxt-link>
    <div class="info">
      <div class="detail">
        <div class="name">{{item.name}}</div>
        <div class="owner">Contact: <nuxt-link :to="`/user/${item.ownerId}`">{{item.ownerName}}</nuxt-link>
        </div>
      </div>
      <button @click="$emit('liked', item)" :class="[isFav && isAuthorized ? 'active' : '', 'icon-button']"
        :disabled="!isAuthorized">
        <svg class="heart" viewBox="0 0 32 29.6">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    isFav() {
      return this.$store.getters['users/isFavorite'](this.item.id)
    },
    ...mapGetters(['isAuthorized'])
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

.icon-button {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: $accent-2;

  &.active .heart,
  &:hover .heart {
    fill: $accent;
  }

  &:disabled {
    cursor: not-allowed;
    &.active .heart,
    &:hover .heart {
      fill: white;
    }
  }
}

.heart {
  fill: white;
  width: 100%;
  height: 100%;
}
</style>