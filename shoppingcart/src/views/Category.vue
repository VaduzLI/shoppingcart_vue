<template>
  <v-content>
    <v-container>
      <v-row v-if="!isFetching" class="mt-12">
        <v-col
          v-for="category in categories"
          :key="category.category_id"
          cols="12"
        >
          <v-card justify="center">
            <v-row align="center" justify="center" min-height="260">
              <v-col align="center" cols="6">
                <div
                  style="height: 200px; width: 350px; background-color: gray"
                ></div>
              </v-col>
              <v-col cols="6">
                <v-row align="center" justify="center">
                  <v-col cols="12">
                    <h1 class="text-center display-1">
                      {{ category.category_name }}
                    </h1>
                  </v-col>
                  <v-col cols="8">
                    <p class="subtitle-2">
                      {{ category.category_description }}
                    </p>
                  </v-col>
                  <v-col class="text-center" cols="12">
                    <v-btn
                      :href="'/shop/category/' + category.category_id"
                      align="center"
                      color="primary"
                      >Select Options</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      isFetching: true,
      categories: null
    };
  },
  // Get all product categories from the back-end
  mounted: function() {
    axios.get(`${this.$store.state.currentApiUrl}/api/category`).then(res => {
      this.categories = res.data;
      this.isFetching = false;
    });
  }
};
</script>
