<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-allin shadow navbar-light">
      <div class="container">
        <img
          src="../../assets/home/logo-1.png"
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
                  >Guideline Book</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>
                    {{ user.first_name }}
                  </strong>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" @click="logout">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      user: [],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.user = this.$auth.user_data();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
#navbar {
  font-family: "Ubuntu", sans-serif !important;
}

.navbar-brand {
  width: 14%;
  margin-left: -20px;
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
}
</style>