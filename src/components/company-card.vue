<template>
  <div class="company-card" @click="dialog = true">
    <h3>{{ this.allCities.name }}</h3>
    <p class="ma-0">
      Количество товаров: {{ this.allCities.status.totalProducts }}
    </p>
    <p>В наличии: {{ this.allCities.status.availableProducts }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allCities"])
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
</style>
