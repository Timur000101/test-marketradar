<template>
  <div class="home">
    <v-row class="d-flex justify-center">
      <h1>Информация о компаниях</h1>
    </v-row>
    <v-row class="d-flex justify-start mt-5">
      <v-col v-for="(item, index) in 4" :key="index" @click="dialog = true">
        <v-component-card />
      </v-col>
    </v-row>
    <!-- Модальное окно -->
    <v-dialog class="d-flex justify-start" v-model="dialog" max-width="1000px">
      <v-card class="pb-2">
        <v-row class="d-flex justify-end py-1 px-0 ma-0">
          <v-card-title class="py-2">
            <v-btn outlined small fab color="indigo" @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
        </v-row>
        <v-divider></v-divider>
        <v-row class="py-1 px-10 my-2 mx-0">
          <v-col class="py-0">
            <v-card elevation="2">
              <v-card-title class="headline">
                Данные о компании
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="allCities.name"
                    counter="50"
                    label="Название компании"
                    required
                  ></v-text-field>

                  <v-text-field
                    type="number"
                    v-model="allCities.status.totalProducts"
                    label="Общее количество товаров"
                    required
                  ></v-text-field>

                  <v-text-field
                    type="date"
                    v-model="allCities.status.lastCheckDate"
                    label="Последняя дата обновления каталога товаров"
                  ></v-text-field>

                  <v-text-field
                    type="number"
                    v-model="allCities.status.availableProducts"
                    label="Товар в наличии"
                  ></v-text-field>

                  <v-text-field
                    type="number"
                    v-model="allCities.status.nonAvailableProducts"
                    label="Товар без наличия"
                  ></v-text-field>

                  <v-autocomplete
                    ref="city"
                    v-model="city"
                    :rules="[() => !!city || 'Обязательное поле']"
                    :items="allCities.cities"
                    label="Город"
                    placeholder="Выбрать город..."
                    required
                  ></v-autocomplete>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="primary" outlined @click="dialog = false">
            Отменить
          </v-btn>
          <v-btn color="primary" @click="dialog = false">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CompanyCard from "../components/company-card.vue";
export default {
  name: "Home",
  components: {
    "v-component-card": CompanyCard
  },
  data() {
    return {
      company: [],
      dialog: false,
      city: null,
      date: null
    };
  },
  mounted() {
    this.fetchCompanyInfo();
  },
  computed: {
    ...mapGetters(["allCities"])
  },
  methods: {
    ...mapActions(["fetchCompanyInfo"])
  }
};
</script>
