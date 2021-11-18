<template>
  <div id="banner">
    <div class="container position-relative">
      <h1
        class="title-banner animate__animated animate__fadeIn animate__delay-1s"
      >
        Welcome To <br />
        Career Exploration <br />
        Module
      </h1>
      <img
        src="../../assets/home/cover.webp"
        class="shadow banner animate__animated animate__fadeIn"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Banner",
  components: {},
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
#banner {
  margin-top: 2%;
}
.title-banner {
  position: relative;
  z-index: 5;
  text-align: right;
  right: 5%;
  bottom: 5%;
  font-weight: 800;
  font-size: 4em;
  position: absolute;
  color: #fff;
  text-shadow: 2px 2px 5px rgb(31, 30, 30);
}
.banner {
  width: 100%;
  height: 30;
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
  .title-banner {
    font-size: 1.3em;
  }
}
</style>