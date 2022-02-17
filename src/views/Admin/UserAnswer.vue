<template>
  <div id="answer">
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
          <transition name="fade">
            <div class="container p-md-3 p-2" v-if="show">
              <div class="row mx-2">
                <div class="card shadow">
                  <div class="card-body">
                    <span
                      class="btn btn-sm btn-warning rounded-pill mb-4 mx-0 px-3"
                      @click="backToList($route.params.id)"
                    >
                      <vue-feather
                        type="arrow-left"
                        class="me-2 pointer text-dark"
                        size="20"
                      >
                      </vue-feather>
                      Back to List
                    </span>
                    <div class="row border-bottom mb-3">
                      <div class="col-md-6">
                        <div class="mb-2">
                          <small class="text-muted d-block"> Full Name </small>
                          {{ user_data.first_name + " " + user_data.last_name }}
                        </div>
                      </div>
                      <div class="col-md-6 text-md-end">
                        <div class="mb-2">
                          <small class="text-muted d-block">
                            Module Name
                          </small>
                          {{ module_data.module_name }}
                        </div>
                      </div>
                    </div>
                    <button
                      class="btn-warning float-end btn-sm rounded-pill"
                      @click="download"
                    >
                      Download
                    </button>
                    <br />
                    <br />
                    <div class="table-responsive">
                      <table class="table table-bordered align-middle">
                        <thead>
                          <tr class="text-center">
                            <th class="border-end" width="1%">No</th>
                            <th width="30%">Part Name</th>
                            <th>Question / Answer</th>
                          </tr>
                        </thead>
                        <tbody v-if="outline_length == 0">
                          <tr class="text-center">
                            <td colspan="3" class="py-4">
                              This module has no questions
                            </td>
                          </tr>
                        </tbody>
                        <tbody
                          v-for="outline in module_data.outlines"
                          :key="outline"
                        >
                          <tr class="text-center bg-secondary text-white">
                            <td colspan="3">
                              <strong>
                                {{ outline.name }}
                              </strong>
                            </td>
                          </tr>
                          <tr
                            class="text-center"
                            v-for="(part, index) in outline.parts"
                            :key="index"
                          >
                            <td class="border">{{ index + 1 }}</td>
                            <td class="border">{{ part.title }}</td>
                            <td class="border">
                              <div class="table-responsive">
                                <table class="table border mb-0">
                                  <tr class="bg-light">
                                    <th class="border py-2">Question</th>
                                    <th class="border" width="40%">Answer</th>
                                  </tr>
                                  <tr
                                    class="border-1"
                                    v-for="element in part.elements"
                                    :key="element"
                                  >
                                    <td
                                      class="border text-start"
                                      v-html="element.question"
                                    ></td>
                                    <td class="border">
                                      <div
                                        v-if="
                                          element.category_element == 'blank'
                                        "
                                      >
                                        {{ element.answersdetails[0].answer }}
                                      </div>
                                      <div
                                        v-if="
                                          element.category_element == 'multiple'
                                        "
                                      >
                                        {{
                                          element.answersdetails[0]
                                            .answer_from_multiple
                                        }}
                                      </div>
                                      <div
                                        v-if="
                                          element.category_element == 'file'
                                        "
                                      >
                                        <a
                                          :href="
                                            $base_url +
                                            element.answersdetails[0].file_path
                                          "
                                          class="
                                            btn btn-primary btn-sm
                                            rounded-pill
                                          "
                                          download
                                        >
                                          Worksheet
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="container mt-5" v-if="!show">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <vue-feather type="loader" animation="spin" size="50"></vue-feather>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";
import VueFeather from "vue-feather";

export default {
  name: "answer",
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
      show: false,
      user: [],
      user_data: [],
      module_data: [],
      outline_length: "",
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
    backToList(id) {
      this.$router.push({ path: "/admin/user/" + id });
    },
    getUserData(id) {
      this.$axios
        .get(this.$api_url + "user/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.user_data = res.data.data[0];
          } else {
            this.$alert.toast("warning", "Sorry, user is not found.");
            this.$router.push({ path: "/admin/user" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getModuleData(slug, id) {
      this.$axios
        .get(this.$api_url + "module/" + slug + "/answer/user/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.module_data = response.data;
          this.outline_length = this.module_data.outlines.length;
          // console.log(this.module_data);
        })
        .catch((error) => {
          console.log(error);
          this.$router.push({ path: "/admin/user" });
          this.$alert.toast("error", "The module is not found");
        });
    },
    download() {
      window.open(
        "https://api-cm.all-inedu.com/api/v1/module/" +
          this.$route.params.slug +
          "/answer/user/" +
          this.user_data.id +
          "/download/",
        "_blank"
      );
    },
  },
  created() {
    document.title = "Module Answer";
    this.user = this.$auth.check();

    if (this.$route.params.slug && this.$route.params.id) {
      this.getModuleData(this.$route.params.slug, this.$route.params.id);
      this.getUserData(this.$route.params.id);
    }

    setTimeout(() => {
      this.show = true;
    }, 500);
  },
};
</script>
<style>
.answer {
  min-height: 47vh;
}

p {
  margin-bottom: 0px;
}
</style>