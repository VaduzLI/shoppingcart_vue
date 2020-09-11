<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Purchase Form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="form.firstname"
                label="First name"
                name="firstname"
                prepend-icon="mdi-account-circle"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.lastname"
                label="Last name"
                name="lastname"
                prepend-icon="mdi-account-circle"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                id="email"
                label="Email"
                name="email"
                prepend-icon="mdi-at"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.phone"
                id="phone"
                label="Phone"
                name="phone"
                prepend-icon="mdi-phone"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.streetname"
                label="Streetname"
                name="streetname"
                prepend-icon="mdi-home-city"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.housenumber"
                label="Housenumber"
                name="housenumber"
                prepend-icon="mdi-home"
                type="text"
                :rules="ruleShort"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.country"
                label="Country"
                name="country"
                prepend-icon="mdi-flag"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.postcode"
                label="Postcode"
                name="postcode"
                prepend-icon="mdi-email"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-on:click="purchase"
              @click="loader = 'loading'"
              :loading="loading"
              :disabled="loading"
              color="primary"
              >Purchase</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
let shoppingCart = require("../assets/shoppingcart.js");

export default {
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ],
    ruleShort: [value => !!value || "Required."],
    form: {
      email: "",
      phone: "",
      firstname: "",
      lastname: "",
      streetname: "",
      housenumber: "",
      country: "",
      postcode: "",
      loggedIn: localStorage.token || false,
      cart: localStorage.shoppingCart
    },
    loading: false
  }),

  methods: {
    // Post user data and if login and cart items to back-end for processing
    purchase: function() {
      const self = this;
      axios
        .post("http://localhost:5000/api/purchase", {
          email: this.form.email,
          phone: this.form.phone,
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          streetname: this.form.streetname,
          housenumber: this.form.housenumber,
          country: this.form.country,
          postcode: this.form.postcode,
          loggedIn: this.form.loggedIn,
          cart: this.form.cart,
          total: shoppingCart.totalCart()
        })
        // if true send to thankyou
        .then(function(response) {
          console.log(response);
          if (response.data.success) {
            // Clear cart
            shoppingCart.clearCart();
            self.$router.push("/thankyou");
          } else {
            self.loading = false;
          }
        })

        .catch(function() {
          self.loading = false;
        });
    }
  }
};
</script>
