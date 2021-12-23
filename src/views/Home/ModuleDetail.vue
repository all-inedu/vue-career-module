<template>
  <div id="module_detail">
    <v-navbar></v-navbar>
    <v-banner :data="module_data"></v-banner>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="my-0 mt-2" v-html="module_data.desc"></div>
            </div>
          </div>
          <div
            class="alert alert-info alert-dismissible fade show mt-3 mb-0"
            role="alert"
          >
            <div class="row g-0 row-cols-2 align-items-center">
              <div class="col text-center w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-label="Warning:"
                >
                  <path
                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </div>
              <div class="col w-95">
                <div>
                  This module consists of all the
                  <b>background information</b> on
                  <b> Digital Marketing Specialist</b> as a career, 2 (two)
                  <b>case studies</b> and a final reflection. Complete all
                  sections <b>in order</b> . Refer to Glossary and Additional
                  Resources when necessary.
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-3">
      <div class="row">
        <div class="col-md-3">
          <div class="text-end d-md-none d-block mx-0">
            <button
              type="button"
              class="btn dropdown-toggle mx-0 border border-primary"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <vue-feather type="menu" class="me-2"></vue-feather>
              Outline
            </button>

            <ul class="dropdown-menu">
              <li
                class="dropdown-item"
                v-for="i in outline_data"
                :key="i"
                @click="goToPart(i)"
              >
                {{ i.section_name }}
              </li>
            </ul>
          </div>
          <div class="outline-sticky">
            <div class="card d-md-block d-none">
              <ul class="list-group">
                <li
                  v-for="i in outline_data"
                  :key="i"
                  :class="
                    outline_default.id == i.id
                      ? 'list-group-item active'
                      : 'list-group-item'
                  "
                  @click="goToPart(i)"
                >
                  <div class="sidebar-elements text-uppercase">
                    <i class="fas fa-tachometer fa-fw"></i>
                    {{ i.section_name }}
                    <div class="float-end">
                      <vue-feather type="chevron-right"></vue-feather>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <v-part
            :outline="outline_default"
            :module_id="module_data.id"
            @outline-data="checkOutline"
            part_show="true"
          ></v-part>
        </div>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>
<script>
import hNavbar from "@/components/Home/Navbar";
import hBanner from "@/components/Home/ModuleDetail/ModuleBanner";
import hPart from "@/components/Home/ModuleDetail/Part";
import hFooter from "@/components/Home/Footer";

import VueFeather from "vue-feather";

export default {
  name: "module_detail",
  components: {
    "v-navbar": hNavbar,
    "v-banner": hBanner,
    "v-part": hPart,
    "v-footer": hFooter,
    VueFeather,
  },
  data() {
    return {
      user: [],
      module_data: [],
      outline_data: [],
      outline_default: [],
    };
  },
  methods: {
    getModuleData(slug) {
      this.$axios
        .get(this.$api_url + "listen/module/" + slug, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          if (response.data.data.module != null) {
            this.module_data = response.data.data.module;
            document.title = this.module_data.module_name;
          } else {
            this.$router.push({ path: "/" });
            this.$alert.toast("warning", "The module is not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOutlineData(slug) {
      this.$axios
        .get(this.$api_url + "listen/section/" + slug, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          if (response.data.data.outline != null) {
            this.outline_data = response.data.data.outline;

            if (this.$route.params.outline_id) {
              this.outline_data.forEach((data) => {
                if (data.id == this.$route.params.outline_id) {
                  this.outline_default = data;
                }
              });
              this.$router.push({ name: "Module" });
            } else {
              this.outline_default = this.outline_data[0];
            }
          } else {
            this.$router.push({ path: "/" });
            this.$alert.toast("warning", "The module is not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToPart(i) {
      this.outline_default = i;
    },
    checkOutline(data) {
      this.outline_default = data;
    },
  },
  created() {
    this.user = this.$auth.check();
    setInterval(() => {
      this.user = this.$auth.check();
    }, 1000 * 60 * 60);

    if (this.$route.params.slug) {
      this.getModuleData(this.$route.params.slug);
      this.getOutlineData(this.$route.params.slug);
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

.list-group-item {
  background: #243672;
  color: white;
  border-bottom: 1px solid #fff !important;
  cursor: pointer;
  transition: all 0.4s ease;
  padding-bottom: 3px !important;
}

.list-group-item:hover {
  background: #fff;
  color: #243672;
}

.list-group-item.active {
  background: #faa32e;
  color: #fff;
}

.outline-sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 10px;
}

.w-5 {
  width: 5%;
}

.w-95 {
  width: 95%;
}

@media only screen and (max-width: 600px) {
  .w-5,
  .w-95 {
    margin: 5px 0;
    width: 100%;
    text-align: justify;
  }
}
</style>