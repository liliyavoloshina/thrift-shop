<template>
  <aside>
    <nuxt-link to="/items/create" class="create-button button">Add Your Own!</nuxt-link>

    <ul class="filter-ul">
      <li>Filter by Category:
        <select v-model="filter.category" @change="changed" class="sorting-select" name="select">
          <option value="clothes">Clothes</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </li>
      <li><label>Filter by Gender:</label>
        <div class="genders">
          <div class="radio-gender">
            <input v-model="filter.gender" @change="changed" id="male" value="male" name="gender" type="radio">
            <label for="male">Male</label>
          </div>
          <div class="radio-gender">
            <input v-model="filter.gender" @change="changed" id="female" value="female" name="gender" type="radio">
            <label for="female">Female</label>
          </div>
          <div class="radio-gender">
            <input v-model="filter.gender" @change="changed" id="unisex" value="unisex" name="gender" type="radio" checked>
            <label for="unisex">Unisex</label>
          </div>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        gender: null,
        category: null
      }
    }
  },
  methods: {
    changed() {
      this.$emit('changed', this.filter)
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  grid-column: 1/2;
  border: $border-thin;
  background-color: white;

  .create-button {
    display: block;
    width: 100%;
    height: auto;
    text-align: center;
    color: white;
    background-color: $accent;
    font-size: 1.8rem;
    line-height: 1.6;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: $accent-2;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1/3;
  }
}

.filter-ul {
  margin-top: 1rem;
  li {
    display: block;
    height: auto;
    padding: 0.5rem;
    background-color: white;
    border-bottom: $border-thin;
  }
}

.genders {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>