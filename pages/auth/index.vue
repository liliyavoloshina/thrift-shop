<template>
  <form @submit.prevent="onSubmit">
    <h1>Sign In</h1>
    <div class="form-input">
      <label for="email">Email:</label>
      <input v-model="$v.email.$model" :class="$v.email.$error ? 'error-field' : ''" type="text" id="email"
        placeholder="Enter your email or nickemail...">
      <UIErrorMessage v-if="!$v.email.required && $v.email.$dirty">Email is required</UIErrorMessage>
      <UIErrorMessage v-if="!$v.email.email && $v.email.$dirty">Email must be valid</UIErrorMessage>
    </div>
    <div class="form-input">
      <label for="password">Password:</label>
      <input v-model="$v.password.$model" :class="$v.password.$error ? 'error-field' : ''" type="password" id="password"
        placeholder="Enter your password...">
      <UIErrorMessage v-if="!$v.password.required && $v.password.$dirty">Password is required</UIErrorMessage>
    </div>
    <div class="actions">
      <button :disabled="$v.$anyDirty && $v.$invalid" class="submit-button button" type="submit">Sign In</button>
      <nuxt-link to="/auth/signup">Don't have an account?</nuxt-link>
    </div>
  </form>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
export default {
  name: 'Auth',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()
      const userInfo = {
        email: this.email,
        password: this.password,
        isSignin: true
      }

      try {
        await this.$store.dispatch('auth/authUser', userInfo)
      } catch (e) {
        console.log(e)
      }
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
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