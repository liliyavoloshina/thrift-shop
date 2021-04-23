<template>
  <div>
    {{item}}
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const itemId = context.params.id
    const item = await context.$axios.$get(
      `${process.env.firebaseApi}/items.json?orderBy="id"&equalTo="${itemId}"`
      // `${process.env.firebaseApi}/items/-MYoksD6HjHKEKRWJjPx.json`
      // `${process.env.firebaseUrl}/items.json?orderBy="id"&equalTo="${itemId}"`
    )
    // .get(`/users/${userId}/cart.json?orderBy="id"&equalTo="${productId}"`)
    // .then((response) => {
    //   let key = Object.keys(response.data)[0]
    //   return axios.patch(`/users/${userId}/cart/${key}.json?auth=${token}`, {
    //     count: newCount
    //   })
    // })
    return {item}
  }
}
</script>

<style lang="scss" scoped>
</style>