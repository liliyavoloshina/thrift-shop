<template>
  <div class="container">
    <h1>Create new item</h1>
    <form @submit.prevent="submitForm">
      <div class="main">
        <div class="form-input">
          <label for="name">Name:</label>
          <input v-model="$v.name.$model" :class="$v.name.$invalid && $v.name.$dirty || showError ? 'error-field' : ''"
            id="name" type="text" placeholder="Type your thing name...">
          <div v-if="!$v.name.required && $v.name.$dirty || showError" class="error">Name is required</div>
        </div>
        <div class="form-input">
          <label for="description">Description:</label>
          <textarea v-model="$v.description.$model"
            :class="$v.description.$invalid && $v.description.$dirty || showError ? 'error-field' : ''" id="description"
            rows="5" maxlength="100" placeholder="Describe your thing..."></textarea>
          <div v-if="!$v.description.required && $v.description.$dirty || showError" class="error">Description is
            required
          </div>
          <div v-if="!$v.description.minLength && $v.description.$dirty || showError" class="error">Description is too
            short
          </div>
        </div>
        <div class="form-input">
          <label for="category">Category:</label>
          <select v-model="$v.category.$model"
            :class="$v.category.$invalid && $v.category.$dirty || showError ? 'error-field' : ''" id="category">
            <option value>Select category</option>
            <option value="clothes">Clothes</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
          <div v-if="!$v.category.required && $v.category.$dirty || showError" class="error">Category is required
          </div>
        </div>
        <div class="form-input">
          <label>Choose thing's gender:</label>
          <div class="radio-gender">
            <input v-model="gender" id="male" value="male" name="gender" type="radio">
            <label for="male">Male</label>
          </div>
          <div class="radio-gender">
            <input v-model="gender" id="female" value="female" name="gender" type="radio">
            <label for="female">Female</label>
          </div>
          <div class="radio-gender">
            <input v-model="gender" id="unisex" value="unisex" name="gender" type="radio" checked>
            <label for="unisex">Unisex</label>
          </div>
        </div>
        <div class="form-input">
          <input @change="fileUpload()" ref="file" id="file" type="file" accept="image/*" />
          <label
            :class="($v.image.$invalid && $v.image.$dirty) || ($v.image.$invalid && showError) ? 'error-field' : ''"
            for="file">
            {{imageLabel}}
          </label>
          <div v-if="($v.image.$invalid && showError)" class="error">Image
            is required
          </div>
        </div>
        <button :disabled="showError && $v.$invalid" class="submit-button" type="submit">Submit</button>
      </div>
      <div class="note">
        Note that the more detailed you describe your item, the faster customers will notice it.
      </div>
    </form>
  </div>
</template>

<script>
import {required, minLength, requiredIf} from 'vuelidate/lib/validators'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      name: '',
      description: '',
      category: '',
      gender: 'unisex',
      imageFile: null,
      imageName: null,
      showError: false
    }
  },
  computed: {
    imageLabel() {
      return this.imageName ? this.imageName : 'Choose image'
    },
    ...mapState({
      ownerId: state => state.user.id,
      ownerName: state => state.user.name
    })
  },
  methods: {
    async submitForm() {
      if (this.$v.$invalid) {
        this.showError = true
        return
      }
      this.showError = false
      let imageData = new FormData()
      imageData.append('file', this.imageFile)

      try {
        await this.$store.dispatch('items/postImage', {
          imageData,
          imageName: this.imageName
        })
        const itemData = {
          name: this.name,
          description: this.description,
          category: this.category,
          gender: this.gender,
          ownerId: this.ownerId,
          ownerName: this.ownerName,
          createdAt: new Date()
        }
        await this.$store.dispatch('items/postNewItem', itemData)
        this.$v.$reset()
        this.name = ''
        this.description = ''
        this.category = ''
        this.gender = 'unisex'
        this.imageFile = null
        this.imageName = null
        this.showError = false
        this.$router.replace('/items')
      } catch (e) {
        throw new Error(e)
      }
    },
    fileUpload() {
      this.$v.image.$touch()
      this.imageFile = this.$refs.file.files[0]
      this.imageName = this.$refs.file.files[0].name
    }
  },
  validations: {
    name: {
      required
    },
    description: {
      required,
      minLength: minLength(10)
    },
    category: {
      required
    },
    image: {
      required: requiredIf(function () {
        return this.imageFile == null
      })
    }
  },
  middleware: ['check-auth'],
  head: {
    title: 'Create new item',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `Creating new item`
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(min-content, max-content);
  align-items: start;
  gap: 2rem;
  margin-top: $margin-from-h;
}

.main {
  display: grid;
  grid-auto-rows: minmax(50px, auto);
  gap: 10px;

  .radio-gender {
    margin-bottom: 1rem;
    &:first-of-type {
      margin-top: 0.5rem;
    }
  }
}
.note {
  background-color: $note-light;
  font-size: 1.5rem;
  padding: 2rem;
}

.error {
  color: $error-message;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
</style>