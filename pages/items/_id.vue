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
        <button class="icon-button button-fav">
          <svg class="heart" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
          </svg>
          <span>Add to Favorites</span>
        </button>

        <nuxt-link :to="`/user/${item.ownerId}`">
          <button class="icon-button button-contact">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z">
              </path>
            </svg>
            <span>Contact Owner</span>
          </button>
        </nuxt-link>
      </div>
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
        `${process.env.firebaseApi}items/${id}.json`
      )
      return {item}
    } catch (e) {
      error(e)
    }
  },
  computed: {
    isFav() {
      return this.$store.getters['items/isFavorite'](this.item.id)
    }
  }
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

.icon-button {
  display: flex;
  align-items: center;
  float: right;
  width: 45%;
  height: 35px;

  span {
    color: white;
  }
}

.button-fav {
  background-color: $accent-2;
  &.active .heart,
  &:hover .heart {
    fill: $accent;
  }
  .heart {
    fill: white;
    width: 1.5rem;
    height: 100%;
  }
}

.button-contact {
  background-color: $contact;
  &:hover .svg-icon {
    fill: $contact-2;
  }
  .svg-icon {
    fill: white;
    width: 30%;
    height: 100%;
    animation: pulse 1s ease infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>