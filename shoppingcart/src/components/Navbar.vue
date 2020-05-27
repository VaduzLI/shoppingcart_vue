<template>
  <div>
    <v-toolbar dark color="rgb(0, 0, 0, 0.47)">
      <v-btn href="/" class="mr-3" text fab align="center" justify="center"
        ><img :src="require('../assets/kubernetes.png')" height="40"
      /></v-btn>
      <v-toolbar-title>Arrow Cloud Computing</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ma-2" text small href="/login">Login</v-btn>
      <v-btn text small href="/register">Register</v-btn>
      <v-btn fab text><v-icon>mdi-cart-outline</v-icon></v-btn>
    </v-toolbar>
  </div>
</template>
