<template>
  <div id="part">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h3 class="m-0">Part of</h3>
                <hr />
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
                <transition name="fade">
                  <div class="row justify-content-center my-3" v-if="add">
                    <div class="col-md-12 mb-3">
                      <form @submit.prevent="savePart">
                        <div class="row align-items-center">
                          <div class="col-md-9 mb-3">
                            <input
                              v-model="part.title"
                              type="text"
                              class="form-control"
                              placeholder="Part title"
                            />
                            <transition name="fade">
                              <small
                                class="text-danger"
                                v-if="error_form.title"
                              ></small>
                            </transition>
                          </div>
                          <div class="col-md-3 text-md-end text-center">
                            <button
                              type="submit"
                              class="btn btn-sm btn-success"
                            >
                              Save & Create Element
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </transition>
                <transition name="fade">
                  <div class="row justify-content-center my-3">
                    <div class="col-md-12">
                      <ul class="list-group">
                        <li class="list-group-item" v-for="i in 5" :key="i">
                          <span class="badge rounded-pill bg-primary me-2">
                            1
                          </span>
                          Lorem ipsum
                          <div class="float-end">
                            <span class="badge rounded-pill bg-dark me-2">
                              Element
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
                <div class="mt-3">
                  <hr />
                  <div class="float-end">
                    <button @click="previous" class="btn btn-warning mx-0">
                      <vue-feather
                        class="pe-2"
                        type="arrow-left-circle"
                      ></vue-feather>
                      Back
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
import axios from "axios";

export default {
  name: "part",
  components: {
    VueFeather,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      userSession: [],
      module_id: this.$route.params.module_id,
      add: false,
      outline: [],
      part: {
        outline_id: "",
        title: "",
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
    },
    savePart() {
      axios
        .post(this.api_url + "part", this.part)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.error_form.title = error.response.data.error.title[0];
          // this.toast("warning", "Outline id is not found");
        });
      // this.$emit("check-section", 4);
    },
  },
  watch: {
    $route(to) {
      this.part.outline_id = to.params.outline_id;
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.userSession = sessionStorage.getItem("user");
    }

    // get data outline
    // if (this.$route.params.outline_id) {
    //   this.module.module_id = this.$route.params.module_id;
    //   axios
    //     .get(this.api_url + "module/" + this.$route.params.module_id, {
    //       headers: {
    //         Authorization: "Bearer " + this.userSession.data.token,
    //       },
    //     })
    //     .then((response) => {
    //       this.module.module_id = response.data.data[0].id;
    //       this.module.module_name = response.data.data[0].module_name;
    //     })
    //     .catch(() => {
    //       this.toast("warning", "Outline id is not found");
    //       this.$router.push({ path: "/admin/module/create/" + this.module_id });
    //     });
    // }
  },
};
</script>
<style scoped>
.border-add {
  border: 3px dotted #919191;
  text-align: center;
  padding: 30px 0;
  transition: all 0.3s ease;
}

.border-add:hover {
  border: 3px solid #b6e48b;
}
</style>