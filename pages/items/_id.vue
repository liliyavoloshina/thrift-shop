<template>
  <div class="item">
    <div class="image">
      <img :src="item.imageUrl" alt="Item Image">
    </div>
    <div class="info">
      <h1>{{item.name}}</h1>
      <p>{{item.description}}</p>
      <div><span class="label">Category: </span>{{item.category}}</div>
      <div>Gender: {{item.gender}}</div>
      <div>In the favorites: {{item.favorite}}</div>
      <div>Contact: <nuxt-link :to="`/users/${item.owner}`">{{item.owner}}</nuxt-link></div>
      <div>Created at: {{item.createdAt}}</div>
      <UIButtonFavoriteBig />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  async asyncData({params, $axios}) {
    const id = params.id
    try {
      const item = await $axios.$get(
        `${process.env.firebaseApi}/items/${id}.json`
      )
      return {item}
    } catch (e) {
      error(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  max-width: 1561px;
  margin: 0 auto;

  .image {
    border: $border-thin;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: yellow;
    font-size: 1.5rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-style: italic;
    }
    .label {
      font-weight: 600;
    }
  }
}
</style>