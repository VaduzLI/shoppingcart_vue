<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card v-if="!isFetching">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">My Cart</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-title v-if="cart.length == 0">Cart is empty</v-card-title>
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
              <v-btn
                v-if="!token"
                :disabled="!cartHasItems"
                href="/cart/purchase"
                >Purchase(no Auth)</v-btn
              >
              <v-btn v-else v-on:click="Purchase" :disabled="!cartHasItems"
                >Purchase(Auth)</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-snackbar v-model="snackbar" :timeout="timeout">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
let shoppingCart = require("../assets/shoppingcart.js");

export default {
  data: function() {
    return {
      isFetching: true,
      cart: null,
      fullPrice: 0,
      cartHasItems: false,
      snackbar: false,
      text: "Server Error",
      timeout: 3500
    };
  },
  mounted: function() {
    // Get cart and prices
    this.cart = shoppingCart.listCart();
    this.fullPrice = shoppingCart.totalCart();
    // stop loading animation
    this.isFetching = false;
  },

  watch: {
    // Watch if item in cart is 0, if so remove it
    cart: function() {
      if (!this.cart.length == 0 || !this.cart == null) {
        this.cartHasItems = true;
      } else {
        this.cartHasItems = false;
      }
    }
  },

  computed: {
    // Check if client has token (VueX)
    token() {
      return this.$store.state.hasToken;
    }
  },

  methods: {
    // Add item to cart by press '+' button
    addItemToCartQty: function(product) {
      shoppingCart.addItemToCart(product);
      this.updateCart();
    },
    // Remove item from cart by press '-' button
    removeItemFromCartQty: function(product) {
      shoppingCart.removeItemFromCart(product.name);
      this.updateCart();
    },
    // Update cart with changes in items and update prices
    updateCart: function() {
      this.cart = shoppingCart.listCart();
      this.fullPrice = shoppingCart.totalCart();
    },
    // Post token and if login and cart and total for backend processing
    Purchase: function() {
      const self = this;
      axios
        .post(
          `${this.$store.state.currentApiUrl}/api/purchase`,
          {
            token: localStorage.token,
            loggedIn: this.token,
            cart: localStorage.shoppingCart,
            total: shoppingCart.totalCart()
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.token
            }
          }
        )
        .then(function(response) {
          console.log(response);
          shoppingCart.clearCart();
          self.$router.push("/thankyou");
        })
        .catch(function(err) {
          self.snackbar = true;
          self.text = `Error: ${err.response.data.errorCode}, ${err.response.data.errorMessage}`;
        });
    }
  }
};
</script>
