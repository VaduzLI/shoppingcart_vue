<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >Some Product</v-list-item-title
                >
                <v-list-item-subtitle>Category</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img
              src="https://trinamiek.nl/wp-content/uploads/2018/07/placeholder-red.png"
              max-height="200"
            >
            </v-img>
            <v-card-text>
              Some product information
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4" href="/shop/product/123">
                More Info
              </v-btn>

              <v-btn v-on:click="addToCart" text color="deep-purple accent-4">
                Add Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <span>yeet</span>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

let shoppingCart = require('../assets/shoppingcart.js')


export default {
  methods: {
    addToCart: function () {
      shoppingCart.addItemToCart({name: "Item_A", price: 2.20})
      shoppingCart.addItemToCart({name: "Item_B", price: 2.20})
    }
  }
}
</script>