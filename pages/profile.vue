<template>
  <div v-if="user" class="profile">
    <div class="profile-info profile-block">
      <div class="header">
        <h1>YOUR PERSONAL INFORMATION</h1>
        <button @click="logout" class="button button-logout">Logout</button>
      </div>
      <ul class="personal-info">
        <li><span class="label">Name:</span> {{user.name}}</li>
        <li><span class="label">Location:</span> {{user.location}}</li>
        <li><span class="label">Rating:</span> {{user.rating}}</li>
        <li><span class="label">Reviews:</span> {{user.reviews}}</li>
        <li><span class="label">Email:</span> <a :href="`mailto:${user.email}`" class="email-link">{{user.email}}</a>
        </li>
      </ul>
    </div>

    <div class="profile-product profile-block">
      <h1>YOUR PRODUCTS</h1>
      <div class="products">
        <ItemTray :items="userItems" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  async fetch() {
    await this.$store.dispatch('items/getUserItems', this.user.id)
  },
  computed: {
    ...mapState(['user']),
    ...mapState('items', {
      userItems: 'userItems'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  middleware: ['check-auth']
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 1rem;
  }
  .profile-block:not(:last-child) {
    margin-bottom: 2rem;
  }
}
.profile-info {
  .header {
    display: flex;
    justify-content: space-between;
    .button-logout {
      background-color: $accent;
      color: white;
      width: 200px;
      height: 50px;
      font-size: 1.5rem;
      &:hover {
        opacity: 0.4;
      }
    }
  }
  .personal-info {
    font-size: 1.5rem;
    .label {
      font-weight: 600;
      font-size: 1.5rem;
    }
    .email-link {
      color: $accent;
      text-decoration: underline;
      &:hover {
        color: $accent-2;
      }
    }
  }
}
</style>