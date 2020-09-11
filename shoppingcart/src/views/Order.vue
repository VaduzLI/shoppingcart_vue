<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col v-for="(order, index) in orders" :key="order.order_id" cols="7">
          <v-card>
            <v-card-title>Order number: {{ order.order_id }}</v-card-title>
            <v-card-text>
              <v-divider></v-divider>
              <v-list-item v-for="item in list[index]" :key="item.order_items_id">
                <v-list-item-content>
                  <v-list-item-title> Product ID: {{item.product_id}} </v-list-item-title>
                  <v-list-item-title>Count: 2</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Total: ${{ order.order_total }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
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
      orders: [],
      child: [],
      list: []
    };
  },

  mounted: function() {
    const self = this;
    // Get orders from the client based on token
    axios
      .get(`${this.$store.state.currentApiUrl}/api/orders`, {
        headers: {
          Authorization: "Bearer " + localStorage.token
        }
      })
      .then(function(response) {
        // Get the orders and the items of those orders
        self.orders = response.data.orders;
        self.child = response.data.child;

        // Filter and map the orders
        for (let item in self.orders) {
          var filArray = self.child.filter(obj => obj.order_id == self.orders[item].order_id).map( obj => obj );
          self.list.push(filArray)
        }
      })
      .catch(function(err) {
        console.log(err.response);
        console.log(err);
      });
  }
};
</script>
