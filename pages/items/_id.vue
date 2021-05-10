<template>
  <div class="item container">
    <div class="image">
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
          <div><span class="label">Created at:</span> {{$moment(item.createdAt).format('D MMMM YYYY, h:mm')}}</div>
        </div>
      </div>

      <div class="actions">

        <template v-if="isOwner">
          <button @click="deleteItem" class="button action-button">
            Delete
          </button>
        </template>

        <template v-if="!isOwner">
          <nuxt-link :to="`/user/${item.ownerId}`" class="button submit-button-small">
            Contact Owner
          </nuxt-link>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Item',
  async asyncData({params, $axios, error}) {
    const id = params.id
    try {
      const item = await $axios.$get(
        `${process.env.firebaseApi}items/${id}.json`
      )
      return {item}
    } catch ({response}) {
      error({
        statusCode: response.status,
        message: response.statusText
      })
    }
  },
  computed: {
    isOwner() {
      if (this.$store.getters['isAuthorized']) {
        return this.$store.getters['items/isOwner'](this.$route.params.id)
      }
    },
    ...mapState(['user'])
  },
  async created() {
    if (this.$store.getters['isAuthorized']) {
      await this.$store.dispatch('items/getUserItems', this.user.id)
    }
  },
  methods: {
    async deleteItem() {
      await this.$store.dispatch('items/deleteUserItem', this.$route.params.id)
      this.$router.replace(`/user/${this.user.id}`)
    }
  },
  head() {
    return {
      title: `${this.item.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.item.description}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(300px, auto);

  .image {
    border: $border-thin;
    height: 20rem;
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
        word-wrap: break-word;
        overflow: auto;
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
.button-delete {
  background-color: $accent-2;
  text-align: center;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  color: white;

  &:hover {
    background-color: $accent;
  }
}
</style>