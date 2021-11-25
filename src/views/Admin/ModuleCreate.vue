<template>
  <div id="module">
    <AdminCheck></AdminCheck>
    <div class="container-fluid ps-0">
      <div class="row g-0">
        <div :class="sidebar" class="sidebar-admin sticky-top">
          <transition name="slide">
            <AdminSidebar
              v-if="sidebarStatus"
              :display="sidebarToggle"
              menu="module"
            ></AdminSidebar>
          </transition>
        </div>
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
            <div class="container" v-if="showing">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <ul class="Container-progessbar">
                    <li :class="section >= 1 ? 'active' : ''">Module</li>
                    <li :class="section >= 2 ? 'active' : ''">Outline</li>
                    <li :class="section >= 3 ? 'active' : ''">Part</li>
                    <li :class="section >= 4 ? 'active' : ''">Element</li>
                    <li :class="section >= 5 ? 'active' : ''">Complete</li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade">
            <v-module
              @check-section="checkSection"
              v-if="showing && section == 1"
            >
            </v-module>
          </transition>

          <transition name="fade">
            <v-outline
              @check-section="checkSection"
              v-if="showing && section == 2"
            ></v-outline>
          </transition>

          <transition name="fade">
            <v-part
              @check-section="checkSection"
              v-if="showing && section == 3"
            ></v-part>
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

import VueFeather from "vue-feather";
import Swal from "sweetalert2";

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
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      userSession: [],
      sidebar: "col-md-3",
      sidebarStatus: true,
      header: "col-md-9",
      showing: false,
      section: 3,
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
        this.header = "col-md-12";
        this.sidebar = "d-none";
      } else {
        this.sidebarStatus = true;
        this.sidebar = "col-md-3";
        this.header = "col-md-9";
      }
    },
    reload() {
      this.showing = true;
    },
    checkSection(data) {
      this.section = data;
    },
  },
  created() {
    setTimeout(() => {
      this.reload();
    }, 1000);
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

ul,
ol {
  padding-left: 0;
}

.Container-progessbar {
  display: flex;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
  counter-reset: step;
}
.Container-progessbar li {
  width: calc(100% / 4);
  text-align: center;
  counter-increment: step;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #747d8c;
}
.Container-progessbar li:before {
  content: counter(step);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid #dedede;
  color: #747d8c;
  font-weight: bold;
  margin-bottom: 5px;
}
.Container-progessbar li:after {
  content: "";
  height: 3px;
  width: 100%;
  background-color: #dedede;
  position: absolute;
  left: -50%;
  top: 23px;
  z-index: -2;
}
.Container-progessbar li:first-child:after {
  display: none;
}
.Container-progessbar li.active:before,
.Container-progessbar li.active::after {
  background-color: #2ed573;
  color: #fff;
  border-color: #2ed573;
}
.Container-progessbar li.false:before,
.Container-progessbar li.false::after {
  background-color: #ea2027;
  color: #fff;
  border-color: #ea2027;
}
</style>