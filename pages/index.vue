<template>
  <div class="home container">
    <div class="home-promo">
      <HomeLanding />
    </div>

    <div class="home-items">
      <div class="home-items-area">
        <h2>New Items</h2>
        <ItemTray :items="newItems" />
      </div>
      <div class="home-items-area">
        <h2>Exclusive Items</h2>
        <ItemTray :items="exclusiveItems" />
      </div>
      <div class="home-items-area">
        <h2>Popular Items</h2>
        <ItemTray :items="popularItems" />
      </div>
    </div>

  </div>
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
.home-promo {
}
.home-items {
  margin-top: 2rem;
  .home-items-area:not(:last-child) {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
}
</style>
