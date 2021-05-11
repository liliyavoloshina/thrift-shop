<template>
  <header>
    <div class="container">
      <div class="logo">
        <nuxt-link to="/" exact>Thrift Shop</nuxt-link>
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/items">Search!</nuxt-link>
          </li>
          <li v-if="isAuthorized">
            Hello, <nuxt-link :to="`/user/${user.id}`">{{user.name}}!</nuxt-link>
          </li>
          <li v-else>
            <nuxt-link :to="`/auth`">SignIn</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
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
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
  }

  .logo {
    font-style: italic;
    font-size: 3rem;
    font-weight: 600;
  }

  nav {
    width: auto;

    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
    }

    li {
      font-size: 1.5rem;
      &:last-child {
        padding-left: 1em;
      }
    }
  }

  @media (max-width: 480px) {
    flex-flow: column wrap;
  }
}
</style>