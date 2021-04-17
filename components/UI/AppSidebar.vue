<template>
  <transition name="slide">
    <div class="sidebar" :class="openSidenav ? 'show' : 'hide'">
      <span></span>
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
    </div>
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
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 1;
  width: calc(100vw - 70%);
  background-color: #fff;
}

.hide {
  opacity: 0;
}
.show {
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>