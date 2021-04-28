<template>
  <form @submit.prevent="onSubmit">
    <h1 v-if="signIn">Sign In</h1>
    <h1 v-else>Sign Up</h1>

    <div v-if="!signIn" class="form-input">
      <label for="name">Name:</label>
      <input v-model="$v.name.$model" :class="$v.name.$error ? 'error-field' : ''" type="text" id="name"
        placeholder="Enter your name or nickname...">
      <UIErrorMessage v-if="!$v.name.required && $v.name.$dirty">Name is required</UIErrorMessage>
    </div>
    <div v-if="!signIn" class="form-input">
      <label for="location">Location:</label>
      <input v-model="$v.location.$model" :class="$v.location.$error ? 'error-field' : ''" type="text" id="location"
        placeholder="Enter your location...">
      <UIErrorMessage v-if="!$v.location.required && $v.location.$dirty">Location is required</UIErrorMessage>
    </div>

    <div class="form-input">
      <label for="email">Email:</label>
      <input v-model="$v.email.$model" :class="$v.email.$error ? 'error-field' : ''" type="text" id="email"
        placeholder="Enter your email...">
      <UIErrorMessage v-if="!$v.email.required && $v.email.$dirty">Email is required</UIErrorMessage>
      <UIErrorMessage v-if="!$v.email.email && $v.email.$dirty">Email must be valid</UIErrorMessage>
    </div>
    <div v-if="signIn" class="form-input">
      <label for="password">Password:</label>
      <input v-model="$v.password.$model" :class="$v.password.$error ? 'error-field' : ''" type="password" id="password"
        placeholder="Enter your password...">
      <UIErrorMessage v-if="!$v.password.required && $v.password.$dirty">Password is required</UIErrorMessage>
    </div>

    <div v-if="!signIn" class="form-input">
      <label for="password">Password:</label>
      <input v-model="$v.password.$model" :class="$v.password.$error ? 'error-field' : ''" type="password" id="password"
        placeholder="Enter password...">
      <UIErrorMessage v-if="!$v.password.required && $v.password.$dirty">Password is required</UIErrorMessage>
      <UIErrorMessage v-if="!$v.password.minLength && $v.password.$dirty">Password must have at least
        {{ $v.password.$params.minLength.min }} letters</UIErrorMessage>
    </div>

    <div v-if="!signIn" class="form-input">
      <label for="password-repeat">Repeat password:</label>
      <input v-model="$v.repeatPassword.$model" :class="$v.repeatPassword.$error ? 'error-field' : ''" type="password"
        id="password-repeat" placeholder="Repeat your password...">
      <UIErrorMessage v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty">Passwords must be identical
      </UIErrorMessage>
    </div>

    <div v-if="!signIn" class="agreement-block">
      <input v-model="$v.agreement.$model" :class="$v.agreement.$error ? 'error-field' : ''" type="checkbox"
        id="agreement">
      <label for="agreement">I'm agree!</label>
      <UIErrorMessage v-if="!$v.agreement.sameAs && $v.agreement.$dirty">Agreement is required</UIErrorMessage>
    </div>

    <div class="actions">
      <button :disabled="$v.$anyDirty && $v.$invalid" class="submit-button button" type="submit">Sign In</button>
      <a @click="toggleForm" class="toggle-link">{{labelLink}}</a>
    </div>
  </form>
</template>

<script>
import {required, minLength, sameAs, email} from 'vuelidate/lib/validators'
export default {
  name: 'Auth',
  data() {
    return {
      signIn: true,
      name: '',
      location: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreement: false
    }
  },
  computed: {
    labelLink() {
      return this.signIn ? `Don't have an account?` : `Already have an account?`
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      } else {
        let userInfo = {
          email: this.email,
          password: this.password,
          isSignin: true
        }

        if (this.signIn === false) {
          userInfo = {
            name: this.name,
            location: this.location,
            email: this.email,
            password: this.password,
            isSignin: false
          }
        }

        this.$emit('onSubmit', userInfo)
      }
    },
    toggleForm() {
      this.signIn = !this.signIn
    }
  },
  validations() {
    if (this.signIn) {
      return {
        email: {
          required,
          email
        },
        password: {
          required
        }
      }
    } else {
      return {
        name: {
          required
        },
        location: {
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
      }
    }
  }
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

  .toggle-link {
    margin: 1rem 0;
    color: $accent;
    &:hover {
      color: $accent-2;
      cursor: pointer;
    }
  }
}
</style>