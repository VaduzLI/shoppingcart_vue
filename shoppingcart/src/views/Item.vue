<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col v-for="product in products" :key="product.product_id" cols="6">
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  product.product_name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  product.category_id
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img
              src="https://trinamiek.nl/wp-content/uploads/2018/07/placeholder-red.png"
              max-height="200"
            >
            </v-img>
            <v-card-text>
              {{ product.product_description }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
                :href="'/shop/product/' + product.product_id"
              >
                More Info
              </v-btn>

              <v-btn
                v-on:click="
                  addToCart({
                    id: product.product_id,
                    name: product.product_name,
                    price: product.product_price
                  })
                "
                text
                color="deep-purple accent-4"
              >
                Add Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';

let shoppingCart = require('../assets/shoppingcart.js')


export default {
  data: function(){
    return {
      products: null
    }
  },

  mounted: function() {
    // Gets all products belonging to that category
    axios.get(`http://localhost:5000/api/products/category/${this.$router.currentRoute.params.id}`).then(res => {
      this.products = res.data
    })
  },

  methods: {
    // Adds item to cart
    addToCart: function (product) {
      shoppingCart.addItemToCart(product)
    }
  }
}
</script>