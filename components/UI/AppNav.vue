<template>
  <header>
    <nav>
      <ul>
        <li class="logo">
          <nuxt-link to="/">Thrift Shop</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clothes">Clothes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/accessories">Accessories</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/shoes">Shoes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/favorite">Favorite</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid $black;
}

nav {
  height: 100%;
}

nav ul {
  display: grid;
  grid-template-columns: 1fr repeat(5, fit-content(50px));
  grid-gap: 20px;
  align-items: center;
  padding: 1rem;
  height: 100%;
  li {
    font-size: 1.5rem;
  }
  .logo {
    grid-column: 1 / 2;
    justify-self: start;
    font-style: italic;
    font-size: 3rem;
  }
  @media (max-width: 640px) {
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