<template>
  <div class="profile-product profile-block">
    <div class="header">
      <h1>ITEMS</h1>
      <nuxt-link v-if="isUser" to="/items/create" class="button submit-button-small">Add new!</nuxt-link>
    </div>
    <div v-if="items.length>0" class="products">
      <ItemTray :items="items" />
    </div>
    <UIEmptyMessage v-else>Unfortunately, there is no items yet...</UIEmptyMessage>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    },
    isUser: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .button-create {
    display: inline-block;
    background-color: $accent;
    color: white;
    text-align: center;
    padding: 0.5rem;
    width: 200px;
    font-weight: 600;
    font-size: 1.5rem;
    &:hover {
      color: $black;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    h1 {
      text-align: center;
      margin-bottom: 0.5rem;
    }
    margin-bottom: 2rem;
  }
}
</style>