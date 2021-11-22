<template>
  <div id="admin"></div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "Check Admin",
  data() {
    return {
      user: [],
    };
  },
  method: {
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
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.user = sessionStorage.getItem("user");
      Swal.fire("Oops", "Please log in first !", "warning");
      this.$router.push({ path: "/" });
    }
  },
};
</script>