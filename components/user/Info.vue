<template>
  <div class="profile-info profile-block">
    <div class="header">
      <h1>PERSONAL INFO</h1>
      <button v-if="isUser" @click="logout" class="button action-button">Logout</button>
      <a v-else :href="`mailto:${userInfo.email}`" class="button submit-button-small">Contact</a>
    </div>
    <ul class="personal-info">
      <li><span class="label">Name:</span> {{userInfo.name}}</li>
      <li><span class="label">Location:</span> {{userInfo.location}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      required: true
    },
    isUser: {
      type: Boolean
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-info {
  .header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 480px) {
      flex-direction: column;
      h1 {
        text-align: center;
        margin-bottom: 0.5rem;
      }
      margin-bottom: 2rem;
    }
  }
  .personal-info {
    font-size: 1.5rem;
    .label {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
}
</style>