<template>
  <div id="dashboard">
    <AdminCheck></AdminCheck>
    <div class="container-fluid ps-0">
      <div class="row g-0">
        <div :class="sidebar" class="sidebar-admin sticky-top">
          <transition name="slide">
            <AdminSidebar
              v-if="sidebarStatus"
              :display="sidebarToggle"
              menu="module"
              submenu=""
            ></AdminSidebar>
          </transition>
        </div>
        <div :class="header">
          <AdminHeader :display="sidebarToggle"></AdminHeader>
          <div class="container p-md-3 p-2">
            <!-- Create Module    -->
            <div class="row p-0 mb-2 sticky-top bg-white py-2 mx-0">
              <div class="col-md-9">
                <router-link to="/admin/module/create">
                  <button class="btn btn-dark mx-0">
                    <vue-feather type="plus-circle" class="pe-2"></vue-feather>
                    Create a Module
                  </button>
                </router-link>
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </div>

            <!-- Module List  -->
            <div class="row row-cols-md-2 align-items-stretch row-cols-1">
              <div class="col mb-3" v-for="i in 8" :key="i">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-md-3">
                        <img
                          src="https://dummyimage.com/600x600/e6e6e6/262626.gif&text=Module+Picture"
                          class="module-picture"
                        />
                      </div>
                      <div class="col-md-9">
                        <h3 class="mb-0 mt-md-0 mt-3">Module Name</h3>
                        <div class="join-date mb-3">October, 21 2021</div>
                        <p class="mb-3">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Voluptatem porro natus officia voluptatum quam
                          accusantium reiciendis suscipit ..
                        </p>
                        <div class="row align-items-center">
                          <div class="col text-start">
                            <label class="switch">
                              <input
                                type="checkbox"
                                v-model="moduleStatus"
                                @click="statusProcess(i)"
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>
                          <div class="col text-end">
                            <button class="btn module-btn">
                              More
                              <vue-feather
                                class="ps-2"
                                type="arrow-right-circle"
                              ></vue-feather>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 mt-3">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
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
// import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

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
      sidebar: "col-md-3",
      sidebarStatus: true,
      header: "col-md-9",
      userSession: [],
      moduleList: [],
      search: "",
      showing: false,
      moduleStatus: false,
    };
  },
  methods: {
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
    statusProcess(i) {
      console.log(i);
      if (this.moduleStatus == true) {
        Swal.fire({
          title: "Are you sure to incative this module?",
          showCancelButton: true,
          confirmButtonText: "Yes",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            this.moduleStatus = false;
          } else {
            this.moduleStatus = true;
          }
        });
      } else {
        Swal.fire({
          title: "Are you sure to activate this module?",
          showCancelButton: true,
          confirmButtonText: "Yes",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            this.moduleStatus = true;
          } else {
            this.moduleStatus = false;
          }
        });
      }
    },
    reload() {
      this.showing = true;
    },
    formatDate(n) {
      return moment(n).format("LL");
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
    }
  },
};
</script>
<style scoped>
.join-date {
  font-size: 13px;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.module-picture {
  width: 100%;
}

.module-btn {
  border-radius: 20px;
  background: #e59330;
  color: #fff;
  transition: all 0.3s ease;
  padding: 2px 10px !important;
}

.module-btn:hover {
  background: #294593;
  color: #fff;
}

.btn {
  border-radius: 20px;
}
</style>