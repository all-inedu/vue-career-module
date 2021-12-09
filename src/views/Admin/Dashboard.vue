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
              menu="dashboard"
            ></AdminSidebar>
          </div>
        </transition>
        <div :class="header">
          <AdminHeader :display="sidebarToggle"></AdminHeader>
          <v-dashboard></v-dashboard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminCheck from "@/components/Admin/UserCheck";
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";

import Dashboard from "@/components/Admin/Dashboard/Dashboard";

export default {
  name: "Dashboard",
  components: {
    AdminCheck,
    AdminHeader,
    AdminSidebar,
    "v-dashboard": Dashboard,
  },
  data() {
    return {
      sidebar: "sidebar-left",
      sidebarStatus: true,
      header: "content",
      user: [],
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
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.user = sessionStorage.getItem("user");
    }
  },
};
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>