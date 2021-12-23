<template>
  <div id="create">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <form
                  enctype="multipart/form-data"
                  @submit.prevent="saveModule"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
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
                            <transition name="fade">
                              <small
                                class="text-danger"
                                v-if="error_validation.module.thumbnail"
                              >
                                {{ error_validation.module.thumbnail[0] }}
                              </small>
                            </transition>
                          </div>
                          <div class="border p-2 mt-3 mb-3">
                            <p>Preview Here:</p>
                            <transition name="fade">
                              <div v-if="preview">
                                <img :src="preview" class="img-fluid" />
                              </div>
                            </transition>
                            <transition name="fade">
                              <div v-if="!preview">
                                <img
                                  src="https://dummyimage.com/600x400/b0b0b0/5c5c5c&text=Thumbnail"
                                  class="img-fluid"
                                />
                              </div>
                            </transition>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="mb-3">
                            <label>Module Name</label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="module.module_name"
                            />
                            <transition name="fade">
                              <small
                                class="text-danger"
                                v-if="error_validation.module.module_name"
                              >
                                {{ error_validation.module.module_name[0] }}
                              </small>
                            </transition>
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
                                <transition name="fade">
                                  <small
                                    class="text-danger"
                                    v-if="error_validation.module.category_id"
                                  >
                                    {{ error_validation.module.category_id[0] }}
                                  </small>
                                </transition>
                              </div>
                            </div>
                            <div class="col-md-5">
                              <div class="mb-3">
                                <label>Price</label>
                                <div class="input-group">
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
                                <transition name="fade">
                                  <small
                                    class="text-danger"
                                    v-if="error_validation.module.price"
                                  >
                                    {{ error_validation.module.price[0] }}
                                  </small>
                                </transition>
                              </div>
                            </div>
                          </div>

                          <div class="mb-2">
                            <label>Description</label>
                            <editor
                              v-model="module.desc"
                              api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                              :init="{
                                height: 300,
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
                            <transition name="fade">
                              <small
                                class="text-danger"
                                v-if="error_validation.module.desc"
                              >
                                {{ error_validation.module.desc[0] }}
                              </small>
                            </transition>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="float-start">
                        <button
                          @click="returnModule"
                          class="btn btn-admin btn-warning mx-0"
                        >
                          <vue-feather
                            class="pe-2"
                            type="arrow-left-circle"
                          ></vue-feather>
                          Return
                        </button>
                      </div>
                      <div class="float-end">
                        <button
                          type="submit"
                          class="btn btn-admin btn-primary mx-0"
                        >
                          Next
                          <vue-feather
                            class="ps-2"
                            type="arrow-right-circle"
                          ></vue-feather>
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
    </transition>
  </div>
</template>
<script>
import VueFeather from "vue-feather";
import Swal from "sweetalert2";

export default {
  name: "create",
  components: {
    VueFeather,
  },
  data() {
    return {
      user: [],
      preview: null,
      image: null,
      format_price: "",
      showPrice: false,
      category: {
        list: [],
      },
      module_id: "",
      old_module: {
        module_name: "",
        desc: "",
        category_id: "",
        price: "",
        thumbnail: this.preview,
      },
      module: {
        module_name: "",
        desc: "",
        category_id: "",
        price: "",
        thumbnail: this.preview,
      },
      error_validation: {
        module: [],
      },
    };
  },
  methods: {
    previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        this.module.thumbnail = this.image;
        reader.readAsDataURL(input.files[0]);
      }
    },
    categories() {
      this.$axios
        .get(this.$api_url + "category/all", {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((res) => {
          this.category.list = res.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getModule(id) {
      this.$axios
        .get(this.$api_url + "module/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          // data module
          this.module.module_name = response.data.data[0].module_name;
          this.module.category_id = response.data.data[0].category_id;
          this.module.price = response.data.data[0].price;
          this.module.desc = response.data.data[0].desc;
          if (response.data.data[0].thumbnail != null) {
            this.preview =
              "https://api-cm.all-inedu.com/" + response.data.data[0].thumbnail;
          }

          // old module
          this.old_module.module_name = response.data.data[0].module_name;
          this.old_module.category_id = response.data.data[0].category_id;
          this.old_module.price = response.data.data[0].price;
          this.old_module.desc = response.data.data[0].desc;
        })
        .catch(() => {
          this.$alert.toast("warning", "Module id is not found");
          this.$router.push({ path: "/admin/module" });
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
      // checking the array is same or not
      if (
        JSON.stringify(this.old_module) == JSON.stringify(this.module) &&
        this.module_id
      ) {
        this.$emit("check-section", 2);
        // this.$emit("check-progress", response.data.data.module.progress);
      } else {
        // create a new
        this.$alert.loading();

        let formData = new FormData();
        formData.append("thumbnail", this.image);
        formData.append("module_name", this.module.module_name);
        formData.append("desc", this.module.desc);
        formData.append("category_id", this.module.category_id);
        formData.append("price", this.module.price);

        if (this.module_id) {
          formData.append("module_id", this.module_id);
        }

        // Display the key/value pairs
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }

        this.$axios
          .post(this.$api_url + "module", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + this.user.token,
            },
          })
          .then((response) => {
            Swal.close();
            if (response.data.success == true) {
              this.$alert.toast("success", response.data.message);
              this.$router.push({
                path: "/admin/module/create/" + response.data.data.module.id,
              });
              this.$emit("check-section", 2);
              this.$emit("check-progress", response.data.data.module.progress);
            } else {
              this.$alert.toast("warning", response.data.error);
            }
          })
          .catch((err) => {
            Swal.close();
            if (err.response.data) {
              if (typeof err.response.data.error == "object") {
                this.error_validation.module = err.response.data.error;
              } else {
                this.$alert.toast("warning", err.response.data.message);
              }
            } else {
              this.$alert.toast("warning", err.response);
            }
          });
      }
    },
    returnModule() {
      this.$router.push({
        path: "/admin/module",
      });
    },
  },
  created() {
    this.user = this.$auth.check();

    if (this.user) {
      this.categories();
      if (this.$route.params.module_id) {
        this.module_id = this.$route.params.module_id;
        this.getModule(this.$route.params.module_id);
      }
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
</style>