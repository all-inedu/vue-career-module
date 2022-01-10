<template>
  <div id="Part">
    <div class="card" ref="part">
      <div class="card-body">
        <div class="element-sticky">
          <h4>{{ part_data.part_title || part_data.title }}</h4>
        </div>
        <div v-if="!load">
          <div
            class="row row-cols-1 py-3"
            v-for="(i, index) in element_data.data"
            :key="index"
          >
            <div class="col mb-3" v-if="i.category_element == 'text'">
              <div class="element-text" v-html="i.description"></div>
            </div>
            <div class="col mb-3" v-if="i.category_element == 'image'">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <img
                    :src="$base_url + i.image_path"
                    alt="Part Name"
                    class="element-image"
                    @click="preview($base_url + i.image_path)"
                  />
                </div>
              </div>
            </div>
            <div class="col mb-3" v-if="i.category_element == 'video'">
              <div v-html="i.video_link"></div>
            </div>
            <div class="col mb-3" v-if="i.category_element == 'file'">
              <div class="element-question" v-html="i.question"></div>
              <div
                class="text-center my-3"
                :hidden="element_data.hasOwnProperty('read_id')"
              >
                <a
                  :href="$base_url + i.file_path"
                  class="btn border border-primary rounded-pill btn-sm px-3"
                  download
                >
                  Download the Worksheet
                </a>
              </div>
              <div class="" :hidden="element_data.hasOwnProperty('read_id')">
                <small class="text-muted"
                  >Please upload your document below</small
                >
                <input
                  type="file"
                  :ref="'file_' + index"
                  class="form-control"
                  :class="i.error_form ? 'border-danger' : ''"
                  @change="deleteError(index)"
                />
                <small class="text-danger" v-if="i.error_form">
                  {{ i.error_form }}
                </small>
              </div>
              <div class="" v-if="element_data.data[index].answer">
                <div class="text-center my-3">
                  <a
                    :href="$base_url + element_data.data[index].answer"
                    class="btn border border-success rounded-pill btn-sm px-3"
                    download
                  >
                    Download Your Document
                  </a>
                </div>
              </div>
            </div>
            <div class="col mb-3" v-if="i.category_element == 'multiple'">
              <div class="element-question" v-html="i.question"></div>
              <div class="row row-cols-md-2 row-cols-1 mt-3">
                <div class="col mb-2" v-for="n in i.elementdetails" :key="n">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      v-model="element_data.data[index].answer"
                      :value="n.id"
                      :name="'answer' + i.id"
                      :id="n.id"
                      :class="i.error_form ? 'border-danger' : ''"
                      @change="deleteError(index)"
                    />
                    <label class="form-check-label" :for="n.id">
                      {{ n.answer }}
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <small class="text-danger" v-if="i.error_form">
                    {{ i.error_form }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col mb-3" v-if="i.category_element == 'blank'">
              <div class="element-question" v-html="i.question"></div>
              <div class="mt-3">
                <small class="text-muted"> Fill in your answer below </small>
                <!-- Textarea  -->
                <div
                  v-if="
                    element_data.data[index].elementdetails[0].answer == '-'
                  "
                >
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="element_data.data[index].answer"
                    :class="i.error_form ? 'border-danger' : ''"
                    @keydown="deleteError(index)"
                  ></textarea>
                </div>

                <!-- Input  -->
                <div
                  v-if="
                    element_data.data[index].elementdetails[0].answer != '-'
                  "
                >
                  <input
                    :type="
                      i.elementdetails[0].type_blank == 'is exactly'
                        ? 'text'
                        : 'number'
                    "
                    v-model="element_data.data[index].answer"
                    class="form-control"
                    :class="i.error_form ? 'border-danger' : ''"
                    @keydown="deleteError(index)"
                  />
                </div>
                <div class="col-md-12">
                  <small class="text-danger" v-if="i.error_form">
                    {{ i.error_form }}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-0 mb-3" />
          <div class="float-start">
            <button
              class="btn rounded-pill border-warning mx-0 px-4"
              @click="backElementData()"
            >
              <vue-feather type="arrow-left" class="me-1"></vue-feather>
              Return
            </button>
          </div>
          <div class="float-end">
            <button
              class="btn rounded-pill border-success mx-0 px-4"
              @click="nextElementData()"
            >
              Next
              <vue-feather type="arrow-right" class="ms-1"></vue-feather>
            </button>
          </div>
        </div>

        <div v-if="load">
          <div class="text-center my-5">
            <vue-feather type="loader" size="50" animation="spin"></vue-feather>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="modal-image" v-if="preview_modal">
        <div class="modal-body">
          <div class="float-end">
            <button
              class="btn border mb-1 mx-0 rounded-pill"
              @click="closePreview()"
            >
              <vue-feather type="x" stroke="red"></vue-feather>
            </button>
          </div>
          <img :src="preview_image" alt="Part Name" class="element-image" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import VueFeather from "vue-feather";
import "@/assets/css/element-style.css";

export default {
  name: "element",
  props: {
    module_id: String,
    part: Array,
  },
  components: {
    VueFeather,
  },
  data() {
    return {
      user: [],
      current_id: 1,
      load: false,
      part_data: [],
      element_data: [],
      element_read: {
        module_id: "",
        part_id: "",
        group: "",
        question: [],
      },
      error_count: 0,
      preview_modal: false,
      preview_image: "",
    };
  },
  methods: {
    preview(src) {
      this.preview_modal = true;
      this.preview_image = src;
    },
    closePreview() {
      this.preview_modal = false;
      this.preview_image = "";
    },
    getPartData(id) {
      this.$axios
        .get(this.$api_url + "detail/part/" + id, {
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
    getElementData() {
      this.load = true;
      this.$axios
        .get(
          this.$api_url +
            "listen/element/" +
            this.part.id +
            "/" +
            this.current_id,
          {
            headers: {
              Authorization: "Bearer " + this.user.token,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          this.load = false;
          this.element_data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteError(i) {
      this.element_data.data[i].error_form = null;
    },
    getElementDataByUrl(url) {
      this.load = true;

      this.$refs["part"].scrollIntoView({
        block: "center",
        scrollBehavior: "smooth",
      });

      this.$axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.load = false;
          if (this.element_data.next_outline_id) {
            this.$emit("outline", this.element_data.next_outline_id);
          }

          // console.log(response.data);
          this.element_data = response.data;
          this.getPartData(this.element_data.data[0].part_id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    nextElementData() {
      const data = this.element_data.data;
      this.error_count = 0;
      const form = new FormData();
      form.append("module_id", this.module_id);
      form.append("part_id", this.part_data.id);
      form.append("group", data[0].group);

      if (typeof this.element_data.read_id !== "undefined") {
        form.append("read_id", this.element_data.read_id);
      }

      for (let n in data) {
        if (data[n].category_element == "blank") {
          form.append("question[" + n + "][element_id]", data[n].id);
          form.append(
            "question[" + n + "][category_element]",
            data[n].category_element
          );

          if (data[n].answer) {
            data[n].error_form = null;
            form.append("question[" + n + "][answer]", data[n].answer);
          } else {
            form.append("question[" + n + "][answer]", null);
            data[n].error_form = "Please, fill in the field first";
            this.error_count++;
          }
        } else if (data[n].category_element == "multiple") {
          form.append("question[" + n + "][element_id]", data[n].id);
          form.append(
            "question[" + n + "][category_element]",
            data[n].category_element
          );

          if (data[n].answer) {
            data[n].error_form = null;
            form.append(
              "question[" + n + "][element_detail_id]",
              data[n].answer
            );
          } else {
            form.append("question[" + n + "][element_detail_id]", null);
            data[n].error_form = "Please, choose the one answer";
            this.error_count++;
          }
        } else if (data[n].category_element == "file") {
          const file_input = this.$refs["file_" + n];
          form.append("question[" + n + "][element_id]", data[n].id);
          form.append(
            "question[" + n + "][category_element]",
            data[n].category_element
          );
          if (file_input.files[0]) {
            data[n].error_form = null;
            form.append("question[" + n + "][file]", file_input.files[0]);
          } else {
            if (typeof this.element_data.read_id === "undefined") {
              form.append("question[" + n + "][file]", null);
              data[n].error_form = "Please, upload your document first";
              this.error_count++;
            } else {
              form.append("question[" + n + "][file]", null);
            }
          }
        }
      }
      // Display the key/value pairs
      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      // save
      if (this.error_count == 0) {
        this.load = true;
        this.$axios
          .post(this.$api_url + "read", form, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + this.user.token,
            },
          })
          .then(() => {
            this.load = false;
            if (this.element_data.next_page_url) {
              this.getElementDataByUrl(this.element_data.next_page_url);
            } else if (this.element_data.next_outline_id) {
              this.$emit("outline", this.element_data.next_outline_id);
              this.$emit("part-element", true);
            } else {
              this.$emit("part-element", true);
            }
          })
          .catch((error) => {
            console.log(error.response.data);
            this.load = false;
            this.$alert.toast("warning", error.response.data.error);
          });
      }
    },
    backElementData() {
      if (this.element_data.prev_page_url) {
        this.getElementDataByUrl(this.element_data.prev_page_url);
      } else {
        this.$emit("part-element", true);
      }
    },
  },
  created() {
    this.user = this.$auth.check();
    this.part_data = this.part;
    this.getElementData();
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  text-align: center;
}

.card-part {
  border: 3px solid #dedede;
  transition: all 0.5s ease;
  cursor: pointer;
}

.card-part:hover {
  border: 3px solid #f5bc7a;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.modal-image {
  position: fixed;
  z-index: 98;
  width: 100%;
  background: rgba(255, 255, 255, 0.822);
  padding: 18%;
  height: 100vh;
  top: 0;
  left: 0;
}

.modal-body {
  position: fixed;
  z-index: 99;
  width: 60%;
  top: 5%;
  left: 20%;
}

.element-text {
  border-left: 4px solid #9694ff;
  padding: 5px 10px;
  text-align: justify;
}

.element-question {
  border-left: 4px solid #ffd154;
  padding: 5px 10px;
  text-align: justify;
}

.element-image {
  width: 100%;
}

.form-check-input {
  width: 1.2em;
  height: 1.2em;
  margin-right: 15px;
  margin-top: 2.5px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.form-check-input:hover {
  background: rgb(255, 153, 0);
}

.form-check-input:checked {
  background-color: #c7781d;
  border-color: #c3d0e4;
}

.form-check-label {
  cursor: pointer;
}

.element-sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0px;
  padding: 10px 0 5px 0;
  border-bottom: 1px solid #dedede;
  background: white;
}

@media only screen and (max-width: 600px) {
  .modal-image {
    background: rgba(255, 255, 255, 0.89);
  }

  .modal-body {
    position: fixed;
    width: 90%;
    top: 2%;
    left: 5%;
  }
}
</style>