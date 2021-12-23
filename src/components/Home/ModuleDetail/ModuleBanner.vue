<template>
  <div id="banner">
    <div class="container position-relative">
      <div class="return">
        <vue-feather
          type="arrow-left"
          size="30"
          class="pointer text-white"
          @click="backToDashboard"
        ></vue-feather>
      </div>
      <h1 class="title-banner">{{ data.module_name }}</h1>
      <div class="category-banner">{{ data.category_name }}</div>
      <img src="~@/assets/home/banner_module.webp" class="shadow banner" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueFeather from "vue-feather";

export default {
  name: "Module_Banner",
  props: {
    data: Array,
  },
  components: {
    VueFeather,
  },
  data() {
    return {};
  },
  methods: {
    backToDashboard() {
      this.$router.push({
        path: "/user/dashboard",
      });
    },
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
  width: 60%;
  right: 5%;
  bottom: 18%;
  font-weight: 800;
  font-size: 3em;
  position: absolute;
  color: rgb(58, 58, 58);
  text-shadow: 2px 2px 5px rgb(219, 218, 218);
}
.banner {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

.return {
  position: absolute;
  top: 10px;
  left: 30px;
  color: white;
  z-index: 5;
  cursor: pointer;
}

.category-banner {
  position: absolute;
  z-index: 5;
  right: 5%;
  bottom: 5%;
  background: #243876;
  border-radius: 30px;
  padding: 3px 20px;
  color: #fff;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .title-banner {
    font-size: 1.6em;
    width: 60%;
  }

  .return {
    color: #000;
  }
}
</style>