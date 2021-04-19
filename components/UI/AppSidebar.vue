<template>
  <transition>
    <aside v-if="openSidenav">
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
    </aside>
  </transition>
</template>

<script>
export default {
  props: {
    openSidenav: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100vw - 50%);
  height: 100vh;
  padding-top: 30vw;
  z-index: 1;
  background-color: #fff;

  nav {
    font-size: 1.8rem;
  }
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.2s ease;
}

.v-enter,
.v-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-out 0s;
}
</style>