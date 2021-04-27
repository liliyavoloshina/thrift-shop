<template>
  <form @submit.prevent="onSubmit">
    <h1>Sign Up</h1>
    <div class="form-input">
      <label for="name">Name:</label>
      <input v-model="$v.name.$model" :class="$v.name.$error ? 'error-field' : ''" type="text" id="name"
        placeholder="Enter your name or nickname...">
      <UIErrorMessage v-if="!$v.name.required && $v.name.$dirty">Name is required</UIErrorMessage>
    </div>
    <div class="form-input">
      <label for="email">E-mail:</label>
      <input v-model="$v.email.$model" :class="$v.email.$error ? 'error-field' : ''" type="email" id="email"
        placeholder="Enter your e-mail address...">
      <UIErrorMessage v-if="!$v.email.required && $v.email.$dirty">E-mail is required</UIErrorMessage>
      <UIErrorMessage v-if="!$v.email.email && $v.email.$dirty">E-mail must be valid</UIErrorMessage>
    </div>
    <div class="form-input">
      <label for="password">Password:</label>
      <input v-model="$v.password.$model" :class="$v.password.$error ? 'error-field' : ''" type="password" id="password"
        placeholder="Enter password...">
      <UIErrorMessage v-if="!$v.password.required && $v.password.$dirty">Password is required</UIErrorMessage>
      <UIErrorMessage v-if="!$v.password.minLength && $v.password.$dirty">Password must have at least
        {{ $v.password.$params.minLength.min }} letters</UIErrorMessage>
    </div>
    <div class="form-input">
      <label for="password-repeat">Repeat password:</label>
      <input v-model="$v.repeatPassword.$model" :class="$v.repeatPassword.$error ? 'error-field' : ''" type="password"
        id="password-repeat" placeholder="Repeat your password...">
      <UIErrorMessage v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty">Passwords must be identical
      </UIErrorMessage>
    </div>
    <div class="agreement-block">
      <input v-model="$v.agreement.$model" :class="$v.agreement.$error ? 'error-field' : ''" type="checkbox"
        id="agreement">
      <label for="agreement">I'm agree!</label>
      <UIErrorMessage v-if="!$v.agreement.sameAs && $v.agreement.$dirty">Agreement is required</UIErrorMessage>
    </div>
    <div class="actions">
      <button :disabled="$v.$anyDirty && $v.$invalid" class="submit-button button" type="submit">Sign Up</button>
      <nuxt-link to="/auth">Already have an account?</nuxt-link>
    </div>
  </form>
</template>

<script>
import {required, minLength, sameAs, email} from 'vuelidate/lib/validators'
export default {
  name: 'Signup',
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
    async onSubmit() {
      const userInfo = {
        name: this.name,
        email: this.email,
        password: this.password,
        isSignin: false
      }

      this.$v.$touch()
      try {
        await this.$store.dispatch('auth/authUser', userInfo)
      } catch (e) {
        console.log(e)
      }
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    agreement: {
      sameAs: sameAs(() => true)
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