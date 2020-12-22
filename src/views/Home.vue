<template>
  <div class="home">
    <v-row justify="center">
      <v-btn color="primary" class="ma-2" dark @click="dialog = true">
        Open Dialog
      </v-btn>
    </v-row>
    <v-dialog
      class="d-flex justify-start pa-lg-15"
      v-model="dialog"
      max-width="1000px"
    >
      <v-card>
        <v-row class="py-5 px-10 ma-0">
          <v-col>
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
                    counter="50"
                    label="Общее количество товаров"
                    required
                  ></v-text-field>
                  <v-autocomplete
                    ref="city"
                    v-model="city"
                    :rules="[() => !!city || 'This field is required']"
                    :items="allCities.cities"
                    label="Город"
                    placeholder="Выбрать город..."
                    required
                  ></v-autocomplete>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col></v-col>
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
export default {
  name: "Home",
  components: {},
  data() {
    return {
      company: [],
      dialog: false,
      city: null
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
