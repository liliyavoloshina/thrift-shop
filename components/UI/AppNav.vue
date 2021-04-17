<template>
  <header>
    <h1>
      <nuxt-link to="/">Thrift Shop</nuxt-link>
    </h1>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/woman">Woman</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/man">Man</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cart">Cart</nuxt-link>
        </li>
      </ul>
    </nav>
    <button @click="toggleSidenav" :class="['menu-button', openSidenav ? 'active' : '']" type="button">
      <span hidden>Toggle menu</span>
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
    </button>

    <UIAppSidebar :openSidenav="openSidenav" />
  </header>
</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      openSidenav: false
    }
  },
  methods: {
    toggleSidenav() {
      this.openSidenav = !this.openSidenav
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/variables.scss';
header {
  display: grid;
  align-content: center;
  grid-gap: 1em;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr auto;
  height: 100%;

  nav {
    li {
      display: inline;
      font-size: 1.5rem;
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
    @media (max-width: 480px) {
      display: none;
    }
  }

  .menu-button {
    display: none;
    position: absolute;
    right: 0;
    height: 80px;
    width: 40px;
    z-index: 2;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;

    .bar {
      position: absolute;
      top: 50%;
      right: 6px;
      left: 6px;
      height: 2px;
      width: auto;
      margin-top: -1px;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      background-color: $black;
    }

    .bar-1 {
      transform: translateY(-8px);
    }

    .bar-3 {
      transform: translateY(8px);
    }

    &.active .bar-1 {
      transform: rotate(45deg);
    }

    &.active .bar-2 {
      opacity: 0;
    }

    &.active .bar-3 {
      transform: rotate(-45deg);
    }

    @media (max-width: 480px) {
      display: block;
    }
  }
}
</style>