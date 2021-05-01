<template>
  <aside>
    <nuxt-link to="/items/create" class="create-button button">Add Your Own!</nuxt-link>

    <ul class="filter-ul">
      <li>Filter by Category:
        <select @change="filterItemsCategory($event.target.value)" class="sorting-select" name="select">
          <option value="all">All</option>
          <option value="clothes">Clothes</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </li>
      <li><label>Filter by Gender:</label>
        <div class="genders">
          <div v-for="gender in genders" :key="gender.value" class="radio-gender">
            <input @change="filterItemsGender($event.target.value)" :id="gender.value" :value="gender.value" :checked="whatChecked == gender.value" name="gender" type="radio">
            <label :for="gender.value">{{gender.value}}</label>
          </div>
          <!-- <div class="radio-gender">
            <input @change="filterItemsGender($event.target.value)" id="male" value="male" name="gender" type="radio">
            <label for="male">Male</label>
          </div>
          <div class="radio-gender">
            <input @change="filterItemsGender($event.target.value)" id="female" value="female" name="gender"
              type="radio">
            <label for="female">Female</label>
          </div>
          <div class="radio-gender">
            <input @change="filterItemsGender($event.target.value)" id="unisex" value="unisex" name="gender"
              type="radio">
            <label for="unisex">Unisex</label>
          </div> -->
        </div>
      </li>
      <li>
        <button @click="resetFilters" class="reset-button button">Reset Filters</button>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      genders: [
        {value: 'male', checked: false},
        {value: 'female', checked: false},
        {value: 'unisex',checked: false}
      ]
    }
  },
  computed: {
    whatChecked() {
      return this.$store.state.items.filters.gender
    }
  },
  methods: {
    filterItemsGender(value) {
      this.$store.dispatch('items/filterItemsGender', value)
    },
    filterItemsCategory(value) {
      this.$store.dispatch('items/filterItemsCategory', value)
    },
    resetFilters() {
      this.$store.dispatch('items/resetFilters')
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

.reset-button {
  width: 100%;
  height: 2rem;
}

.genders {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>