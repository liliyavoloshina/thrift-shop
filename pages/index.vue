<template>
  <div class="home container">
    <UIHomePromo />
    <div class="home-items">
      <div class="home-items-area">
        <h2>New Items</h2>
        <template v-if="$fetchState.pending">
          <content-placeholders v-for="p in 5" :key="p" rounded>
            <content-placeholders-img />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
        </template>
        <template v-else>
          <ItemTray :items="newItems" />
        </template>
      </div>
      <div class="home-items-area">
        <h2>Exclusive Items</h2>
        <template v-if="$fetchState.pending">
          <content-placeholders v-for="p in 5" :key="p" rounded>
            <content-placeholders-img />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
        </template>
        <template v-else>
          <ItemTray :items="exclusiveItems" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItems: [],
      exclusiveItems: []
    }
  },
  async fetch() {
    const res = await this.$axios.$get(`${process.env.firebaseApi}items.json`)
    const items = []
    for (let item in res) {
      items.push({...res[item], id: item})
    }
    this.newItems = items
      .sort(function (a, b) {
        let c = new Date(a.createdAt)
        let d = new Date(b.createdAt)
        return d - c
      })
      .slice(0, 10)
    this.exclusiveItems = items
      .filter(i => i.ownerId == '-MZNSKYTx1fW2w3kJhJK')
      .slice(0, 10)
  }
}
</script>

<style lang="scss" scoped>
.home-items {
  margin-top: 2rem;
  .home-items-area {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  h2 {
    margin-bottom: 1rem;
  }
}
</style>
