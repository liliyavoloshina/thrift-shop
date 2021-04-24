<template>
  <form @submit.prevent="onSubmit">
    <h1>Sign In</h1>
    <div class="form-input">
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" placeholder="Enter your name or nickname...">
    </div>
    <div class="form-input">
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" placeholder="Enter your password...">
    </div>
    <div class="actions">
      <button class="submit-button button" type="submit">Sign In</button>
      <nuxt-link to="/auth/signup">Don't have an account?</nuxt-link>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  layout: 'auth'
}
</script>

<style lang="scss" scoped>
form {
  width: 90%;
}
input {
  width: 100%;
}
h1 {
  text-align: center;
}

.form-input {
  margin-top: 0.7rem;
}

.submit-button {
  margin-top: 1rem;
}

.actions {
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    margin: 1rem 0;
    color: $accent;
    &:hover {
      color: $accent-2;
    }
  }
}
</style>