<template>
  <div>
    <div class="image"><img src="" alt=""></div>
    <div class="info">
      <div class="name"></div>
      <div class="price"></div>
      <UIButtonFavorite />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.info {
}

.fav-button {
  width: 50px;
  height: 50px;
  background: url('~static/heart.svg') no-repeat;
  background-size: cover;

  &:hover {
    background-color: red;
  }
}
</style>