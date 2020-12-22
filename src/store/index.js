import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companyInfo: [],
    cities: []
  },
  mutations: {
    getCompanyInfo: (state, companyInfo) => (state.companyInfo = companyInfo)
  },
  actions: {
    async fetchCompanyInfo({ commit }) {
      const res = await axios.get(
        "https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/525e8e2fbee5cd98a80499c400f569e77b4f6ffd/server-response.json"
      );
      commit("getCompanyInfo", res.data);
    }
  },
  getters: {
    allCities(state) {
      // return state.cities;
      return state.companyInfo;
    }
  }
});
