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
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    // Validation rules for inputs
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ],
    form: {
      username: "",
      password: ""
    },
    loading: false,
    snackbar: false,
    text: "Server Error",
    timeout: 3500
  }),

  methods: {
    // Post a login, if true give client a token, if false send error
    login: function() {
      const self = this;
      axios
        .post("http://localhost:5000/api/login", {
          username: self.form.username,
          password: self.form.password
        })
        .then(function(response) {
          if(response.data.error) {
            // show a snackbar with the login error
            self.snackbar = true;
            self.text = `Error: ${response.data.code}, ${response.data.message}`;
            self.form.password = "";
            self.loading = false;
          } else {
            // store token in localstorage and send to home
            self.loading = false;
            localStorage.token = response.data.token;
            self.$store.commit("tokenInLocal");
            self.$router.push("/");
          }

        })
        // if server error, log error
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
