<template>
  <div id="dashboard">
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
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";
import Dashboard from "@/components/Admin/Dashboard/Dashboard";

export default {
  name: "Dashboard",
  components: {
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
      data: [],
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
    this.user = this.$auth.check();
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