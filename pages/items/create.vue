<template>
  <div>
    <h1>Create new item</h1>
    <form @submit.prevent="submitForm">
      <div class="main">
        <div>
          <label for="name">Name:</label>
          <input v-model="$v.name.$model" :class="$v.name.$invalid && $v.name.$dirty ? 'error-field' : ''" id="name"
            type="text" placeholder="Type your thing name...">
          <UIAppErrorMessage v-if="!$v.name.required && $v.name.$dirty">Name is required</UIAppErrorMessage>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="$v.description.$model"
            :class="$v.description.$invalid && $v.description.$dirty ? 'error-field' : ''" id="description" rows="5"
            maxlength="50" placeholder="Describe your thing..."></textarea>
          <UIAppErrorMessage v-if="!$v.description.required && $v.description.$dirty">Description is required
          </UIAppErrorMessage>
          <UIAppErrorMessage v-if="!$v.description.minLength && $v.description.$dirty">Description is too short
          </UIAppErrorMessage>
        </div>
        <div>
          <label for="category">Category:</label>
          <select v-model="$v.category.$model" :class="$v.category.$invalid && $v.category.$dirty ? 'error-field' : ''"
            id="category">
            <option value>Select category</option>
            <option value="clothes">Clothes</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
          <UIAppErrorMessage v-if="!$v.category.required && $v.category.$dirty">Category is required</UIAppErrorMessage>
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
          <input @change="fileUpload()" ref="file" id="file" type="file" />
          <label for="file">
            {{imageName}}
          </label>
        </div>
        <button type="submit">Submit</button>
      </div>
      <div class="note">
        <!-- <img :src="imageUrl" alt="image"> -->
        <pre>{{imageName}}</pre>
      </div>
    </form>
  </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
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
      errors: false
    }
  },
  methods: {
    async submitForm() {
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
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: $margin-from-h;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.main {
  grid-column: 1/3;
  display: grid;
  grid-auto-rows: minmax(50px, auto);
  gap: 10px;

  @media (max-width: 640px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

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
  grid-column: 3/4;
  @media (max-width: 640px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
}

.error-field {
  border-color: $error-border;
}
</style>