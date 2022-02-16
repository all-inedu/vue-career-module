<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-allin shadow navbar-light">
      <div class="container">
        <img
          src="../../assets/home/logo.png"
          class="navbar-brand"
          alt="Career Exploration Module"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/file/CAREER_EXPLORATION_GUIDELINES.pdf"
                  download
                  target="_blank"
                >
                  <vue-feather
                    type="download"
                    size="20"
                    class="float-right"
                  ></vue-feather>
                  Guidebook</a
                >
              </li>
              <li class="nav-item">
                <span v-if="!user" class="nav-link btn-login" @click="login"
                  >Log In</span
                >
                <span v-if="user" class="nav-link btn-login" @click="dashboard">
                  Your Dashboard
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <Auth :show="showLogin" :close="closeLogin"></Auth>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
#navbar {
  font-family: "Ubuntu", sans-serif !important;
}

.navbar-brand {
  width: 14%;
  margin-left: 0px;
}

.btn-login {
  background: #243672;
  border-radius: 30px;
  padding: 5px 20px !important;
  cursor: pointer;
  margin-left: 20px;
  color: #ffffff !important;
  transition: all 0.4s ease;
  font-weight: bold;
}

.btn-login:hover {
  background: #eeaa56;
}

.navbar-allin {
  background: #ffffff;
  color: #fff !important;
}

.navbar-allin a {
  color: #243672 !important;
}

@media screen and (max-width: 600px) {
  .navbar-brand {
    width: 40%;
    margin-left: -20px;
  }

  .btn-login {
    margin-left: 0 !important;
  }
}
</style>

<script>
import Auth from "@/components/Home/Auth/Auth";
// @ is an alias to /src
import VueFeather from "vue-feather";
export default {
  name: "Navbar",
  components: {
    VueFeather,
    Auth,
  },
  data() {
    return {
      showLogin: false,
      user: [],
    };
  },
  methods: {
    login() {
      this.showLogin = true;
    },
    closeLogin() {
      this.showLogin = false;
    },
    dashboard() {
      if (this.user) {
        if (this.user.role_id == 1) {
          this.$router.push({ path: "/user/dashboard" });
        } else {
          this.$router.push({ path: "/admin/dashboard" });
        }
      } else {
        this.$router.push({ path: "/" });
      }
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  created() {
    this.user = this.$auth.user_data();
  },
};
</script>