<template>
  <div class="movieCard" @click="handleClick">
    <img alt="Logo" :src="movie.Poster" />
    <h3>
      <b>{{ movie.Title }}</b>
      <span>{{ (movie.Year || "").replace("–", "") }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "MovieCard",

  props: ["movie"],

  methods: {
    handleClick() {
      this.$router.push({ name: "Detail", params: { id: this.movie.imdbID } });
    },
  },
};
</script>

<style scoped lang="scss">
.movieCard {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 200px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }

  img {
    width: 100%;
    height: 275px;
    object-fit: cover;
  }
  h3 {
    color: $white;
    font-size: $fontSizeMedium;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    b {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      font-size: $fontSizeSmall;
      line-height: 18px;
      font-weight: 400;
      color: $lightGray;
    }
  }
}
</style>
