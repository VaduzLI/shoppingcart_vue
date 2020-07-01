<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn :href="'/register'" icon large v-on="on">
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <span>Create new user</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="form.username"
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-on:click="login"
              @click="loader = 'loading'"
              :loading="loading"
              :disabled="loading"
              color="primary"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ],
    form: {
      username: "",
      password: ""
    },
    loading: false
  }),

  methods: {
    login: function() {
      const self = this;
      axios
        .post("http://localhost:5000/api/login", {
          username: self.form.username,
          password: self.form.password
        })
        .then(function(response) {
          self.loading = false;
          localStorage.token = response.data.token;
          self.$store.commit("tokenInLocal");
          self.$router.push("/");
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
