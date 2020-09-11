<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-title>Thank you !</v-card-title>
            <v-card-text>We are working on the order!</v-card-text>
            <v-card-actions>
              <v-btn href="/">Home</v-btn>
              <v-btn v-if="token">My Orders</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  computed: {
    // Check if client has token (VueX)
    token() {
      return this.$store.state.hasToken;
    }
  }
};
</script>
