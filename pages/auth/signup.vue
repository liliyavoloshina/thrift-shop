<template>
  <form @submit.prevent="onSubmit">
    <h1>Sign Up</h1>

    <div class="form-input">
      <label for="name">Name:</label>
      <input v-model="$v.name.$model" :class="$v.name.$error ? 'error-field' : ''" type="text" id="name"
        placeholder="Enter your name or nickname...">
      <div v-if="!$v.name.required && $v.name.$dirty" class="error">Name is required</div>
    </div>

    <div class="form-input">
      <label for="location">Location:</label>
      <input v-model="$v.location.$model" :class="$v.location.$error ? 'error-field' : ''" type="text" id="location"
        placeholder="Enter your location...">
      <div v-if="!$v.location.required && $v.location.$dirty" class="error">Location is required</div>
    </div>

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
        placeholder="Enter password...">
      <div v-if="!$v.password.required && $v.password.$dirty" class="error">Password is required</div>
      <div v-if="!$v.password.minLength && $v.password.$dirty" class="error">Password must have at least
        {{ $v.password.$params.minLength.min }} letters</div>
    </div>

    <div class="form-input">
      <label for="password-repeat">Repeat password:</label>
      <input v-model="$v.repeatPassword.$model" :class="$v.repeatPassword.$error ? 'error-field' : ''" type="password"
        id="password-repeat" placeholder="Repeat your password...">
      <div v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty" class="error">Passwords must be
        identical
      </div>
    </div>

    <div class="agreement-block">
      <input v-model="$v.agreement.$model" :class="$v.agreement.$error ? 'error-field' : ''" type="checkbox"
        id="agreement">
      <label for="agreement">I'm agree!</label>
      <div v-if="!$v.agreement.sameAs && $v.agreement.$dirty" class="error">Agreement is required</div>
    </div>

    <div class="actions">
      <div v-if="responseError" class="response-error">{{responseError}}</div>
      <button :disabled="$v.$anyDirty && $v.$invalid" class="submit-button" type="submit">Sign Up</button>
      <nuxt-link to="/auth" class="toggle-link">Already have an account?</nuxt-link>
    </div>
  </form>
</template>

<script>
import {required, minLength, sameAs, email} from 'vuelidate/lib/validators'
export default {
  name: 'Auth',
  data() {
    return {
      name: '',
      location: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreement: false,
      responseError: null
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      const authInfo = {
        name: this.name,
        location: this.location,
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('signup', authInfo)
        let redirectUrl = this.$route.query.redirect || '/'
        this.$router.replace(`${redirectUrl}`)
      } catch ({response}) {
        this.responseError = response.data.error.message
      }
    }
  },
  validations: {
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