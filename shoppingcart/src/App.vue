<template>
  <v-app>
    <Background />
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Background from "./components/Background";

export default {
  name: "App",
  components: {
    Navbar,
    Background
  },

  data: () => ({
    //
  })
};
</script>
