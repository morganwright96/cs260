<template>
    <div class="album py-5">
        <div class="container">
            <div class="row" >
                <div class="col-md-4" v-for="product in products" :key="product.id">
                    <div class="card mb-4 box-shadow">
                        <div class="card-title">
                            <h6 class="card-text text-center">{{product.name}}</h6>
                        </div>
                        <img class="card-img-top" :src="'/images/Games/' + product.image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductList',
    props: {
        products: Array
    },
    methods: {
        addToCart(product) {
            this.$root.$data.cart.push(product)
        }
    }
}
</script>

<style scoped>
    img{
        width: 338px;
        height: 443px;
    }
</style>