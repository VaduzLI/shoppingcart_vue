<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn :href="'/register'" icon large v-on="on">
                  <v-icon>mdi-account-key</v-icon>
                </v-btn>
              </template>
              <span>Login with existing account</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="First name"
                name="firstname"
                prepend-icon="mdi-account-circle"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                label="Last name"
                name="lastname"
                prepend-icon="mdi-account-circle"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                id="email"
                label="Email"
                name="email"
                prepend-icon="mdi-at"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                id="phone"
                label="Phone"
                name="phone"
                prepend-icon="mdi-phone"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field
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
            <v-btn color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ]
  })
};
</script>
