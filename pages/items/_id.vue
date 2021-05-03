<template>
  <div class="item container">
    {{item}}
    <!-- <div class="image">
      <img :src="item.imageUrl" alt="Item Image">
    </div>
    <div class="info">
      <div class="main">
        <div class="detail">
          <h1>{{item.name}}</h1>
          <p>{{item.description}}</p>
        </div>

        <div class="options">
          <div><span class="label">Category: </span>{{item.category}}</div>
          <div><span class="label">Gender: </span> {{item.gender}}</div>
          <div><span class="label">In the favorites: </span>{{item.favorite}}</div>
          <div><span class="label">Created at:</span> {{$moment(item.createdAt).format('D MMMM YYYY, h:mm')}}</div>
        </div>
      </div>

      <div class="actions">
        <UIButtonFavoriteBig />
        <UIButtonContact :owner="item.owner" />
      </div>
    </div> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Item',

  computed: {
    ...mapGetters('items', ['getItemById']),
    item() {
      return this.getItemById(this.$route.params.id)
    }
  }

  // async asyncData({params, $axios}) {
  //   const id = params.id
  //   try {
  //     const item = await $axios.$get(
  //       `${process.env.firebaseApi}users/items/${id}.json`
  //     )
  //     return {item}
  //   } catch (e) {
  //     error(e)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(300px, auto);

  .image {
    border: $border-thin;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .main {
      display: flex;
      justify-content: space-between;
      height: 75%;

      .detail {
        width: 45%;
        h1 {
          font-size: 2rem;
        }
        p {
          font-style: italic;
          font-size: 1.3rem;
        }
      }

      .options {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 45%;
        font-size: 1.2rem;
        .label {
          font-weight: 600;
        }
      }
    }

    .actions {
      display: flex;
      justify-content: space-evenly;
      padding-top: 10px;
    }
  }
}
</style>