<template>
  <div class="wrapper">
    <Navbar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
html {
  background: $darkGray;
  min-height: 100vh;
}
.wrapper {
  max-width: 1270px;
  margin: 30px auto 0;
  color: $white;

  .content {
    margin-top: 20px;
    padding: 20px;
  }
}
</style>
