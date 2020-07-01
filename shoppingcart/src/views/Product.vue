<template>
  <v-content>
    <v-container>
      <v-row v-if="!isFetching">
        <v-col cols="6">
          <v-card>
            <v-card>
              <v-card-title>{{ product.product_name }}</v-card-title>
              <v-card-subtitle class="pb-0">{{
                product.category_id
              }}</v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text>
                <div>{{ product.product_description }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  v-on:click="
                    addToCart({
                      id: product.product_id,
                      name: product.product_name,
                      price: product.product_price
                    })
                  "
                  >+ Cart</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="https://trinamiek.nl/wp-content/uploads/2018/07/placeholder-red.png"
              max-height="250"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
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
      product: null
    };
  },

  mounted: function() {
    // returns array trash
    axios
      .get(
        `http://localhost:5000/api/products/product/${this.$router.currentRoute.params.id}`
      )
      .then(res => {
        this.product = res.data;
        this.isFetching = false;
      });
  },

  methods: {
    addToCart: function(product) {
      shoppingCart.addItemToCart(product);
    }
  }
};
</script>
