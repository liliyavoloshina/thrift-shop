<template>
  <section class="home-landing">
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
        <div class="text">How does it work?</div>
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
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home-landing {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, 200px);
  gap: 1rem 1rem;
  max-width: 1561px;
  height: auto;
  margin: 0 auto;

  .item-large {
    grid-column: span 4;
    width: 100%;
  }
  .item-small {
    grid-column: span 2;
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
      grid-column: span 4;
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
  }
}
</style>