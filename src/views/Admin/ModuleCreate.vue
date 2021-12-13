<template>
  <div id="module">
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
          <transition name="fade">
            <div class="container" v-if="!showing">
              <div class="row">
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
          </transition>
          <!-- Stepper  -->
          <transition name="fade">
            <div class="container sticky-top bg-white" v-if="showing">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <ul class="Container-progessbar">
                    <li
                      :class="
                        section == 1 ? 'active' : progress > 0 ? 'status' : ''
                      "
                    >
                      Module
                    </li>
                    <li
                      :class="
                        section == 2 ? 'active' : progress > 1 ? 'status' : ''
                      "
                    >
                      Outline
                    </li>
                    <li
                      :class="
                        section == 3 ? 'active' : progress > 2 ? 'status' : ''
                      "
                    >
                      Part
                    </li>
                    <li
                      :class="
                        section == 4 ? 'active' : progress > 3 ? 'status' : ''
                      "
                    >
                      Element
                    </li>
                    <li
                      :class="
                        section == 5 ? 'active' : progress > 4 ? 'status' : ''
                      "
                    >
                      Complete
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade" v-if="showing && module.id">
            <div class="container px-md-3 px-2 mt-2">
              <div class="text-end">
                <button
                  v-if="progress >= 4"
                  @click="preview()"
                  class="btn btn-admin bg-white mx-2 border border-success"
                >
                  <vue-feather type="clipboard" class="me-2"></vue-feather>
                  Preview
                </button>
                <button
                  v-if="module.status != 0"
                  class="
                    btn btn-admin
                    bg-white
                    mx-0
                    border border-primary
                    dropdown-toggle
                  "
                  data-bs-toggle="dropdown"
                >
                  <vue-feather type="settings" class="me-2"></vue-feather>
                </button>
                <ul class="dropdown-menu">
                  <li v-if="module.id && module.status == 1">
                    <span
                      class="dropdown-item pointer"
                      @click="changeActivate(module.id, 2)"
                    >
                      <vue-feather class="pe-2" type="eye-off"></vue-feather>
                      Deactivate
                    </span>
                  </li>
                  <li
                    v-if="
                      (module.id && module.status == 2) ||
                      (module.id && module.status == 3)
                    "
                  >
                    <span
                      class="dropdown-item pointer"
                      @click="changeActivate(module.id, 1)"
                    >
                      <vue-feather class="pe-2" type="eye"></vue-feather>
                      Activate
                    </span>
                  </li>
                  <li v-if="module.id && module.status == 1">
                    <span
                      class="dropdown-item pointer"
                      @click="changeActivate(module.id, 3)"
                    >
                      <vue-feather class="pe-2" type="lock"></vue-feather>
                      Lock
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </transition>

          <transition name="fade">
            <v-module
              @check-section="checkSection"
              @check-progress="checkProgress"
              v-if="showing && section == 1"
            >
            </v-module>
          </transition>

          <transition name="fade">
            <v-outline
              @check-section="checkSection"
              @check-progress="checkProgress"
              v-if="showing && section == 2"
            ></v-outline>
          </transition>

          <transition name="fade">
            <v-part
              @check-section="checkSection"
              @check-progress="checkProgress"
              v-if="showing && section == 3"
            ></v-part>
          </transition>

          <transition name="fade">
            <v-element
              @check-section="checkSection"
              @check-progress="checkProgress"
              v-if="showing && section == 4"
            ></v-element>
          </transition>

          <transition name="fade">
            <v-preview
              @check-status="checkStatus"
              @check-section="checkSection"
              @check-progress="checkProgress"
              v-if="showing && section == 5"
            ></v-preview>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminCheck from "@/components/Admin/UserCheck";
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";

import Module from "@/components/Admin/Module/Module";
import Outline from "@/components/Admin/Module/Outline";
import Part from "@/components/Admin/Module/Part";
import Element from "@/components/Admin/Module/Element";
import Preview from "@/components/Admin/Module/Preview";

import axios from "axios";
import VueFeather from "vue-feather";
import Swal from "sweetalert2";
import qs from "qs";

import "@/assets/css/stepper.css";

export default {
  name: "Module Create",
  components: {
    AdminCheck,
    AdminHeader,
    AdminSidebar,
    VueFeather,
    "v-module": Module,
    "v-outline": Outline,
    "v-part": Part,
    "v-element": Element,
    "v-preview": Preview,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      userSession: [],
      sidebar: "sidebar-left",
      sidebarStatus: true,
      header: "content",
      showing: false,
      module: [],
      progress: "",
      section: 1,
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
    checkSection(data) {
      this.section = data;
    },
    checkProgress(data) {
      this.progress = data;
    },
    checkStatus(data) {
      this.module.status = data;
    },
    getModuleData(id) {
      axios
        .get(this.api_url + "module/" + id, {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          // console.log(response.data.data);
          this.module = response.data.data[0];
          this.progress = response.data.data[0].progress;
        })
        .catch(() => {
          this.toast("warning", "Module id is not found");
          this.$router.push({ path: "/admin/module" });
        });
    },
    changeActivate(id, s) {
      let status = qs.stringify({ status: s });
      let title = "";
      if (s == 1) {
        title = "Are you sure to activate this module?";
      } else if (s == 2) {
        title = "Are you sure to deactivate this module?";
      } else {
        title = "Are you sure to lock this module?";
      }

      Swal.fire({
        title: "<h5>" + title + "</h5>",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          axios
            .put(this.api_url + "module/" + id, status, {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=utf-8",
                Authorization: "Bearer " + this.userSession.data.token,
              },
            })
            .then((response) => {
              // console.log(response.data);
              Swal.close();
              this.toast("success", response.data.message);
              this.getModuleData(id);
            })
            .catch((error) => {
              Swal.close();
              console.log(error.response);
            });
        }
      });
    },
    preview() {
      this.section = 5;
    },
  },
  created() {
    setTimeout(() => {
      this.reload();
    }, 1000);

    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.userSession = sessionStorage.getItem("user");
    }

    if (this.$route.params.module_id) {
      this.getModuleData(this.$route.params.module_id);
    }
  },
};
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>