<template>
  <div id="student_detail">
    <AdminCheck></AdminCheck>
    <div class="container-fluid ps-0">
      <div class="row g-0">
        <div :class="sidebar" class="sidebar-admin">
          <transition name="slide">
            <AdminSidebar
              v-if="sidebarStatus"
              :display="sidebarToggle"
              menu="user"
              submenu="user"
            ></AdminSidebar>
          </transition>
        </div>
        <div :class="header">
          <AdminHeader :display="sidebarToggle"></AdminHeader>
          <div class="container p-md-3 p-2">
            <transition name="fade">
              <div class="row" v-if="showing">
                <div class="col-md-12 mb-3">
                  <div class="card shadow">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-md-3 py-3 text-center">
                          <div class="dot">
                            <div class="dot-text text-uppercase">
                              {{ textLeft(user.first_name) }}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-9">
                          <div class="mb-3 text-md-start text-center">
                            <h4>Student Profile</h4>
                            <hr class="my-0" />
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Full Name
                                </small>
                                {{ formatCapitalize(user.first_name) }}
                                {{ formatCapitalize(user.last_name) }}
                              </div>
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Email
                                </small>
                                {{ user.email }}
                              </div>
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Phone Number
                                </small>
                                {{ user.phone_number }}
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Birthday
                                </small>
                                {{ formatDate(user.birthday) }}
                              </div>
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Address
                                </small>
                                {{ user.address }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="card shadow">
                    <div class="card-body">
                      <h4>Activity</h4>
                      <hr class="my-0 mb-3" />
                      <div class="row align-items-center mb-2">
                        <div class="col-md-8 text-start">
                          <unicon
                            class="pointer"
                            name="sort-amount-down"
                            fill="royalblue"
                            v-if="sort.asc"
                            @click="sortAZ('desc')"
                          />
                          <unicon
                            class="pointer"
                            name="sort-amount-up"
                            fill="royalblue"
                            v-if="sort.desc"
                            @click="sortAZ('asc')"
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div class="row row-cols-1 align-items-md-stretch">
                        <div class="col mb-2" v-for="n in 5" :key="n">
                          <div class="card">
                            <div class="card-body">
                              <div class="row align-items-center">
                                <div class="col-md-2">
                                  <img
                                    src="https://picsum.photos/200"
                                    class="img-activity"
                                  />
                                </div>
                                <div class="col-md-10">
                                  <h5 class="mb-0">Module Name</h5>
                                  <small> Taken on April 23 2021 </small>
                                  <p class="mt-2" style="text-align: justify">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Corrupti suscipit velit
                                    exercitationem officia delectus atque
                                    molestias, asperiores quidem totam
                                    necessitatibus aliquid maiores reiciendis
                                    illum ea laudantium sit, vero vitae ad...
                                  </p>
                                  <div
                                    class="progress mt-4"
                                    style="height: 25px"
                                  >
                                    <div
                                      class="
                                        progress-bar
                                        progress-bar-striped
                                        progress-bar-animated
                                      "
                                      role="progressbar"
                                      style="width: 55%"
                                    >
                                      55%
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <div class="row" v-if="!showing">
              <div class="col-md-12">
                <div class="text-center my-5">
                  <vue-feather
                    type="loader"
                    size="50"
                    animation="spin"
                  ></vue-feather>
                </div>
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
import Swal from "sweetalert2";

export default {
  name: "Student Detail",
  components: {
    AdminCheck,
    AdminHeader,
    AdminSidebar,
    VueFeather,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      sidebar: "col-md-3",
      sidebarStatus: true,
      header: "col-md-9",
      userSession: [],
      token: "",
      userId: "",
      showing: false,
      sort: {
        asc: true,
        desc: false,
      },
      user: [],
    };
  },
  methods: {
    toast(status, title) {
      const Toast = Swal.mixin({
        toast: true,
        width: "32rem",
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: status,
        title: title,
      });
    },
    sidebarToggle() {
      if (this.sidebarStatus == true) {
        this.sidebarStatus = false;
        this.sidebar = "d-none";
        this.header = "col-md-12";
      } else {
        this.sidebarStatus = true;
        this.sidebar = "col-md-3";
        this.header = "col-md-9";
      }
    },
    reload() {
      this.showing = true;
    },
    formatDate(date) {
      return moment(date).format("LL");
    },
    formatCapitalize(text) {
      if (text) {
        text = text.toString();
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
    },
    textLeft(name) {
      return name.substring(0, 1);
    },
    sortAZ(types) {
      if (types == "asc") {
        this.sort.asc = true;
        this.sort.desc = false;
      } else if (types == "desc") {
        this.sort.asc = false;
        this.sort.desc = true;
      }
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
      this.userId = this.$route.params.id;
      axios
        .get(this.api_url + "user/" + this.userId, {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.reload();
            this.user = res.data.data[0];
          } else {
            this.toast("warning", "Sorry, user is not found.");
            this.$router.push({ path: "/admin/user" });
          }
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }
  },
};
</script>
<style scoped>
.img-activity {
  width: 100%;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>