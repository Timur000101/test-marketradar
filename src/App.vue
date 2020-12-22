<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn href="https://github.com/Timur000101" target="_blank" text>
        <span class="mr-2">Test</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-home />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "App",
  components: {
    "v-home": Home
  },

  data: () => ({})
};
</script>
