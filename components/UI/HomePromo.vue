<template>
  <div class="home-promo">
    <div class="promo-item promo-item-one">
      <nuxt-link to="/about">
        <img
          src="https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80"
          alt="about">
        <div class="text">About us</div>
      </nuxt-link>
    </div>
    <div class="promo-item promo-item-two">
      <nuxt-link to="/items">
        <img
          src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="dresses">
        <div class="text">Explore new clothes</div>
      </nuxt-link>
    </div>
    <div class="promo-item promo-item-three">
      <nuxt-link to="/items">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="woman">
        <div class="text">Change your style</div>
      </nuxt-link>
    </div>
    <div class="promo-item promo-item-four">
      <nuxt-link to="/items/create">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt="dresses">
        <div class="text">Start right now!</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-promo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: .5rem;
  min-height: 100vh;
  max-height: 60rem;
  .promo-item {
    position: relative;
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      color: white;
      background-color: $trans-black;
    }
    &-one {
      grid-area: 1 / 1 / 3 / 3;
      font-size: 4rem;
    }
    &-two {
      grid-area: 2 / 3 / 3 / 5;
      font-size: 3rem;
    }
    &-three {
      grid-area: 1 / 3 / 2 / 5;
      font-size: 3rem;
    }
    &-four {
      grid-area: 3 / 1 / 5 / 5;
      font-size: 4rem;
    }
    @media (max-width: 768px) {
      &-one {
        grid-area: 1 / 1 / 3 / 5;
        font-size: 3rem;
      }
      &-two {
        grid-area: 3 / 1 / 5 / 3;
        font-size: 2rem;
      }
      &-three {
        grid-area: 5 / 1 / 7 / 5;
        font-size: 3rem;
      }
      &-four {
        grid-area: 3 / 3 / 5 / 5;
        font-size: 2rem;
      }
    }
    @media (max-width: 480px) {
      &-one {
        grid-area: 1 / 1 / 2 / 2;
        font-size: 3rem;
      }
      &-two {
        grid-area: 2 / 1 / 3 / 2;
        font-size: 3rem;
      }
      &-three {
        grid-area: 3 / 1 / 4 / 2;
        font-size: 3rem;
      }
      &-four {
        grid-area: 4 / 1 / 5 / 2;
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 768px) {
    max-height: 80rem;
    grid-template-rows: repeat(6, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>