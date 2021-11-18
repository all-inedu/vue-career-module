<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <img src="../../assets/home/logo-1.png" class="navbar-brand" />
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
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/file/CAREER_EXPLORATION_GUIDELINES.pdf"
                  download
                  target="_blank"
                  >Guideline Book</a
                >
              </li>
              <li class="nav-item">
                <a v-if="!user" class="nav-link btn-login" @click="login"
                  >Log In</a
                >
                <router-link
                  v-if="user"
                  class="nav-link btn-login"
                  to="/student"
                >
                  Your Dashboard
                </router-link>
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
.navbar-brand {
  width: 14%;
  margin-left: -20px;
}

.btn-login {
  background: #243876;
  border-radius: 30px;
  padding: 5px 20px !important;
  cursor: pointer;
  color: #fff !important;
  transition: all 0.4s ease;
}

.btn-login:hover {
  background: #eeaa56;
}

@media screen and (max-width: 600px) {
  .navbar-brand {
    width: 40%;
    margin-left: -20px;
  }
}
</style>

<script>
import Auth from "@/components/Home/Auth/Auth";
// @ is an alias to /src

export default {
  name: "Navbar",
  components: {
    Auth,
  },
  data() {
    return {
      showLogin: false,
      user: [],
    };
  },
  methods: {
    checkUser() {
      if (sessionStorage.getItem("user") != null) {
        this.showLogin = false;
        this.user = JSON.parse(sessionStorage.getItem("user"));
      } else {
        this.user = sessionStorage.getItem("user");
      }
    },
    login() {
      this.showLogin = true;
    },
    closeLogin() {
      this.showLogin = false;
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  created() {
    this.checkUser();
  },
};
</script>