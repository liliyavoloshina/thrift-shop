<template>
  <header>
    <nav>
      <ul>
        <li class="logo">
          <nuxt-link to="/">Thrift Shop</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/woman">Woman</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/man">Man</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clothes">Clothes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/shoes">Shoes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/accessories">Accessories</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cart">Cart</nuxt-link>
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
@import '~assets/variables.scss';
nav ul {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
  height: 100%;
  li {
    display: inline;
    font-size: 1.5rem;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
  .logo {
    font-style: italic;
    font-size: 3rem;
    grid-column: 1 / 4;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr repeat(3, 100px);
    .logo {
      grid-column: 1 / 2;
    }
  }
}
</style>