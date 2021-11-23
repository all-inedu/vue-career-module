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
          <!-- Form Create  -->
          <div class="container p-md-3 p-2">
            <div class="row">
              <div class="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Module</a></li>
                    <li class="breadcrumb-item active">Create</li>
                  </ol>
                </nav>
              </div>
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body">
                    <form @submit.prevent="saveModule">
                      <div class="row">
                        <div class="col-md-8">
                          <div class="mb-3">
                            <label>Module Name</label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="module.module_name"
                            />
                          </div>
                          <div class="row">
                            <div class="col-md-7">
                              <div class="mb-3">
                                <label>Category</label>
                                <select
                                  class="form-select"
                                  v-model="module.category_id"
                                >
                                  <option
                                    value=""
                                    selected
                                    disabled
                                    class="text-muted"
                                  >
                                    Please select the category
                                  </option>
                                  <option
                                    v-for="index in category.list"
                                    :key="index.id"
                                    :value="index.id"
                                  >
                                    {{ index.name }}
                                  </option>
                                </select>
                                <vue-select :options="['Red', 'Green']">
                                </vue-select>
                              </div>
                            </div>
                            <div class="col-md-5">
                              <div class="mb-3">
                                <label>Price</label>
                                <div class="input-group mb-3">
                                  <span class="input-group-text">Rp</span>
                                  <input
                                    v-if="showPrice"
                                    v-model="module.price"
                                    type="number"
                                    class="form-control"
                                    @blur="priceVisible('blur')"
                                  />
                                  <input
                                    v-if="!showPrice"
                                    v-model="format_price"
                                    type="text"
                                    class="form-control"
                                    @focus="priceVisible('focus')"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="mb-3">
                            <label>Description</label>
                            <editor
                              v-model="module.desc"
                              api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                              :init="{
                                height: 400,
                                menubar: true,
                                inline: false,
                                plugins:
                                  'print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media  template codesample table charmap hr pagebreak nonbreaking anchor  insertdatetime advlist lists wordcount   textpattern noneditable help charmap quickbars  emoticons',
                                toolbar:
                                  'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
                              }"
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="mb-3">
                            <label class="d-block">Thumbnail</label>
                            <input
                              type="file"
                              accept="image/*"
                              @change="previewImage"
                              class="form-control form-control-sm"
                              id="my-file"
                            />
                          </div>
                          <div class="border p-2 mt-3">
                            <p>Preview Here:</p>
                            <transition name="fade">
                              <div v-if="preview">
                                <img :src="preview" class="img-fluid" />
                                <p class="mb-0">file name: {{ image.name }}</p>
                                <p class="mb-0">
                                  size: {{ image.size / 1024 }}KB
                                </p>
                              </div>
                            </transition>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <hr />
                          <div class="float-end">
                            <button type="submit" class="btn btn-primary mx-0">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminCheck from "@/components/Admin/UserCheck";
import AdminHeader from "@/components/Admin/Header";
import AdminSidebar from "@/components/Admin/Sidebar";
import axios from "axios";

export default {
  name: "Module Create",
  components: {
    AdminCheck,
    AdminHeader,
    AdminSidebar,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      sidebar: "col-md-3",
      sidebarStatus: true,
      header: "col-md-9",
      preview: null,
      image: null,
      format_price: "",
      showPrice: false,
      userSession: [],
      category: {
        selected: "",
        list: "",
      },
      module: {
        module_name: "",
        desc: "",
        category_id: "",
        price: "",
        status: "1",
      },
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
    previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    categoryList() {
      axios
        .get(this.api_url + "category/all", {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((res) => {
          this.category.list = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    priceVisible(s) {
      if (s == "blur") {
        this.showPrice = false;
        this.format_price = this.module.price
          .toString()
          .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.");
      } else if (s == "focus") {
        this.showPrice = true;
      }
    },
    saveModule() {
      console.log(this.module);
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
      this.categoryList();
    } else {
      this.userSession = sessionStorage.getItem("user");
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