<template>
  <div>
      <p>Do you have a closet full of clothes and you don’t know what to do with it?</p>
      <p>Tired from your old, outfashion
        clothes?</p>
      <p> Want somehting new, but have no money?</p>

    <p class="help">We can help you!</p>
    <p>Just add clothes you no longer wear to our <nuxt-link to="/items" class="link">catalog</nuxt-link> and trade with
      someone for something you like!</p>
    <div class="block">
      <p>Interested?</p> 
      <nuxt-link to="/items/create" class="button-start">Add your first thing!</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
p {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.help {
  font-size: 2rem;
  font-weight: 900;
}

.block {
  display: flex;
  flex-flow: column wrap;
}

.link {
  color: $accent;
}
.button-start {
  background-color: $accent;
  color: white;
  padding: .5rem;
  font-size: 1.5rem;
  text-align: center;
  &:hover {
    opacity: 0.4;
  }
}
</style>