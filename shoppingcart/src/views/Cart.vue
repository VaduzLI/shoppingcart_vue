<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">My Cart</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in cart" :key="item.product.name">
              <v-list-item-content>
                <v-card>
                  <v-card-title>{{ item.product.name }}</v-card-title>
                  <v-list-item>
                    <v-list-item-content
                      >$ {{ item.product.price }}</v-list-item-content
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-btn
                      v-on:click="removeItemFromCartQty(item.product)"
                      class="mr-2"
                      fab
                      small
                      dark
                      >-</v-btn
                    >
                    <span>Qty: {{ item.count }}</span>
                    <v-btn
                      v-on:click="addItemToCartQty(item.product)"
                      class="ml-2"
                      fab
                      small
                      dark
                      >+</v-btn
                    >
                  </v-list-item>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>Total</v-card-title>
            <v-card-text>
              <span>Total: $ {{ fullPrice }}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn>purchase</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
let shoppingCart = require("../assets/shoppingcart.js");

export default {
  data: function() {
    return {
      cart: null,
      fullPrice: 0
    };
  },
  mounted: function() {
    this.cart = shoppingCart.listCart();
    this.fullPrice = shoppingCart.totalCart();
  },

  methods: {
    addItemToCartQty: function(product) {
      shoppingCart.addItemToCart(product);
      this.updateCart();
    },

    removeItemFromCartQty: function(product) {
      shoppingCart.removeItemFromCart(product.name);
      this.updateCart();
    },

    updateCart: function() {
      this.cart = shoppingCart.listCart();
      this.fullPrice = shoppingCart.totalCart();
    }
  }
};
</script>
