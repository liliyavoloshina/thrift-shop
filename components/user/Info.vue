<template>
  <div class="profile-info profile-block">
    <div class="header">
      <h1>PERSONAL INFORMATION</h1>
      <button v-if="owner" @click="logout" class="button button-logout">Logout</button>
      <button v-else @click="log" class="button button-logout">Contact</button>
    </div>
    <ul class="personal-info">
      <li><span class="label">Name:</span> {{user.name}}</li>
      <li><span class="label">Location:</span> {{user.location}}</li>
      <li><span class="label">Email:</span> <a :href="`mailto:${user.email}`" class="email-link">{{user.email}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true
    },
    owner: {
      type: Boolean
    }
  },
  methods: {
    log() {
      console.log(this.user)
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
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