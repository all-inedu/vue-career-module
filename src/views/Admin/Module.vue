<template>
  <div id="dashboard">
    <AdminCheck></AdminCheck>
    <div class="container-fluid ps-0">
      <div class="row g-0">
        <transition name="slide">
          <div
            :class="sidebar"
            class="sidebar-admin sticky-top"
            v-if="sidebarStatus"
          >
            <AdminSidebar :display="sidebarToggle" menu="module"></AdminSidebar>
          </div>
        </transition>
        <div :class="header">
          <AdminHeader :display="sidebarToggle"></AdminHeader>
          <div class="container p-md-3 p-2">
            <!-- Create Module    -->
            <div class="row p-0 mb-2 sticky-top bg-white py-2 mx-0">
              <div class="col-md-9 px-0">
                <router-link to="/admin/module/create">
                  <button class="btn btn-dark mx-0 py-1">
                    <vue-feather type="plus-circle" class="pe-2"></vue-feather>
                    Create a Module
                  </button>
                </router-link>
              </div>
              <div class="col-md-3 mt-md-0 mt-2 px-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="search.keyword"
                  @keypress.enter="searchData"
                />
                <transition name="fade">
                  <vue-feather
                    type="x"
                    class="float-end pointer"
                    stroke="red"
                    style="margin-top: -30px"
                    v-if="search.keyword"
                    @click="resetSearch"
                  ></vue-feather>
                </transition>
              </div>
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
              class="col-md-12 text-center"
              v-if="showing && !moduleList.from"
            >
              <hr />
              Sorry, module name is not found.
            </div>

            <!-- Module List  -->
            <div
              class="row row-cols-md-2 align-items-stretch row-cols-1"
              v-if="showing"
            >
              <div
                class="col-md-6 mb-2 text-md-start text-center ps-3"
                v-if="moduleList.from"
              >
                <small
                  >Showing {{ moduleList.from }} to {{ moduleList.to }} of
                  {{ moduleList.total }} modules</small
                >
              </div>
              <div
                class="col-md-6 mb-2 text-md-end text-center px-md-0"
                v-if="moduleList.from"
              >
                <button
                  class="btn border border-1 btn-sm mx-1 px-3"
                  :class="search.status == null ? 'border-success' : ''"
                  @click="findByStatus(null)"
                >
                  All
                </button>
                <button
                  class="btn border border-1 btn-sm mx-1"
                  :class="search.status == 0 ? 'border-success' : ''"
                  @click="findByStatus(0)"
                  :disabled="status.draft == 0"
                >
                  Draft
                  <div class="d-inline ms-2 text-warning">
                    <strong>{{ status.draft }}</strong>
                  </div>
                </button>
                <button
                  class="btn border border-1 btn-sm mx-1"
                  :class="search.status == 1 ? 'border-success' : ''"
                  @click="findByStatus(1)"
                  :disabled="status.publish == 0"
                >
                  Published
                  <div class="d-inline ms-2 text-success">
                    <strong>{{ status.publish }}</strong>
                  </div>
                </button>
                <button
                  class="btn border border-1 btn-sm mx-1 me-md-3"
                  :class="search.status == 2 ? 'border-success' : ''"
                  @click="findByStatus(2)"
                  :disabled="status.inactive == 0"
                >
                  Inactive
                  <div class="d-inline ms-2 text-danger">
                    <strong>{{ status.inactive }}</strong>
                  </div>
                </button>
              </div>

              <div class="col mb-3" v-for="i in moduleList.data" :key="i">
                <div class="card h-100 card-module" @click="moreDetail(i.id)">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-md-3">
                        <img
                          v-if="i.thumbnail == null"
                          src="https://dummyimage.com/300x300/e6e6e6/262626.gif&text=Thumbnail"
                          class="module-picture"
                        />
                        <img
                          v-if="i.thumbnail != null"
                          :src="'https://api-cm.all-inedu.com/' + i.thumbnail"
                          class="module-picture"
                        />
                      </div>
                      <div class="col-md-9">
                        <h5 class="mb-0 mt-md-0 mt-3">{{ i.module_name }}</h5>
                        <div class="badge badge-info bg-secondary mb-1">
                          {{ i.category_name }}
                        </div>
                        <div class="join-date mb-3">
                          <vue-feather
                            type="file-plus"
                            size="18"
                            class="me-1"
                            stroke="green"
                          ></vue-feather>
                          {{ formatDate(i.created_at) }}
                          <span v-if="i.created_at != i.updated_at">
                            <vue-feather
                              class="ms-2 me-1"
                              type="edit"
                              size="18"
                              stroke="blue"
                            ></vue-feather>
                            {{ formatDate(i.updated_at) }}
                          </span>
                        </div>
                        <div style="height: 100px">
                          <p
                            class="mb-3"
                            style="text-align: justify"
                            v-html="formatText(i.desc, 150, '...')"
                          ></p>
                        </div>
                        <div class="row align-items-center">
                          <div class="col text-start px-0">
                            <button
                              disabled
                              class="btn py-0 px-3"
                              :class="
                                i.status == 0
                                  ? 'btn-warning'
                                  : i.status == 1
                                  ? 'btn-success'
                                  : 'btn-danger'
                              "
                            >
                              <small>
                                {{ formatStatus(i.status) }}
                              </small>
                            </button>
                          </div>
                          <div class="col text-end px-0">
                            <button
                              class="btn module-btn px-3"
                              @click="moreDetail(i.id)"
                            >
                              More
                              <vue-feather
                                class="ms-1"
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
              <div
                class="col-md-12 mt-3"
                v-if="
                  showing &&
                  moduleList.data.length > 0 &&
                  moduleList.last_page > 1
                "
              >
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li
                      class="page-item"
                      v-if="moduleList.current_page != 1"
                      @click="userPage(moduleList.current_page - 1)"
                    >
                      <a class="page-link">Previous</a>
                    </li>
                    <div v-for="n in moduleList.last_page" :key="n">
                      <li
                        v-if="
                          moduleList.current_page - 3 < n &&
                          moduleList.current_page + 3 > n
                        "
                        class="page-item"
                        :class="moduleList.current_page == n ? 'active' : ''"
                      >
                        <a class="page-link" @click="userPage(n)" href="#">{{
                          n
                        }}</a>
                      </li>
                    </div>
                    <li
                      class="page-item"
                      v-if="moduleList.current_page != moduleList.last_page"
                      @click="userPage(moduleList.current_page + 1)"
                    >
                      <a class="page-link">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <!-- <div class="col-md-12 mt-3">
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
              </div> -->
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
      moduleList: [],
      search: {
        keyword: "",
        status: null,
      },
      status: [],
      showing: false,
      moduleStatus: false,
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
    formatText(n, max, suffix) {
      let regex = /(<([^>]+)>)/gi;
      let str = n.replace(regex, "");

      return str.length < max
        ? str
        : `${str.substr(
            0,
            str.substr(0, max - suffix.length).lastIndexOf(" ")
          )}${suffix}`;
    },
    formatStatus(n) {
      if (n == 0) {
        return "Draft";
      } else if (n == 1) {
        return "Published";
      }
    },
    getMouduleData() {
      axios
        .get(this.api_url + "module", {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          this.moduleList = response.data.data.module;
          this.status = {
            draft: response.data.data.drafted_module,
            publish: response.data.data.published_module,
            inactive: response.data.data.inactive_module,
          };
          this.showing = true;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    searchData() {
      this.showing = false;
      axios
        .post(
          this.api_url + "find/module",
          {
            keyword: this.search.keyword,
            status: this.search.status,
          },
          {
            headers: {
              Authorization: "Bearer " + this.userSession.data.token,
            },
          }
        )
        .then((response) => {
          this.showing = true;
          this.moduleList = response.data.data.module;
          this.status = {
            draft: response.data.data.drafted_module,
            publish: response.data.data.published_module,
            inactive: response.data.data.inactive_module,
          };
          this.showing = true;
          // console.log(response.data);
        })
        .catch((error) => {
          this.showing = true;
          console.log(error.response.data);
        });
    },
    findByStatus(i) {
      this.search.status = i;
      this.searchData();
    },
    resetSearch() {
      this.search.keyword = "";
      this.search.status = null;
      this.searchData();
    },
    moreDetail(id) {
      this.$router.push({ path: "/admin/module/create/" + id });
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.userSession = sessionStorage.getItem("user");
    }

    this.getMouduleData();
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

.card-module {
  border: 3px solid rgba(223, 220, 220, 0.933);
  transition: all 0.5s ease;
  cursor: pointer;
}
.card-module:hover {
  border: 3px solid rgb(114, 114, 245);
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

@media only screen and (max-width: 600px) {
  .module-picture {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}
</style>