<template>
  <section class="home-landing">
    <div class="large-content">
      <div class="item-large about">
        <nuxt-link to="/about">
          <img
            src="https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80"
            alt="about">
          <div class="text">About us</div>
        </nuxt-link>
      </div>
      <div class="item-small">
        <nuxt-link to="/clothes">
          <img
            src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="dresses">
          <div class="text">Explore new clothes</div>
        </nuxt-link>
      </div>
      <div class="item-small">
        <nuxt-link to="/woman">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="woman">
          <div class="text">Change your style</div>
        </nuxt-link>
      </div>
      <div class="item-large about">
        <nuxt-link to="/about">
          <img
            src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="about">
          <div class="text text-2">How does it work?</div>
        </nuxt-link>
      </div>
      <div class="item-small">
        <nuxt-link to="/dresses">
          <img
            src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="dresses">
          <div class="text">Get it for free</div>
        </nuxt-link>
      </div>
      <div class="item-small">
        <nuxt-link to="/shoes">
          <img
            src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="shoes">
          <div class="text">...and even shoes</div>
        </nuxt-link>
      </div>

    </div>
    <div class="small-content">
      <div v-for="item in news" :key="item.id">
        <nuxt-link :to="`/news/${item.id}`">
          <img
            :src="item.img"
            alt="news">
          <div class="info">
            <div class="title">{{item.info.title}}</div>
            <div class="date">{{item.info.date}}</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: '1',
          img:
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          info: {
            date: '24. 02. 2021',
            title: 'New Rules'
          }
        },
        {
          id: '2',
          img:
            'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          info: {
            date: '20. 02. 2021',
            title: 'Developer news'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-landing {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem 1rem;
  min-height: 100vh;
  margin: 0 auto;

  .large-content {
    grid-column: span 8;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
    @media (max-width: 640px) {
      grid-column: span 12;
    }

    > *:not(:first-child) {
      margin-top: 1rem;
    }

    .item-large {
      grid-column: span 2;
      width: 100%;
      height: 420px;
    }
    .item-small {
      grid-column: span 1;
      height: 100px;
      position: relative;
      .text {
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: right;
        font-size: 2rem;
        width: 100%;
        color: white;
        background-color: $trans-black;
      }
      @media (max-width: 480px) {
        grid-column: span 2;
      }
    }
  }
  .small-content {
    grid-column: span 4;
    @media (max-width: 640px) {
      grid-column: span 12;
    }
    > * {
      position: relative;
      width: 100%;
      height: 200px;

      .info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 2rem;
        text-align: right;
        color: white;
        background-color: $trans-black;
        .title {
          font-size: 2rem;
        }
        .date {
          font-size: 1.5rem;
        }
      }
    }
    > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .about {
    position: relative;
    .text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      font-size: 4rem;
      color: white;
      background-color: $trans-black;
    }
    .text-2 {
      top: 45%;
      left: 0;
    }
  }
}
</style>