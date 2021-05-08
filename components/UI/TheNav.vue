<template>
  <header>
    <nav>
      <ul>
        <li class="logo">
          <nuxt-link to="/" exact>Thrift Shop</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/items">Search!</nuxt-link>
        </li>
        <li v-if="isAuthorized">
          <nuxt-link :to="`/user/${user.id}`">Profile</nuxt-link>
        </li>
        <li v-if="!isAuthorized">
          <nuxt-link :to="`/auth`">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/favorite">Favorite</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'AppNav',
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthorized'])
  }
}
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid $grey;
}

nav {
  height: 100%;
}

nav ul {
  display: grid;
  grid-template-columns: 1fr repeat(5, fit-content(50px));
  grid-gap: 20px;
  align-items: center;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
  li {
    font-size: 1.5rem;
  }
  .logo {
    grid-column: 1 / 2;
    justify-self: start;
    font-style: italic;
    font-size: 3rem;
    font-weight: 600;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    justify-content: center;
    justify-items: center;
    .logo {
      grid-column: 1 / 4;
      justify-self: center;
    }
  }
}
</style>