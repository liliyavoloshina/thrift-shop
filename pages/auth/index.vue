<template>
  <form @submit.prevent="onSubmit">
    <h1>Sign In</h1>

    <div class="form-input">
      <label for="email">Email:</label>
      <input v-model="$v.email.$model" :class="$v.email.$error ? 'error-field' : ''" type="text" id="email"
        placeholder="Enter your email...">
      <div v-if="!$v.email.required && $v.email.$dirty">Email is required</div>
      <div v-if="!$v.email.email && $v.email.$dirty" class="error">Email must be valid</div>
    </div>

    <div class="form-input">
      <label for="password">Password:</label>
      <input v-model="$v.password.$model" :class="$v.password.$error ? 'error-field' : ''" type="password" id="password"
        placeholder="Enter your password...">
      <div v-if="!$v.password.required && $v.password.$dirty" class="error">Password is required</div>
    </div>

    <div class="actions">
      <div v-if="responseError" class="response-error">{{responseError}}</div>
      <button :disabled="$v.$anyDirty && $v.$invalid" class="submit-button" type="submit">Sign In</button>
      <nuxt-link to="/auth/signup" class="toggle-link">Don't have an account?</nuxt-link>
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
      password: '',
      responseError: null
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }
      let authInfo = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('signin', authInfo)
        let redirectUrl = this.$route.query.redirect || '/'
        this.$router.replace(`${redirectUrl}`)
      } catch ({response}) {
        this.responseError = response.data.error.message
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

  .toggle-link {
    margin: 1rem 0;
    color: $accent;
    &:hover {
      color: $accent-2;
      cursor: pointer;
    }
  }
}

.error {
  color: $error-message;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.response-error {
  color: $error-message;
  margin-top: 1rem;
  font-weight: 600;
}
</style>