<template>
  <v-content>
    <v-container>
      <v-row style="margin-top: 150px" justify="center">
        <v-col cols="10">
          <v-card>
            <v-card-title class="display-4"
              >In The Cloud<span class="blue--text">.</span></v-card-title
            >
            <v-card-text class="pt-5 title"
              >Solve more problems then ever with Arrow</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-12" justify="center">
        <v-col cols="4">
          <v-card min-height="400">
            <v-list-item class="py-6">
              <v-img
                :src="require('../assets/ubuntu.png')"
                max-height="100"
                contain
              ></v-img>
            </v-list-item>
            <v-card-title>Allways Running</v-card-title>
            <v-card-subtitle>Ubuntu</v-card-subtitle>
            <v-card-text
              >With Ubuntu in your server there will never be a standstill. With
              Ubuntu performance is absolute and also easy to take controll and
              deploy your next project.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card min-height="400">
            <v-list-item class="py-6">
              <v-img
                :src="require('../assets/kubernetes.png')"
                max-height="100"
                contain
              ></v-img>
            </v-list-item>

            <v-card-title>Allways Connected</v-card-title>
            <v-card-subtitle>Kubernetes</v-card-subtitle>
            <v-card-text
              >With Kubernetes your servers will always be running. This
              failproof deployment system will help you get a 100% up time no
              questions asked. Never fear again a server failer in the weekend
              or ever again.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card min-height="400">
            <v-list-item class="py-6">
              <v-img
                :src="require('../assets/nginx.png')"
                max-height="100"
                contain
              ></v-img>
            </v-list-item>
            <v-card-title>Allways Secure</v-card-title>
            <v-card-subtitle>Nginx</v-card-subtitle>
            <v-card-text
              >With Nginx security will never be a compremise. https on every
              website, api and projects. On the internet there is never a "Too
              safe" moment. Protect every deployed and even developing projects
              with encrytion.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-12" justify="center">
        <v-col cols="12">
          <v-card>
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="8"
                ><span class="display-1"
                  >See what Arrow can do for you.</span
                ></v-col
              >
              <v-col align="center" cols="4"
                ><v-btn href="/shop" color="primary">Shop</v-btn></v-col
              >
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
