<template>
  <div class="navbar">
    <img alt="Logo" src="../assets/img/logo.svg" @click="handleLogoClick" />
  </div>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    handleLogoClick() {
      this.$router.push({ name: "Landing" });
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  margin: 0 40px;
  
  img {
    cursor: pointer;
    width: 100px;
  }
}
</style>
