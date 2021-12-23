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
                  <!-- INTRODUCTION  -->
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >1</span
                        >
                        Introduction
                        <small
                          class="d-block notif-part text-muted"
                          v-if="outline.introduction.total_part"
                        >
                          This outline has
                          <strong>
                            {{ outline.introduction.total_part }}
                          </strong>
                          part
                        </small>
                        <small
                          class="d-block notif-part text-danger"
                          v-if="!outline.introduction.total_part"
                        >
                          This outline has no part yet
                        </small>
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline name"
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
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(1)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(1)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- CORE TASK  -->
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >2</span
                        >
                        Core Task
                        <small
                          class="d-block notif-part text-muted"
                          v-if="outline.core_task.total_part"
                        >
                          This outline has
                          <strong> {{ outline.core_task.total_part }} </strong>
                          part
                        </small>
                        <small
                          class="d-block notif-part text-danger"
                          v-if="!outline.core_task.total_part"
                        >
                          This outline has no part yet
                        </small>
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline name"
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
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(2)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(2)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- TYPES  -->
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >3</span
                        >
                        Types
                        <small
                          class="d-block notif-part text-muted"
                          v-if="outline.types.total_part"
                        >
                          This outline has
                          <strong> {{ outline.types.total_part }} </strong> part
                        </small>
                        <small
                          class="d-block notif-part text-danger"
                          v-if="!outline.types.total_part"
                        >
                          This outline has no part yet
                        </small>
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline name"
                          required
                          v-model="outline.types.name"
                        />
                        <transition name="fade">
                          <small class="text-danger" v-if="form_error.types">
                            {{ form_error.types }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(3)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(3)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- PATHWAY  -->
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >4</span
                        >
                        Pathway
                        <small
                          class="d-block notif-part text-muted"
                          v-if="outline.pathway.total_part"
                        >
                          This outline has
                          <strong> {{ outline.pathway.total_part }} </strong>
                          part
                        </small>
                        <small
                          class="d-block notif-part text-danger"
                          v-if="!outline.pathway.total_part"
                        >
                          This outline has no part yet
                        </small>
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
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(4)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(4)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- CASE STUDY  -->
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >5</span
                        >
                        Case Study
                        <small
                          class="d-block notif-part text-muted"
                          v-if="outline.case_study.total_part"
                        >
                          This outline has
                          <strong> {{ outline.case_study.total_part }} </strong>
                          part
                        </small>
                        <small
                          class="d-block notif-part text-danger"
                          v-if="!outline.case_study.total_part"
                        >
                          This outline has no part yet
                        </small>
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline name"
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
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(5)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(5)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- REFLECTION  -->
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
                          placeholder="Outline name"
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
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(6)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(6)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- GLOSSARY  -->
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >7</span
                        >
                        Glossary
                        <small
                          class="d-block notif-part text-muted"
                          v-if="outline.glossary.total_part"
                        >
                          This outline has
                          <strong> {{ outline.glossary.total_part }} </strong>
                          part
                        </small>
                        <small
                          class="d-block notif-part text-danger"
                          v-if="!outline.glossary.total_part"
                        >
                          This outline has no part yet
                        </small>
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline name"
                          required
                          v-model="outline.glossary.name"
                        />
                        <transition name="fade">
                          <small class="text-danger" v-if="form_error.glossary">
                            {{ form_error.glossary }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(7)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(7)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- ADDITIONAL RESOURCE -->
                  <li class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <span class="badge bg-primary rounded-pill me-2"
                          >8</span
                        >
                        Additional Resource
                        <small
                          class="d-block notif-part text-muted"
                          v-if="outline.other.total_part"
                        >
                          This outline has
                          <strong> {{ outline.other.total_part }} </strong> part
                        </small>
                        <small
                          class="d-block notif-part text-danger"
                          v-if="!outline.other.total_part"
                        >
                          This outline has no part yet
                        </small>
                      </div>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Outline name"
                          required
                          v-model="outline.other.name"
                        />
                        <transition name="fade">
                          <small class="text-danger" v-if="form_error.other">
                            {{ form_error.other }}
                          </small>
                        </transition>
                      </div>
                      <div class="col-md-1 d-md-block d-none text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline(8)"
                        ></vue-feather>
                      </div>
                      <div class="col-12 d-md-none d-block mt-2">
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-admin btn-sm btn-primary mx-0"
                            type="button"
                            @click="saveOutline(8)"
                          >
                            Next
                            <vue-feather
                              class="ms-2"
                              type="arrow-right"
                              fill="green"
                              stroke="white"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="mt-3">
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
  name: "outline",
  components: {
    VueFeather,
  },
  data() {
    return {
      user: [],
      module: {
        module_id: this.$route.params.module_id,
        module_name: "",
        progress: "",
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
    previous() {
      this.$emit("check-section", 1);
    },
    getModuleData(id) {
      this.module.module_id = this.$route.params.module_id;
      this.$axios
        .get(this.$api_url + "module/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.module.module_id = response.data.data[0].id;
          this.module.module_name = response.data.data[0].module_name;
          this.module.progress = response.data.data[0].progress;
        })
        .catch(() => {
          this.$alert.toast("warning", "Module id is not found");
          this.$router.push({ path: "/admin/module" });
        });
    },
    getOutlineData(id) {
      this.$axios
        .get(this.$api_url + "outline/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          response.data.data.forEach((value) => {
            if (value.section_id == 1) {
              this.outline.introduction.id = value.id;
              this.outline.introduction.name = value.name;
              this.outline.introduction.total_part = value.total_part;
              this.outline_old.introduction = value.name;
            } else if (value.section_id == 2) {
              this.outline.core_task.id = value.id;
              this.outline.core_task.name = value.name;
              this.outline.core_task.total_part = value.total_part;
              this.outline_old.core_task = value.name;
            } else if (value.section_id == 3) {
              this.outline.types.id = value.id;
              this.outline.types.name = value.name;
              this.outline.types.total_part = value.total_part;
              this.outline_old.types = value.name;
            } else if (value.section_id == 4) {
              this.outline.pathway.name = value.name;
              this.outline.pathway.id = value.id;
              this.outline.pathway.total_part = value.total_part;
              this.outline_old.pathway = value.name;
            } else if (value.section_id == 5) {
              this.outline.case_study.id = value.id;
              this.outline.case_study.name = value.name;
              this.outline.case_study.total_part = value.total_part;
              this.outline_old.case_study = value.name;
            } else if (value.section_id == 6) {
              this.outline.reflection.id = value.id;
              this.outline.reflection.name = value.name;
              this.outline.reflection.total_part = value.total_part;
              this.outline_old.reflection = value.name;
            } else if (value.section_id == 7) {
              this.outline.glossary.id = value.id;
              this.outline.glossary.name = value.name;
              this.outline.glossary.total_part = value.total_part;
              this.outline_old.glossary = value.name;
            } else if (value.section_id == 8) {
              this.outline.other.id = value.id;
              this.outline.other.name = value.name;
              this.outline.other.total_part = value.total_part;
              this.outline_old.other = value.name;
            }
          });
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
      this.$alert.loading();
      if (formData.get("name") == "undefined") {
        formData.delete("name");
      }

      this.$axios
        .post(this.$api_url + "outline", formData, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          Swal.close();
          if (response.data.success == true) {
            this.$alert.toast("success", response.data.message);
            this.$router.push({
              path:
                "/admin/module/create/" +
                response.data.data.outline.module_id +
                "/" +
                response.data.data.outline.id,
            });
            this.$emit("check-section", 3);
            if (response.data.data.module_progress) {
              this.$emit("check-progress", response.data.data.module_progress);
            } else {
              this.$emit("check-progress", this.module.progress);
            }
          } else {
            this.$alert.toast("warning", response.data.error);
          }
          // console.log(response.data);
        })
        .catch((err) => {
          Swal.close();
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
          // console.log(this.form_error);
        });
    },
  },
  created() {
    this.user = this.$auth.check();

    if (this.user) {
      if (this.$route.params.module_id) {
        this.getModuleData(this.$route.params.module_id);
        this.getOutlineData(this.$route.params.module_id);
      }
    }
  },
};
</script>
.<style scoped>
.notif-part {
  margin-left: 35px;
  font-style: italic;
}
</style>