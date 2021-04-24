<template>
  <form @submit.prevent="onSubmit">
    <h1>Sign Up</h1>
    <div class="form-input">
      <label for="name">Name:</label>
      <input v-model="$v.name.$model" type="text" id="name" placeholder="Enter your name or nickname...">
      <UIErrorMessage v-if="!$v.name.required && $v.$anyDirty">Name is required</UIErrorMessage>
    </div>
    <div class="form-input">
      <label for="email">E-mail:</label>
      <input v-model="$v.email.$model" type="email" id="email" placeholder="Enter your e-mail address...">
      <UIErrorMessage v-if="!$v.email.required && $v.$anyDirty">E-mail is required</UIErrorMessage>
    </div>
    <div class="form-input">
      <label for="password">Password:</label>
      <input v-model="$v.password.$model" type="password" id="password" placeholder="Enter password...">
      <UIErrorMessage v-if="!$v.password.required && $v.$anyDirty">Password is required</UIErrorMessage>
      <UIErrorMessage v-if="!$v.password.minLength && $v.$anyDirty">Password must have at least
        {{ $v.password.$params.minLength.min }} letters</UIErrorMessage>
    </div>
    <div class="form-input">
      <label for="password-repeat">Repeat password:</label>
      <input v-model="$v.repeatPassword.$model" type="password" id="password-repeat"
        placeholder="Repeat your password...">
        <UIErrorMessage v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical</UIErrorMessage>
    </div>
    <div class="agreement-block">
      <input v-model="$v.agreement.$model" type="checkbox" id="agreement">
      <label for="agreement">I'm agree!</label>
    </div>
    <div class="actions">
      <button :disabled="$v.$dirty && $v.$invalid" class="submit-button button" type="submit">Sign Up</button>
      <nuxt-link to="/auth">Already have an account?</nuxt-link>
    </div>
  </form>
</template>

<script>
import {required, minLength, sameAs} from 'vuelidate/lib/validators'
export default {
  name: 'Auth',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreement: false
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    agreement: {
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

.agreement-block {
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