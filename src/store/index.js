import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      movies: [],
    };
  },

  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    },
  },

  actions: {
    updateMovies(context, payload) {
      context.commit("setMovies", payload);
    },
  },

  getters: {
    movies({ movies }) {
      return movies;
    },
  },

  plugins: [createPersistedState()],
});

export default store;
