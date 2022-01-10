<template>
  <div id="student_detail">
    <div class="container-fluid ps-0">
      <div class="row g-0">
        <transition name="slide">
          <div :class="sidebar" v-if="sidebarStatus" class="sidebar-admin">
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
            <transition name="fade">
              <div class="row" v-if="showing">
                <div class="col-md-12 mb-3">
                  <div class="card shadow">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-md-3 py-3 text-center">
                          <div class="dot">
                            <div class="dot-text text-uppercase">
                              {{ textLeft(user_data.first_name) }}
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
                                {{ formatCapitalize(user_data.first_name) }}
                                {{ formatCapitalize(user_data.last_name) }}
                              </div>
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Email
                                </small>
                                {{ user_data.email }}
                              </div>
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Phone Number
                                </small>
                                {{ user_data.phone_number }}
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Birthday
                                </small>
                                {{ formatDate(user_data.birthday) }}
                              </div>
                              <div class="mb-2">
                                <small class="d-block text-muted">
                                  Address
                                </small>
                                <div
                                  v-html="
                                    user_data.address != 'null'
                                      ? user_data.address
                                      : '-'
                                  "
                                ></div>
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
                      <!-- <div class="row align-items-center mb-2">
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
                      </div> -->
                      <div class="row">
                        <div class="col-md-6">
                          <div class="card">
                            <div class="card-body">
                              <h6 class="text-center">Ongoing</h6>
                              <hr class="mt-0" />
                              <div v-if="activity.ongoing">
                                <div
                                  class="card card-module mb-3"
                                  v-for="c in activity.ongoing"
                                  :key="c"
                                >
                                  <div class="row g-0">
                                    <div class="col-md-4 bg-ongoing p-3">
                                      <div class="module-name">
                                        {{ c.module_name }}
                                      </div>
                                      <div
                                        class="
                                          border-top border-white
                                          module-category
                                        "
                                      >
                                        <small>
                                          {{ c.category_name }}
                                        </small>
                                      </div>
                                      <div class="module-taken">
                                        {{ formatDate(c.taken_module) }}
                                      </div>
                                    </div>
                                    <div class="col-md-8 p-3">
                                      <div class="module-progress">
                                        <div
                                          class="progress"
                                          style="height: 8px"
                                        >
                                          <div
                                            class="progress-bar"
                                            role="progressbar"
                                            :style="
                                              'width:' + c.percentage + '%'
                                            "
                                            aria-valuemax="100"
                                          ></div>
                                        </div>
                                      </div>
                                      <div class="row module-outline">
                                        <div class="col-6 mb-3 text-start">
                                          {{ c.section_name }}
                                        </div>
                                        <div class="col-6 text-end">
                                          {{ Math.round(c.percentage) }} %
                                        </div>
                                      </div>
                                      <div class="module-part">
                                        {{ c.current_part_name }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="text-center mt-3 text-muted"
                                v-if="activity.ongoing_count == 0"
                              >
                                No module read yet
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="card">
                            <div class="card-body">
                              <h6 class="text-center">Completed</h6>
                              <hr class="mt-0" />
                              <div v-if="activity.completed">
                                <div
                                  class="card card-module mb-3"
                                  v-for="c in activity.completed"
                                  :key="c"
                                >
                                  <div class="row g-0">
                                    <div class="col-md-4 bg-completed p-3">
                                      <div class="module-name">
                                        {{ c.module_name }}
                                      </div>
                                      <div
                                        class="
                                          border-top border-white
                                          module-category
                                        "
                                      >
                                        <small>
                                          {{ c.category_name }}
                                        </small>
                                      </div>
                                      <div class="module-taken">
                                        {{ formatDate(c.taken_date) }}
                                      </div>
                                    </div>
                                    <div class="col-md-8 p-3">
                                      <div class="module-progress">
                                        <div
                                          class="progress"
                                          style="height: 8px"
                                        >
                                          <div
                                            class="progress-bar bg-success"
                                            role="progressbar"
                                            :style="
                                              'width:' + c.percentage + '%'
                                            "
                                            aria-valuemax="100"
                                          ></div>
                                        </div>
                                      </div>
                                      <div class="row module-outline">
                                        <div class="col-8 mb-3 text-start">
                                          {{ c.section_name }}
                                        </div>
                                        <div class="col-4 text-end">
                                          {{ Math.round(c.percentage) }} %
                                        </div>
                                      </div>
                                      <div class="module-part">
                                        {{ c.current_part_name }}
                                      </div>
                                      <div
                                        class="float-md-end text-center mb-2"
                                      >
                                        <button
                                          class="
                                            btn btn-sm btn-warning
                                            rounded-pill
                                            mx-0
                                          "
                                          @click="viewAnswer(c.slug, userId)"
                                        >
                                          <vue-feather
                                            type="clipboard"
                                            class="me-2"
                                            size="20"
                                          ></vue-feather>
                                          View Answer
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="text-center mt-3 text-muted"
                                v-if="activity.completed_count == 0"
                              >
                                No module has been read yet
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
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";
import VueFeather from "vue-feather";
import moment from "moment";

export default {
  name: "Student Detail",
  components: {
    AdminHeader,
    AdminSidebar,
    VueFeather,
  },
  data() {
    return {
      sidebar: "sidebar-left",
      sidebarStatus: true,
      header: "content",
      user: [],
      token: "",
      userId: "",
      showing: false,
      sort: {
        asc: true,
        desc: false,
      },
      activity: {
        ongoing_count: "",
        ongoing: [],
        completed_count: "",
        completed: [],
      },
      user_data: [],
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
    getUserDetail(id) {
      this.$axios
        .get(this.$api_url + "user/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.reload();
            this.user_data = res.data.data[0];
          } else {
            this.$alert.toast("warning", "Sorry, user is not found.");
            this.$router.push({ path: "/admin/user" });
          }
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },
    getActivity(id) {
      this.$axios
        .get(this.$api_url + "user/progress/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.activity.ongoing_count = response.data.onprogress.length;
          this.activity.ongoing = response.data.onprogress;
          this.activity.completed_count = response.data.completed.length;
          this.activity.completed = response.data.completed;
          console.log(this.activity);
        })
        .catch((error) => {
          console.log(error);
        });
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
    viewAnswer(slug, id) {
      this.$router.push({
        path: "/admin/user/" + id + "/answer/" + slug,
      });
    },
  },
  created() {
    this.user = this.$auth.check();

    if (this.user) {
      this.userId = this.$route.params.id;
      this.getUserDetail(this.userId);
      this.getActivity(this.userId);
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

.bg-ongoing {
  background: rgb(204, 122, 14);
  color: #fff;
  border-radius: 10px 0 0 10px;
}

.bg-completed {
  background: #2c265e;
  color: #fff;
  border-radius: 10px 0 0 10px;
}

.card-module {
  border-radius: 10px;
}

.module-name {
  font-size: 1.1em;
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 5px;
}

.module-category {
  font-size: 0.9em;
  padding-top: 5px;
  line-height: 1;
  margin-bottom: 20px;
}

.module-taken {
  position: absolute;
  bottom: 15px;
  font-size: 0.7em;
}

.module-outline {
  margin-top: 5px;
}

.module-part {
  margin-top: -15px;
  margin-bottom: 20px;
  position: relative;
  z-index: 10;
  font-size: 1.1em;
  font-weight: bold;
  color: rgb(53, 53, 53);
}

.module-percentage {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 3em;
  font-weight: bold;
  z-index: 9;
  color: rgba(53, 53, 53, 0.116);
}

@media screen and (max-width: 600px) {
  .module-taken {
    margin-top: 20px;
    position: relative;
  }

  .bg-ongoing,
  .bg-completed {
    border-radius: 10px 10px 0 0;
  }

  .module-percentage {
    top: 10%;
    color: rgba(228, 226, 226, 0.116);
  }
}
</style>