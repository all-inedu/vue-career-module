<template>
  <div id="dashboard">
    <AdminCheck></AdminCheck>
    <div class="container-fluid ps-0">
      <div class="row g-0">
        <transition name="slide">
          <div
            :class="sidebar"
            v-if="sidebarStatus"
            class="sidebar-admin sticky-top"
          >
            <AdminSidebar
              :display="sidebarToggle"
              menu="user"
              submenu="user"
            ></AdminSidebar>
          </div>
        </transition>
        <div :class="header">
          <AdminHeader :display="sidebarToggle"></AdminHeader>
          <div class="container p-md-3 p-2">
            <div class="row">
              <div class="col-md-12"></div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-5">
                    <div class="input-group">
                      <select class="form-select w-25" v-model="filter">
                        <option value="">Filter</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                      </select>
                      <input
                        v-model="search"
                        @keyup.enter="searchProcess"
                        type="text"
                        class="form-control w-75"
                        aria-label="Text input with dropdown button"
                      />
                    </div>
                  </div>
                  <div class="col-md-7 text-end">
                    <vue-feather
                      @click="refreshProcess"
                      type="refresh-cw"
                      class="me-3 pointer"
                    ></vue-feather>
                    <div class="form-check d-inline-block form-switch">
                      <label class="form-check-label">Is verified?</label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        v-model="is_verify"
                        @change="verifyProcess"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-2" />
              </div>

              <div class="col-md-12 mt-1">
                <transition name="fade">
                  <div class="row row-cols-md-3" v-if="showing">
                    <div class="col-md-12" v-if="userList.from">
                      <small
                        >Showing {{ userList.from }} to {{ userList.to }} of
                        {{ userList.total }} modules</small
                      >
                    </div>
                    <div
                      class="col-12 mb-md-4 mb-2"
                      v-for="item in userList.data"
                      :key="item.id"
                    >
                      <div
                        class="card h-100 card-list"
                        @click="goToDetail(item.id)"
                      >
                        <div class="card-body">
                          <div class="row align-items-center">
                            <div class="col-3 text-center">
                              <vue-feather type="user" size="50"></vue-feather>
                            </div>
                            <div class="col-9">
                              <h6 class="my-0 mb-2">
                                <b class="text-uppercase">
                                  {{ item.first_name }} {{ item.last_name }}
                                  <vue-feather
                                    v-if="item.is_verified == 1"
                                    type="check"
                                    stroke="green"
                                  ></vue-feather>
                                </b>
                              </h6>
                              <p class="card-label text-primary">
                                {{ item.email }}
                              </p>
                              <p class="card-label">
                                {{ item.phone_number }} |
                                {{ formatDate(item.birthday) }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer">
                          <div class="float-start">
                            <label class="join-date">
                              <vue-feather
                                type="calendar"
                                size="20"
                                class="ms-2"
                              ></vue-feather>
                              Join date on {{ formatDate(item.created_at) }}
                            </label>
                          </div>
                          <div class="float-end">
                            <vue-feather
                              type="arrow-right"
                              size="20"
                              class="ms-2"
                            ></vue-feather>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>

              <div
                class="col-md-12 mt-3"
                v-if="
                  showing && userList.data.length > 0 && userList.last_page > 1
                "
              >
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li
                      class="page-item"
                      v-if="userList.current_page != 1"
                      @click="userPage(userList.current_page - 1)"
                    >
                      <a class="page-link">Previous</a>
                    </li>
                    <div v-for="n in userList.last_page" :key="n">
                      <li
                        v-if="
                          userList.current_page - 3 < n &&
                          userList.current_page + 3 > n
                        "
                        class="page-item"
                        :class="userList.current_page == n ? 'active' : ''"
                      >
                        <a class="page-link" @click="userPage(n)" href="#">{{
                          n
                        }}</a>
                      </li>
                    </div>
                    <li
                      class="page-item"
                      v-if="userList.current_page != userList.last_page"
                      @click="userPage(userList.current_page + 1)"
                    >
                      <a class="page-link">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="col-md-12" v-if="!showing">
                <div class="text-center my-5">
                  <vue-feather
                    type="loader"
                    size="50"
                    animation="spin"
                  ></vue-feather>
                </div>
              </div>

              <div
                class="col-md-12 my-5 text-center"
                v-if="showing && !userList.data.length"
              >
                Sorry, username is not found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminCheck from "@/components/Admin/UserCheck";
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";
import VueFeather from "vue-feather";
import axios from "axios";
import moment from "moment";

export default {
  name: "Student",
  components: {
    AdminCheck,
    AdminHeader,
    AdminSidebar,
    VueFeather,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      sidebar: "sidebar-left",
      sidebarStatus: true,
      header: "content",
      userSession: [],
      userList: [],
      filter: "",
      search: "",
      is_verify: false,
      showing: false,
      category: "",
    };
  },
  methods: {
    sidebarToggle() {
      if (this.sidebarStatus == true) {
        this.sidebarStatus = false;
        this.header = "full-content";
        this.sidebar = "d-none";
      } else {
        this.sidebarStatus = true;
        this.sidebar = "sidebar-left sidebar-mobile";
        this.header = "content";
      }
    },
    reload() {
      this.showing = true;
    },
    userPage(n) {
      this.showing = false;
      if (this.category == "search") {
        if (this.filter == "") {
          this.filter = "name";
        }
        axios
          .post(
            this.api_url + "filter/student?page=" + n,
            {
              category: this.filter,
              value: this.search,
            },
            {
              headers: {
                Authorization: "Bearer " + this.userSession.data.token,
              },
            }
          )
          .then((res) => {
            if (res.data.success) {
              this.reload();
              this.userList = res.data.data;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .get(this.api_url + "user?page=" + n, {
            headers: {
              Authorization: "Bearer " + this.userSession.data.token,
            },
          })
          .then((res) => {
            this.reload();
            this.userList = res.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    formatDate(n) {
      return moment(n).format("LL");
    },
    verifyProcess() {
      this.showing = false;
      axios
        .post(
          this.api_url + "filter/student",
          {
            category: "is_verified",
            value: this.is_verify,
          },
          {
            headers: {
              Authorization: "Bearer " + this.userSession.data.token,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            this.reload();
            this.userList = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchProcess() {
      this.showing = false;
      this.category = "search";
      if (this.filter == "") {
        this.filter = "name";
      }
      axios
        .post(
          this.api_url + "filter/student",
          {
            category: this.filter,
            value: this.search,
          },
          {
            headers: {
              Authorization: "Bearer " + this.userSession.data.token,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            this.reload();
            this.userList = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    refreshProcess() {
      this.search = "";
      this.filter = "";
      this.showing = false;
      axios
        .get(this.api_url + "user", {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.reload();
            this.userList = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToDetail(id) {
      this.$router.push({ path: "/admin/user/" + id });
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));

      axios
        .get(this.api_url + "user", {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.reload();
            this.userList = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
<style scoped>
.join-date {
  font-size: 12px;
}

.card-label {
  font-size: 14px;
  margin: 0 !important;
  line-height: 1.5;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.card-list {
  transition: all 0.5s ease;
  border: 2px solid rgb(243, 243, 243);
  cursor: pointer;
}

.card-list:hover {
  border: 2px solid rgb(38, 25, 114);
}
</style>