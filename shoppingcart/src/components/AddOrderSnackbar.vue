<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true">
      Open Dialog
    </v-btn>

    <v-dialog v-model="dialog" max-width="320">
      <v-card>
        <v-card-title class="headline"
          >Continue Shopping?</v-card-title
        >

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Continue Shopping
          </v-btn>

          <v-btn color="red darken-1" text @click="toCart">
            Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },

  mounted() {
      this.$on('open_shopping_dialog', function(){
          console.log("test")
      })
  },

  methods: {
      toCart: function() {
          this.dialog = false;
          this.$router.push("/cart");
      }
  }
};
</script>
