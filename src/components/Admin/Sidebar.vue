<template>
  <div id="sidebar">
    <div class="sidebar">
      <h3 class="mb-4">
        {{ msg }}
      </h3>
      <ul class="sidebar-ul">
        <li class="sidebar-li">
          <vue-feather type="home" class="me-2 float-end"></vue-feather>
          <span> Dashboard </span>
        </li>
        <li class="sidebar-li">
          <vue-feather type="book" class="me-2 float-end"></vue-feather>
          <span> Modules </span>
        </li>
        <li class="sidebar-li">
          <vue-feather type="users" class="me-2 float-end"></vue-feather>
          <span> Students </span>
          <ul class="sub-sidebar">
            <li class="sub-sidebar-li">
              <vue-feather type="list" class="me-2 float-end"></vue-feather>
              <span> Student List </span>
            </li>
            <li class="sub-sidebar-li">
              <vue-feather type="activity" class="me-2 float-end"></vue-feather>
              <span> Student Progress</span>
            </li>
          </ul>
        </li>
      </ul>

      <div class="text-center d-md-none d-block">
        <button class="btn btn-sidebar" @click="display">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
import VueFeather from "vue-feather";
export default {
  name: "AdminSidebar",
  props: {
    msg: String,
    display: Function,
  },
  components: {
    VueFeather,
  },
};
</script>
<style scoped>
.sidebar {
  position: sticky;
  width: 100%;
  background: rgb(129, 127, 255);
  background: linear-gradient(
    283deg,
    rgba(129, 127, 255, 0.8547794117647058) 0%,
    rgba(11, 66, 215, 1) 99%
  );
  height: 100vh;
  padding: 10px;
}

h3 {
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}

.sidebar-ul {
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
  border-top: 1px solid #6069bd;
}

.sidebar-li {
  margin-left: 0 !important;
  padding: 8px 10px !important;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid #6069bd;
}

.sidebar-li:hover {
  background: #fff;
  color: rgb(25, 23, 133);
  border-radius: 5px;
}

.sub-sidebar {
  list-style: none;
  margin: 10px 0 !important;
  padding: 10px 0 !important;
  background: #fff;
  border-radius: 5px;
  color: #000;
  transition: all 0.3s ease;
}
.sub-sidebar-li {
  padding: 6px 10px;
}

.sub-sidebar-li:hover {
  background: rgb(25, 23, 133);
  color: #fff;
  padding: 6px 10px;
}

.btn-sidebar {
  position: absolute;
  bottom: 30px;
  background: #fff;
  left: 40%;
}

@media screen and (max-width: 600px) {
  .sidebar {
    position: absolute;
    z-index: 999;
  }
}
</style>