<template>
  <div class="detail">
    <loading v-model:active="isLoading" :can-cancel="true" is-full-page />
    <div class="content">
      <img alt="Poster" class="heroImage" :src="movie.Poster" />
      <div class="info">
        <h1>{{ movie.Title }}</h1>
        <h4>
          {{ (movie.Year || "").replace("–", "") }} &nbsp; | &nbsp;
          {{ movie.totalSeasons }} Seasons &nbsp; | &nbsp;
          {{ movie.Rated }}
        </h4>
        <p class="description">
          {{ movie.Plot }}
        </p>
        <div class="actors">
          <label>Starring: </label>
          <span>{{ movie.Actors }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { mapGetters } from "vuex";

import { getMovieById } from "services";

export default {
  name: "Detail",

  components: {
    Loading,
  },

  data() {
    return {
      isLoading: true,
      movie: {},
    };
  },

  computed: {
    ...mapGetters(["movies"]),
  },

  mounted() {
    const movieId = this.$route.params.id;

    getMovieById(movieId)
      .then(({ data }) => {
        this.isLoading = false;
        this.movie = data;
      })
      .catch((e) => {
        console.log("Error fetching movie details: ", e.message);
        this.isLoading = false;
      });

    if (!this.movie) {
      this.$router.push({ name: "Landing" });
    }
  },
};
</script>

<style scoped lang="scss">
.detail {
  .info {
    h4 {
      color: $gray;
      font-size: $fontSizeDefault;
      font-weight: $fontWeightDefault;
      letter-spacing: 0.75px;
      line-height: 18px;
    }
    .description {
      font-size: $fontSizeNormal;
      font-weight: $fontWeightDefault;
      letter-spacing: 0.5px;
      line-height: 22px;
    }
    .actors {
      label {
        color: $gray;
        font-size: $fontSizeMedium;
        font-weight: $fontWeightDefault;
      }
      span {
        font-size: $fontSizeMedium;
        font-weight: $fontWeightDefault;
        line-height: 22px;
      }
    }
  }

  .heroImage {
    max-width: 400px;
  }
}
</style>
