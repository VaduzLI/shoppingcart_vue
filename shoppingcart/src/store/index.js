import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  state: {
    currentApiUrl: "http://localhost:5000",
    hasToken: localStorage.token
  },
  mutations: {
    tokenInLocal: state => (state.hasToken = true),
    tokenNotInLocal: state => (state.hasToken = false)
  },
  actions: {},
  modules: {}
});
