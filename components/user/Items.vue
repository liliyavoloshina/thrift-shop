<template>
  <div class="profile-product profile-block">
    <h1>ITEMS</h1>
    <div class="products">
      <ItemTray :items="items" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
</style>