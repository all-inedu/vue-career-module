<template>
  <div id="userDashboard">
    <v-navbar></v-navbar>
    <div class="container mt-5" v-if="!show">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <vue-feather type="loader" animation="spin" size="50"></vue-feather>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="mt-4" v-if="show">
        <v-profile></v-profile>
        <v-footer></v-footer>
      </div>
    </transition>
  </div>
</template>
<script>
import hNavbar from "@/components/User/Navbar";
import hProfile from "@/components/User/Profile";
import hFooter from "@/components/Home/Footer";

import VueFeather from "vue-feather";
export default {
  name: "User Dahsboard",
  components: {
    "v-navbar": hNavbar,
    "v-profile": hProfile,
    "v-footer": hFooter,
    VueFeather,
  },
  data() {
    return {
      user: [],
      show: false,
    };
  },
  methods: {},
  created() {
    this.user = this.$auth.check();
    setInterval(() => {
      this.user = this.$auth.check();
    }, 1000 * 60 * 60);

    setTimeout(() => {
      this.show = true;
    }, 500);

    document.title = "User Dashboard";
  },
};
</script>
<style>
#userDashboard {
  margin: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>