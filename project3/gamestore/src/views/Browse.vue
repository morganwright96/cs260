<template>
    <div>
        <div class="jumbotron text-center">
            <h1>Browse games by genre</h1>
            <p>Choose a genre below to see games in that genre</p>
            <div class="d-flex justify-content-center">
                <div class="p-2">
                    <a @click="select('Racing')" href="#" class="link-no-style p-2">Racing</a>
                    <a @click="select('Adventure')" href="#" class="link-no-style p-2">Adventure</a>
                    <a @click="select('Action')" href="#" class="link-no-style p-2">Action</a>
                </div>
            </div>
        </div>
        <ProductList :products="products" />
    </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      genre: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.genre === this.genre);
    }
  },
  methods: {
    select(genre) {
      this.genre = genre;
    }
  }
}
</script>

<style scoped>
    .link-no-style {
        color: #97AAB4;
    }
    .link-no-style:hover {
        color: black;
    }
</style>