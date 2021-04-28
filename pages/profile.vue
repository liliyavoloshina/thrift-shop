<template>
  <div>
    <p> <span class="label">Name:</span> {{user.name}}</p>
    <p> <span class="label">Location:</span> {{user.location}}</p>
    <p><span class="label">Rating:</span> {{user.rating}}</p>
    <p><span class="label">Reviews:</span> {{user.reviews}}</p>
    <p><span class="label">Email:</span> <a :href="`mailto:${user.email}`" class="email-link">{{user.email}}</a></p>
    <button @click="logout" class="button button-logout">Logout</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
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
p {
  font-size: 2rem;
  .label {
    font-weight: 600;
  }
  .email-link {
    color: $accent;
    text-decoration: underline;
    &:hover {
      color: $accent-2;
    }
  }
}
.button-logout {
  background-color: $error-message;
  color: white;
  width: 200px;
  height: 50px;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.4;
  }
}
</style>