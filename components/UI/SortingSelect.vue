<template>
  <select @change="$emit('change', $event.target.value)" class="sorting-select" name="select" id="select">
    <option value>Sort By</option>
    <option v-for="option in selectOptions" :key="option" :value="option">{{option}}</option>
  </select>
</template>

<script>
export default {
  name: 'SortingSelect',
  data() {
    return {
      selectOptions: ['newest', 'oldest', 'popular', 'unpopular']
    }
  }
}
</script>

<style lang="scss" scoped>
.sorting-select {
  height: 100%;
}
</style>