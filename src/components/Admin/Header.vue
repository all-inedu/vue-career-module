<template>
  <nav>
    <div class="row">
      <div class="col text-start">
        <button class="btn btn-admin btn-primary" @click="display">
          <vue-feather type="menu" stroke="white" class="me-2"></vue-feather>
          Menu
        </button>
      </div>
      <div class="col text-end">
        <div class="dropdown">
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
          >
            <vue-feather type="user" stroke="blue" class="me-2"></vue-feather>
          </button>
          <ul
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            style="z-index: 1200"
          >
            <li>
              <a class="dropdown-item" href="#">
                <vue-feather
                  type="user-check"
                  stroke="blue"
                  class="me-2"
                ></vue-feather>
                Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" @click="logout">
                <vue-feather
                  type="rotate-cw"
                  stroke="blue"
                  class="me-2"
                ></vue-feather>
                Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import VueFeather from "vue-feather";
import "@/assets/css/admin-style.css";

export default {
  name: "AdminHeader",
  props: {
    msg: String,
    display: Function,
  },
  components: {
    VueFeather,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push({ path: "/" });
      this.$alert.toast("success", "You have successfully logged out");
      localStorage.removeItem("user");
    },
  },
  created() {
    document.title = "Admin Dashboard";
  },
};
</script>
<style scoped>
nav {
  padding: 10px 10px;
  background: #fff;
  width: 100%;
  border-bottom: 1px solid #dedede;
}
</style>