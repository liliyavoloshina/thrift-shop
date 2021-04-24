<template>
  <section class="home-tray">

    <div class="new-items">
      <h1>New</h1>
      <div class="items">
        <div v-for="item in newItems" :key="item.name">
          <nuxt-link :to="`/items/${item.name}`">
            <img :src="item.image" :alt="item.name">
            <div class="text">{{item.name}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="exclusive-items">
      <h1>Exclusive</h1>
      <div class="items">
        <div v-for="item in exclusiveItems" :key="item.name">
          <nuxt-link :to="`/items/${item.name}`">
            <img :src="item.image" :alt="item.name">
            <div class="text">{{item.name}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="popular-items">
      <h1>Popular</h1>
      <div class="items">
        <div v-for="item in popularItems" :key="item.name">
          <nuxt-link :to="`/items/${item.name}`">
            <img :src="item.image" :alt="item.name">
            <div class="text">{{item.name}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newItems: [
        {
          name: 'Super Puper',
          image:
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 24
        },
        {
          name: 'Super Puper Long',
          image:
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 24
        },
        {
          name: 'Puper Super',
          image:
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 120
        },
        {
          name: 'Long Super Puper Name',
          image:
            'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 1200
        },
        {
          name: 'Long asd',
          image:
            'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 1200
        }
      ],
      exclusiveItems: [
        {
          name: 'Super Puper',
          image:
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 24
        },
        {
          name: 'Super Puper Long',
          image:
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 24
        },
        {
          name: 'Puper Super',
          image:
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 120
        },
        {
          name: 'Long Super Puper Name',
          image:
            'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 1200
        },
        {
          name: 'Long asd',
          image:
            'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 1200
        }
      ],
      popularItems: [
        {
          name: 'Super Puper',
          image:
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 24
        },
        {
          name: 'Super Puper Long',
          image:
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 24
        },
        {
          name: 'Puper Super',
          image:
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 120
        },
        {
          name: 'Long Super Puper Name',
          image:
            'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 1200
        },
        {
          name: 'Long asd',
          image:
            'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 1200
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-tray {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem 0;
  margin-top: 2rem;
  > * {
    overflow-x: auto;
    overflow-y: hidden;
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
  .new-items {
    grid-row: 1;
  }
  .exclusive-items {
    grid-row: 2;
  }
  .popular-items {
    grid-row: 3;
  }

  .items {
    display: grid;
    grid-auto-columns: calc(20vw -30%);
    grid-auto-flow: column;
    grid-gap: 0 1rem;
    margin-top: 2rem;
    @media (max-width: 640px) {
      grid-auto-columns: 35%;
    }
    > * {
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
  }
}

h1 {
  font-size: 3rem;
}
</style>