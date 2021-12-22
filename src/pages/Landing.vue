<template>
  <div class="landing">
    <h2>Unlimited movices, TV shows, and more.</h2>
    <h3>Watch anywhere. Cancel anytime.</h3>
    <div class="movieSearch">
      <v-input
        name="name"
        placeholder="Enter keyword to search movies"
        :value="search"
        @input="handleInputChange"
      />
      <v-button :disabled="isLoading" @click="handleSearch">Search</v-button>
    </div>
    <div v-if="movies.length" class="movieList">
      <MovieCard :key="movie.id" v-for="movie in movies" :movie="movie" />
    </div>
    <h4 v-else class="noMovies">No movie to display</h4>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Button from "components/Button";
import Input from "components/Input";
import MovieCard from "components/MovieCard";

import { getMovieList } from "services";

export default {
  name: "Landing",

  components: {
    "v-button": Button,
    "v-input": Input,
    MovieCard: MovieCard,
  },

  data: () => ({
    isLoading: false,
    search: "",
  }),

  computed: {
    ...mapGetters(["movies"]),
  },

  methods: {
    ...mapActions(["updateMovies"]),

    handleInputChange(e) {
      this.search = e.target.value;
    },

    handleSearch() {
      this.isLoading = true;

      getMovieList(this.search)
        .then(({ data }) => {
          this.isLoading = false;
          if (data.Response === "False") {
            this.updateMovies([]);
          } else {
            this.updateMovies(data.Search);
          }
        })
        .catch((e) => {
          console.log("Error fetching movie list: ", e.message);
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.landing {
  h2 {
    color: $white;
    font-size: $fontSizeExtraLarge;
    margin: 10px auto 20px;
    text-align: center;
  }
  h3 {
    color: $white;
    font-size: $fontSizeLarge;
    text-align: center;
    margin-bottom: 50px;
  }
  .movieSearch {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-gap: 10px;
    margin-bottom: 30px;
  }
  .movieList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .noMovies {
    color: white;
    text-align: center;
  }
}
</style>
