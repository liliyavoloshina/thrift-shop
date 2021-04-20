<template>
  <div>
    <h1>Create new item</h1>
    <form @submit.prevent="submitForm">
      <div class="main">
        <div>
          <label for="name">Name:</label>
          <input v-model="name" id="name" type="text" placeholder="Type your thing name...">
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="description" id="description" rows="5" maxlength="50"
            placeholder="Describe your thing..."></textarea>
        </div>
        <div>
          <label for="category">Category:</label>
          <select v-model="category" id="category">
            <option value>Select category</option>
            <option value="clothes">Clothes</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div>
          <label for="category">Choose thing's gender:</label>
          <div class="radio-gender">
            <input v-model="gender" id="male" value="male" name="gender" type="radio">
            <label for="male">Male</label>
          </div>
          <div class="radio-gender">
            <input v-model="gender" id="female" value="fenale" name="gender" type="radio">
            <label for="female">Female</label>
          </div>
          <div class="radio-gender">
            <input v-model="gender" id="unisex" value="unisex" name="gender" type="radio">
            <label for="unisex">Unisex</label>
          </div>
        </div>
        <div>
          <label for="file-upload" class="custom-file-upload">
            Load image
          </label>
          <input @change="fileUpload()" ref="file" id="file-upload" type="file" />
        </div>
        <button type="submit">Submit</button>
      </div>
      <div class="note">
        <img src="https://firebasestorage.googleapis.com/v0/b/thrift-shop-2b434.appspot.com/o/items%2Fitem_2" alt="">
        <!-- <img src="https://firebasestorage.googleapis.com/v0/b/thrift-shop-2b434.appspot.com/o/items%2Fitem_2" alt=""> -->
        <pre>{{image}}</pre>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      description: '',
      category: '',
      gender: 'unisex',
      image: null
    }
  },
  methods: {
    async submitForm() {
      // let formData = new FormData()
      // formData.append('file', this.image)
      let formData = this.image
      console.log(this.image)
      axios({
        method: 'post',
        url: `https://firebasestorage.googleapis.com/v0/b/thrift-shop-2b434.appspot.com/o/items%2Fitem_2?alt=media`,
        data: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          //handle error
          console.log(response)
        })

      // await this.$axios.get('https://firebasestorage.googleapis.com/v0/b/thrift-shop-2b434.appspot.com/o/items%2Fitem_2').then(res => console.log(res))
    },
    fileUpload() {
      this.image = this.$refs.file.files[0]
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
</style>