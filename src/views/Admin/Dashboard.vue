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
import AdminCheck from "@/components/Admin/UserCheck";
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";
export default {
  name: "Dashboard",
  components: {
    AdminCheck,
    AdminHeader,
    AdminSidebar,
  },
  data() {
    return {
      sidebar: "col-md-3",
      sidebarStatus: true,
      header: "col-md-9",
      user: [],
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

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}

.slide-enter {
  transform: translate(100%, 0);
}

.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>