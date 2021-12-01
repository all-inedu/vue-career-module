<template>
  <div id="outline">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h3>Outline of {{ module.module_name }}</h3>
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >1</span
                        >
                        Introduction
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline title"
                          required
                          v-model="outline.introduction.name"
                        />
                        <transition name="fade">
                          <small
                            class="text-danger"
                            v-if="form_error.introduction"
                          >
                            {{ form_error.introduction }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(1)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >2</span
                        >
                        Core Task
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline title"
                          required
                          v-model="outline.core_task.name"
                        />
                        <transition name="fade">
                          <small
                            class="text-danger"
                            v-if="form_error.core_task"
                          >
                            {{ form_error.core_task }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(2)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >3</span
                        >
                        Types
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline title"
                          required
                          v-model="outline.types.name"
                        />
                        <transition name="fade">
                          <small class="text-danger" v-if="form_error.types">
                            {{ form_error.types }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(3)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >4</span
                        >
                        Pathway
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline name"
                          required
                          v-model="outline.pathway.name"
                        />
                        <transition name="fade">
                          <small class="text-danger" v-if="form_error.pathway">
                            {{ form_error.pathway }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(4)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >5</span
                        >
                        Case Study
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline title"
                          required
                          v-model="outline.case_study.name"
                        />
                        <transition name="fade">
                          <small
                            class="text-danger"
                            v-if="form_error.case_study"
                          >
                            {{ form_error.case_study }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(5)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >6</span
                        >
                        Reflection
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline title"
                          required
                          v-model="outline.reflection.name"
                        />
                        <transition name="fade">
                          <small
                            class="text-danger"
                            v-if="form_error.reflection"
                          >
                            {{ form_error.reflection }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(6)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >7</span
                        >
                        Glossary
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline title"
                          required
                          v-model="outline.glossary.name"
                        />
                        <transition name="fade">
                          <small class="text-danger" v-if="form_error.glossary">
                            {{ form_error.glossary }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(7)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >8</span
                        >
                        Additional Resource
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline title"
                          required
                          v-model="outline.other.name"
                        />
                        <transition name="fade">
                          <small class="text-danger" v-if="form_error.other">
                            {{ form_error.other }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(8)"
                        ></vue-feather>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="mt-3">
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
import Swal from "sweetalert2";

export default {
  name: "outline",
  components: {
    VueFeather,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      userSession: [],
      module: {
        module_id: this.$route.params.module_id,
        module_name: "",
      },
      outline_old: {
        introduction: "",
        core_task: "",
        types: "",
        pathway: "",
        case_study: "",
        reflection: "",
        glossary: "",
        other: "",
      },
      outline: {
        introduction: [],
        core_task: [],
        types: [],
        pathway: [],
        case_study: [],
        reflection: [],
        glossary: [],
        other: [],
      },
      form_error: [],
    };
  },
  methods: {
    loading() {
      Swal.fire({
        title: "Please wait a minute",
      });
      Swal.showLoading();
    },
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
    previous() {
      this.$emit("check-section", 1);
    },
    saveOutline(section_id) {
      let formData = new FormData();
      formData.append("module_id", this.module.module_id);
      formData.append("section_id", section_id);

      // check section
      if (section_id == 1) {
        // checking outline name
        if (this.outline.introduction.name == this.outline_old.introduction) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.introduction.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.introduction.name);
          this.save(formData, section_id);
        }
      } else if (section_id == 2) {
        if (this.outline.core_task.name == this.outline_old.core_task) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.core_task.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.core_task.name);
          this.save(formData, section_id);
        }
      } else if (section_id == 3) {
        if (this.outline.types.name == this.outline_old.types) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.types.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.types.name);
          this.save(formData, section_id);
        }
      } else if (section_id == 4) {
        if (this.outline.pathway.name == this.outline_old.pathway) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.pathway.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.pathway.name);
          this.save(formData, section_id);
        }
      } else if (section_id == 5) {
        if (this.outline.case_study.name == this.outline_old.case_study) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.case_study.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.case_study.name);
          this.save(formData, section_id);
        }
      } else if (section_id == 6) {
        if (this.outline.reflection.name == this.outline_old.reflection) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.reflection.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.reflection.name);
          this.save(formData, section_id);
        }
      } else if (section_id == 7) {
        if (this.outline.glossary.name == this.outline_old.glossary) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.glossary.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.glossary.name);
          this.save(formData, section_id);
        }
      } else if (section_id == 8) {
        if (this.outline.other.name == this.outline_old.other) {
          this.$router.push({
            path:
              "/admin/module/create/" +
              this.module.module_id +
              "/" +
              this.outline.other.id,
          });
          this.$emit("check-section", 3);
        } else {
          formData.append("name", this.outline.other.name);
          this.save(formData, section_id);
        }
      }
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
    },
    save(formData, section_id) {
      if (formData.get("name") == "undefined") {
        formData.delete("name");
      }

      axios
        .post(this.api_url + "outline", formData, {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          // Swal.close();
          if (response.data.success == true) {
            this.toast("success", response.data.message);
            this.$router.push({
              path:
                "/admin/module/create/" +
                response.data.data.outline.module_id +
                "/" +
                response.data.data.outline.id,
            });
            this.$emit("check-section", 3);
          } else {
            this.toast("warning", response.data.error);
          }
          // console.log(response.data);
        })
        .catch((err) => {
          // Swal.close();
          if (section_id == 1) {
            this.form_error.introduction = err.response.data.error.name[0];
          } else if (section_id == 2) {
            this.form_error.core_task = err.response.data.error.name[0];
          } else if (section_id == 3) {
            this.form_error.types = err.response.data.error.name[0];
          } else if (section_id == 4) {
            this.form_error.pathway = err.response.data.error.name[0];
          } else if (section_id == 5) {
            this.form_error.case_study = err.response.data.error.name[0];
          } else if (section_id == 6) {
            this.form_error.reflection = err.response.data.error.name[0];
          } else if (section_id == 7) {
            this.form_error.glossary = err.response.data.error.name[0];
          } else if (section_id == 8) {
            this.form_error.other = err.response.data.error.name[0];
          }
          console.log(this.form_error);
        });
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.userSession = sessionStorage.getItem("user");
    }

    // get data module
    if (this.$route.params.module_id) {
      this.module.module_id = this.$route.params.module_id;
      axios
        .get(this.api_url + "module/" + this.$route.params.module_id, {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          this.module.module_id = response.data.data.module[0].id;
          this.module.module_name = response.data.data.module[0].module_name;
        })
        .catch(() => {
          this.toast("warning", "Module id is not found");
          this.$router.push({ path: "/admin/module" });
        });

      // get data outline
      axios
        .get(this.api_url + "outline/" + this.$route.params.module_id, {
          headers: {
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          response.data.data.forEach((value) => {
            if (value.section_id == 1) {
              this.outline.introduction.id = value.id;
              this.outline.introduction.name = value.name;
              this.outline_old.introduction = value.name;
            } else if (value.section_id == 2) {
              this.outline.core_task.id = value.id;
              this.outline.core_task.name = value.name;
              this.outline_old.core_task = value.name;
            } else if (value.section_id == 3) {
              this.outline.types.id = value.id;
              this.outline.types.name = value.name;
              this.outline_old.types = value.name;
            } else if (value.section_id == 4) {
              this.outline.pathway.name = value.name;
              this.outline.pathway.id = value.id;
              this.outline_old.pathway = value.name;
            } else if (value.section_id == 5) {
              this.outline.case_study.id = value.id;
              this.outline.case_study.name = value.name;
              this.outline_old.case_study = value.name;
            } else if (value.section_id == 6) {
              this.outline.reflection.id = value.id;
              this.outline.reflection.name = value.name;
              this.outline_old.reflection = value.name;
            } else if (value.section_id == 7) {
              this.outline.glossary.id = value.id;
              this.outline.glossary.name = value.name;
              this.outline_old.glossary = value.name;
            } else if (value.section_id == 8) {
              this.outline.other.id = value.id;
              this.outline.other.name = value.name;
              this.outline_old.other = value.name;
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>