<template>
  <div id="dashboard">
    <div class="container-fluid ps-0">
      <div class="row g-0">
        <div :class="sidebar" class="sidebar-admin sticky-top">
          <transition name="slide">
            <AdminSidebar
              v-if="sidebarStatus"
              :display="sidebarToggle"
              menu="dashboard"
            ></AdminSidebar>
          </transition>
        </div>
        <div :class="header">
          <AdminHeader :display="sidebarToggle"></AdminHeader>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";
export default {
  name: "Dashboard",
  components: {
    AdminHeader,
    AdminSidebar,
  },
  data() {
    return {
      sidebar: "col-md-3",
      sidebarStatus: true,
      header: "col-md-9",
    };
  },
  methods: {
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
  },
  created() {},
};
</script>