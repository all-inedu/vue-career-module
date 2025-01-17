<template>
  <div id="part">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h3 class="m-0">Part of {{ outline.name }}</h3>
                <hr />

                <!-- LIST OF PART  -->
                <transition name="fade">
                  <div class="row justify-content-center my-3">
                    <div class="col-md-12">
                      <ul class="list-group">
                        <li
                          class="list-group-item"
                          v-for="(i, index) in part_data"
                          :key="index"
                        >
                          <span class="badge rounded-pill bg-primary me-2">
                            {{ index + 1 }}
                          </span>
                          {{ i.title }} <br />
                          <small
                            class="notif-part text-muted"
                            v-if="i.total_element > 0"
                          >
                            This part has
                            <strong>
                              {{ i.total_element }}
                            </strong>
                            element
                          </small>
                          <small
                            class="notif-part text-danger"
                            v-if="i.total_element == 0"
                          >
                            This part has no element yet
                          </small>
                          <div
                            class="
                              float-md-end
                              d-md-inline d-block
                              my-md-0 my-2
                            "
                          >
                            <vue-custom-tooltip label="Delete part">
                              <vue-feather
                                @click="deletePart(i)"
                                class="me-2"
                                type="trash-2"
                                size="20"
                                stroke="red"
                              ></vue-feather>
                            </vue-custom-tooltip>

                            <vue-custom-tooltip label="Rename part">
                              <vue-feather
                                @click="editPart(i)"
                                class="me-2"
                                type="edit"
                                size="20"
                                stroke="blue"
                              ></vue-feather>
                            </vue-custom-tooltip>

                            <vue-custom-tooltip label="Edit elements">
                              <vue-feather
                                @click="viewElement(i.id)"
                                class="me-2"
                                type="book"
                                size="20"
                                stroke="green"
                              ></vue-feather>
                            </vue-custom-tooltip>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>

                <!-- ADD PART  -->
                <transition name="fade">
                  <div class="row justify-content-center" v-if="!add">
                    <div class="col-md-6">
                      <div class="border-add pointer" @click="addForm">
                        <vue-feather
                          class="pe-2"
                          type="plus-circle"
                        ></vue-feather>
                        <h3 class="m-0">Add a Part</h3>
                      </div>
                    </div>
                  </div>
                </transition>

                <!-- SAVE PART  -->
                <transition name="fade">
                  <div class="row justify-content-center my-3" v-if="add">
                    <div class="col-md-12 mb-3">
                      <form @submit.prevent="savePart">
                        <div class="row align-items-center">
                          <div class="col-md-9 mb-3">
                            <input
                              v-focus
                              v-model="part.title"
                              type="text"
                              class="form-control"
                              placeholder="Part title"
                              v-if="add"
                            />
                            <transition name="fade">
                              <small
                                class="text-danger"
                                v-if="error_form.title"
                              >
                                {{ error_form.title }}
                              </small>
                            </transition>
                          </div>
                          <div class="col-md-3 text-md-end text-center">
                            <button
                              v-if="!edit"
                              type="submit"
                              class="btn btn-admin btn-sm btn-success mx-1"
                            >
                              <vue-feather type="save" size="18"></vue-feather>
                              Save
                            </button>
                            <button
                              v-if="edit"
                              type="submit"
                              class="
                                btn btn-admin btn-sm btn-sm btn-primary
                                mx-1
                              "
                            >
                              <vue-feather type="edit" size="18"></vue-feather>
                              Update
                            </button>
                            <button
                              type="button"
                              @click="cancelEdit"
                              class="
                                btn btn-admin btn-sm btn-sm btn-danger
                                mx-1
                              "
                            >
                              <vue-feather type="x" size="18"></vue-feather>
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </transition>

                <div class="mt-3">
                  <hr />
                  <div class="float-start">
                    <button
                      @click="previous"
                      class="btn btn-admin btn-warning mx-0"
                    >
                      <vue-feather
                        class="pe-2"
                        type="arrow-left-circle"
                      ></vue-feather>
                      Return
                    </button>
                  </div>
                </div>
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
  name: "part",
  components: {
    VueFeather,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      user: [],
      module_id: this.$route.params.module_id,
      add: false,
      edit: false,
      module: [],
      outline: [],
      part_data: [],
      part: {
        part_id: null,
        outline_id: "",
        title: "",
        module_id: this.$route.params.module_id,
      },
      error_form: {
        title: "",
      },
    };
  },
  methods: {
    previous() {
      this.$router.push({ path: "/admin/module/create/" + this.module_id });
      this.$emit("check-section", 2);
    },
    addForm() {
      this.add = true;
      this.part.part_id = "";
      this.part.title = "";
    },
    getModuleData() {
      this.$axios
        .get(this.$api_url + "module/" + this.module_id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.module = response.data.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOutlineData() {
      this.$axios
        .get(this.$api_url + "detail/outline/" + this.part.outline_id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          // console.log(response.data.outline);
          this.outline = response.data.outline;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      // get data outline
      this.$axios
        .get(this.$api_url + "part/" + this.part.outline_id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.part_data = response.data.part;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    savePart() {
      // console.log(this.part);
      this.$alert.loading();
      this.$axios
        .post(this.$api_url + "part", this.part, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          if (response.data.success == true) {
            this.$alert.toast("success", response.data.message);
            this.add = false;
            this.edit = false;
            this.part.title = "";
            this.getData();

            if (response.data.data.module_progress) {
              this.$emit("check-progress", response.data.data.module_progress);
            } else {
              this.$emit("check-progress", this.module.progress);
            }

            this.$router.push({
              path:
                "/admin/module/create/" +
                this.module.id +
                "/" +
                this.outline.id +
                "/" +
                response.data.data.part.id,
            });
            this.$emit("check-section", 4);
          } else {
            this.$alert.toast("warning", response.data.error);
          }
          // console.log(response.data);
        })
        .catch((error) => {
          Swal.close();
          // if (error.response) {
          //   this.error_form.title = error.response.data.error.title[0];
          // }
          console.log(error.response.data);
        });
    },
    editPart(item) {
      this.add = true;
      this.edit = true;
      this.part.part_id = item.id;
      this.part.outline_id = item.outline_id;
      this.part.title = item.title;
    },
    cancelEdit() {
      this.add = false;
      this.edit = false;
    },
    deletePart(item) {
      Swal.fire({
        title:
          "<h5 class='my-0'>Are you sure, delete '" + item.title + "'?</h5>",
        html: "<h6 class='my-0'>If you are sure to delete, you delete the element inside automatically</h6>",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Save",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$axios
            .delete(
              this.$api_url +
                "part/" +
                item.id +
                "/" +
                item.outline_id +
                "/" +
                this.module_id,
              {
                headers: {
                  Authorization: "Bearer " + this.user.token,
                },
              }
            )
            .then((response) => {
              this.getData();
              this.$alert.toast("success", response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
    viewElement(id) {
      this.$router.push({
        path:
          "/admin/module/create/" +
          this.module.id +
          "/" +
          this.outline.id +
          "/" +
          id,
      });
      this.$emit("check-section", 4);
      this.$emit("check-progress", this.module.progress);
    },
  },
  watch: {
    $route(to) {
      this.part.outline_id = to.params.outline_id;
      if (this.user) {
        this.getData();
        this.getOutlineData();
      }
    },
  },
  created() {
    this.user = this.$auth.check();

    if (this.user) {
      this.getModuleData();
      if (this.$route.params.outline_id) {
        this.part.outline_id = this.$route.params.outline_id;
        this.getData();
        this.getOutlineData();
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

.border-add {
  border: 3px dotted #919191;
  text-align: center;
  padding: 30px 0;
  transition: all 0.3s ease;
}

.border-add:hover {
  border: 3px solid #b6e48b;
}

.notif-part {
  margin-left: 35px;
  font-style: italic;
}
</style>