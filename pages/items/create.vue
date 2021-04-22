<template>
  <div>
    <h1>Create new item</h1>
    <form @submit.prevent="submitForm">
      <div class="main">
        <div>
          <label for="name">Name:</label>
          <input v-model="$v.name.$model" :class="$v.name.$invalid && $v.name.$dirty || showError ? 'error-field' : ''"
            id="name" type="text" placeholder="Type your thing name...">
          <UIAppErrorMessage v-if="!$v.name.required && $v.name.$dirty || showError">Name is required
          </UIAppErrorMessage>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="$v.description.$model"
            :class="$v.description.$invalid && $v.description.$dirty || showError ? 'error-field' : ''" id="description"
            rows="5" maxlength="50" placeholder="Describe your thing..."></textarea>
          <UIAppErrorMessage v-if="!$v.description.required && $v.description.$dirty || showError">Description is
            required
          </UIAppErrorMessage>
          <UIAppErrorMessage v-if="!$v.description.minLength && $v.description.$dirty || showError">Description is too
            short
          </UIAppErrorMessage>
        </div>
        <div>
          <label for="category">Category:</label>
          <select v-model="$v.category.$model"
            :class="$v.category.$invalid && $v.category.$dirty || showError ? 'error-field' : ''" id="category">
            <option value>Select category</option>
            <option value="clothes">Clothes</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
          <UIAppErrorMessage v-if="!$v.category.required && $v.category.$dirty || showError">Category is required
          </UIAppErrorMessage>
        </div>
        <div>
          <label>Choose thing's gender:</label>
          <div class="radio-gender">
            <input v-model="gender" id="male" value="male" name="gender" type="radio">
            <label for="male">Male</label>
          </div>
          <div class="radio-gender">
            <input v-model="gender" id="female" value="fenale" name="gender" type="radio">
            <label for="female">Female</label>
          </div>
          <div class="radio-gender">
            <input v-model="gender" id="unisex" value="unisex" name="gender" type="radio" checked>
            <label for="unisex">Unisex</label>
          </div>
        </div>
        <div>
          <input @change="fileUpload()" ref="file" id="file" type="file" accept="image/*" />
          <label
            :class="($v.image.$invalid && $v.image.$dirty) || ($v.image.$invalid && showError) ? 'error-field' : ''"
            for="file">
            {{imageLabel}}
          </label>
          <UIAppErrorMessage v-if="($v.image.$invalid && showError)">Image
            is required
          </UIAppErrorMessage>
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
export default {
  data() {
    return {
      name: '',
      description: '',
      category: '',
      gender: 'unisex',
      imageFile: null,
      imageName: null,
      owner: 'Liliya',
      showError: false
    }
  },
  computed: {
    imageLabel() {
      return this.imageName ? this.imageName : 'Choose image'
    }
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
          createdAt: new Date()
        }
        await this.$store.dispatch('items/postNewItem', itemData)
      } catch (e) {
        console.log(e)
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

  > * {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 0.5rem;
    }
  }

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

.submit-button {
  align-items: center;
  border: none;
  color: white;
  text-decoration: none;
  background-color: $black;
  font-size: 1.8rem;
  line-height: 1.5;
  transition: opacity 0.2s ease-out;

  &:not([disabled]):hover {
    opacity: 0.4;
  }

  &:disabled {
    background-color: $grey;
    cursor: not-allowed;
  }
}

.error-field {
  border-color: $error-border;
}
</style>