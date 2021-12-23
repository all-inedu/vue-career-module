<template>
  <div id="element">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h3 class="m-0">Element of {{ part.title }}</h3>
                <hr />

                <!-- LIST OF ELEMENT  -->
                <transition name="fade">
                  <div
                    class="row justify-content-center my-3"
                    v-if="!addElement"
                  >
                    <div
                      class="col-md-12 mb-3"
                      v-for="(x, index) in element_data"
                      :key="index"
                    >
                      <h4
                        class="my-0 bg-primary px-3 py-1 rounded-2 text-white"
                      >
                        Group {{ index }}
                      </h4>
                      <div
                        class="
                          row row-cols-md-5 row-cols-2
                          border border-1
                          mx-0
                          mt-0
                          py-3
                          item-align-strech
                        "
                      >
                        <div
                          class="col mb-4"
                          v-for="(i, i_index) in x"
                          :key="i_index"
                        >
                          <div class="card card-element h-100">
                            <div class="d-blo">
                              <div class="float-start">
                                <select
                                  v-model="element_data[index][i_index].order"
                                  class="sort-element"
                                  @change="orderElement(i)"
                                >
                                  <option
                                    v-for="(n, x) in element_data[index]"
                                    :key="x"
                                    :value="x + 1"
                                    :selected="i.order == x + 1"
                                  >
                                    {{ x + 1 }}
                                  </option>
                                </select>
                              </div>
                              <div
                                class="float-end"
                                style="margin-top: 5px; margin-right: 10px"
                                @click="deleteElement(i.id)"
                              >
                                <vue-feather
                                  type="x"
                                  stroke="red"
                                ></vue-feather>
                              </div>
                            </div>
                            <div
                              class="card-body text-center"
                              @click="editElement(i.id)"
                            >
                              <img
                                :src="
                                  require('@/assets/admin/' +
                                    generateImage(i.category_element))
                                "
                                class="
                                  image-element
                                  rounded
                                  mx-auto
                                  d-block
                                  mt-1
                                "
                                alt="Element"
                              />
                              <p class="my-0 text-uppercase text-muted">
                                <strong>
                                  {{ generateCElement(i.category_element) }}
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col mb-4">
                          <div
                            class="h-100 border-add pointer"
                            @click="addForm(x[0].group)"
                          >
                            <vue-feather
                              class="pe-2"
                              type="plus-circle"
                            ></vue-feather>
                            <h6 class="mt-2 m-0 px-2">
                              Add an Element in Group
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>

                <!-- ADD ELEMENT  -->
                <transition name="fade">
                  <div class="row justify-content-center" v-if="!addElement">
                    <div class="col-md-6">
                      <div class="border-add pointer" @click="addForm(null)">
                        <vue-feather
                          class="pe-2"
                          type="plus-circle"
                        ></vue-feather>
                        <h3 class="m-0">Add an Element</h3>
                      </div>
                    </div>
                  </div>
                </transition>

                <!-- SAVE ELEMENT  -->
                <transition name="fade">
                  <div
                    class="row justify-content-center my-3"
                    v-if="addElement"
                  >
                    <div class="col-md-12 mb-3">
                      <div
                        class="col-md-12 py-2 text-center bg-white sticky-top"
                        style="top: 93px"
                        v-if="addElement && !edit"
                      >
                        <button
                          class="
                            btn btn-admin btn-sm
                            border border-success
                            mx-1
                            my-1
                          "
                          @click="addElementField('text', element)"
                        >
                          <vue-feather type="plus" size="20"></vue-feather>
                          Text
                        </button>
                        <button
                          class="
                            btn btn-admin btn-sm
                            border border-success
                            mx-1
                            my-1
                          "
                          @click="addElementField('image', element)"
                        >
                          <vue-feather type="plus" size="20"></vue-feather>
                          Image
                        </button>
                        <button
                          class="
                            btn btn-admin btn-sm
                            border border-success
                            mx-1
                            my-1
                          "
                          @click="addElementField('video', element)"
                        >
                          <vue-feather type="plus" size="20"></vue-feather>
                          Video
                        </button>
                        <button
                          class="
                            btn btn-admin btn-sm
                            border border-success
                            mx-1
                            my-1
                          "
                          @click="addElementField('file', element)"
                        >
                          <vue-feather type="plus" size="20"></vue-feather>
                          Upload File
                        </button>
                        <button
                          class="
                            btn btn-admin btn-sm
                            border border-success
                            mx-1
                            my-1
                          "
                          @click="addElementField('multiple', element)"
                        >
                          <vue-feather type="plus" size="20"></vue-feather>
                          Multiple Choice
                        </button>
                        <button
                          class="
                            btn btn-admin btn-sm
                            border border-success
                            mx-1
                            my-1
                          "
                          @click="addElementField('blank', element)"
                        >
                          <vue-feather type="plus" size="20"></vue-feather>
                          Fill-in the Blanks
                        </button>
                        <hr class="my-3" />
                      </div>

                      <!-- CONTENT  -->
                      <!-- {{ element }} -->
                      <form @submit.prevent="saveElement()">
                        <div class="row">
                          <div
                            :class="
                              element.data[index].c_element == 'text' ||
                              element.data[index].c_element == 'multiple' ||
                              element.data[index].c_element == 'blank' ||
                              element.data[index].c_element == 'file'
                                ? 'col-md-12'
                                : 'col-md-6'
                            "
                            v-for="(i, index) in element.data"
                            :key="index"
                          >
                            <!-- Image  -->
                            <transition name="fade">
                              <div
                                class="mb-3"
                                v-if="element.data[index].c_element == 'image'"
                              >
                                <img
                                  :src="
                                    'https://api-cm.all-inedu.com/' +
                                    element.data[index].image_path
                                  "
                                  class="image-element-add"
                                  alt="Element"
                                  v-if="element.data[index].image_path"
                                />
                                <small class="text-primary fw-bold"
                                  >Image Element</small
                                >
                                <div
                                  class="float-end"
                                  v-if="!edit"
                                  @click="removeField(index, element.data)"
                                >
                                  <vue-feather
                                    class="pointer"
                                    type="trash-2"
                                    size="20"
                                    stroke="red"
                                  ></vue-feather>
                                </div>
                                <small class="text-muted d-block mb-2"
                                  >Insert an image</small
                                >
                                <input
                                  type="file"
                                  :ref="'image_' + index"
                                  class="form-control"
                                  placeholder="Select the image"
                                  @change="previewImage(index)"
                                />
                              </div>
                            </transition>

                            <!-- Video  -->
                            <transition name="fade">
                              <div
                                class="mb-3"
                                v-if="element.data[index].c_element == 'video'"
                              >
                                <span v-html="element.data[index].video_link">
                                </span>

                                <small class="text-primary fw-bold"
                                  >Video Element</small
                                >
                                <div
                                  class="float-end"
                                  v-if="!edit"
                                  @click="removeField(index, element.data)"
                                >
                                  <vue-feather
                                    class="pointer"
                                    type="trash-2"
                                    size="20"
                                    stroke="red"
                                  ></vue-feather>
                                </div>
                                <small class="text-muted d-block mb-2">
                                  Insert a video from YouTube
                                </small>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Paste Youtube video link here"
                                  v-model="element.data[index].video_link"
                                />
                              </div>
                            </transition>

                            <!-- Text  -->
                            <transition name="fade">
                              <div
                                class="mb-3"
                                v-if="element.data[index].c_element == 'text'"
                              >
                                <small class="text-primary fw-bold"
                                  >Text Element</small
                                >
                                <div
                                  class="float-end"
                                  v-if="!edit"
                                  @click="removeField(index, element.data)"
                                >
                                  <vue-feather
                                    class="pointer"
                                    type="trash-2"
                                    size="20"
                                    stroke="red"
                                  ></vue-feather>
                                </div>
                                <small class="text-muted d-block">
                                  Type your description below
                                </small>
                                <div class="my-2"></div>
                                <editor
                                  v-if="element.data[index].c_element == 'text'"
                                  v-model="element.data[index].description"
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
                            </transition>

                            <!-- Upload file  -->
                            <transition name="fade">
                              <div
                                class="mb-3"
                                v-if="element.data[index].c_element == 'file'"
                              >
                                <small class="text-primary fw-bold"
                                  >Upload File Element</small
                                >
                                <div
                                  class="float-end"
                                  v-if="!edit"
                                  @click="removeField(index, element.data)"
                                >
                                  <vue-feather
                                    class="pointer"
                                    type="trash-2"
                                    size="20"
                                    stroke="red"
                                  ></vue-feather>
                                </div>
                                <small class="text-muted d-block"
                                  >Type your question below</small
                                >
                                <div class="my-2"></div>
                                <div class="mb-3">
                                  <editor
                                    v-model="element.data[index].question"
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
                                <div v-if="element.data[index].file_path">
                                  <a
                                    target="_blank"
                                    :href="
                                      'https://api-cm.all-inedu.com/' +
                                      element.data[index].file_path
                                    "
                                    download
                                  >
                                    Download
                                  </a>
                                </div>
                                <small class="text-muted d-block mb-2">
                                  Upload your worksheet below
                                </small>
                                <input
                                  type="file"
                                  :ref="'file_' + index"
                                  class="form-control"
                                  placeholder="Select the file"
                                  @change="previewFile(index)"
                                />
                              </div>
                            </transition>

                            <!-- Multiple choice -->
                            <transition name="fade">
                              <div
                                class="mb-3"
                                v-if="
                                  element.data[index].c_element == 'multiple'
                                "
                              >
                                <small class="text-primary fw-bold"
                                  >Multiple Choice Element</small
                                >
                                <div
                                  class="float-end"
                                  v-if="!edit"
                                  @click="removeField(index, element.data)"
                                >
                                  <vue-feather
                                    class="pointer"
                                    type="trash-2"
                                    size="20"
                                    stroke="red"
                                  ></vue-feather>
                                </div>
                                <small class="text-muted d-block"
                                  >Type your question below</small
                                >
                                <div class="my-2"></div>
                                <editor
                                  v-model="element.data[index].question"
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
                                <div class="my-2 mt-3">
                                  <small class="text-muted d-block"
                                    >Type the answer options below and press the
                                    radio button for the correct answer</small
                                  >
                                </div>
                                <div class="row">
                                  <div
                                    class="col-md-6 align-items-center"
                                    v-for="(i, key) in 4"
                                    :key="key"
                                  >
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="
                                        element.data[index].answer_in_array[key]
                                          .answer
                                      "
                                    />
                                    <div class="text-center">
                                      <small
                                        :class="
                                          key == 0
                                            ? 'text-success d-block'
                                            : 'text-danger d-block'
                                        "
                                      >
                                        <span v-if="key == 0">
                                          Correct Answer
                                        </span>
                                        <span v-if="key > 0">
                                          Wrong Answer
                                        </span>
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>

                            <!-- Fill in the blanks  -->
                            <transition name="fade">
                              <div
                                class="mb-3"
                                v-if="element.data[index].c_element == 'blank'"
                              >
                                <small class="text-primary fw-bold"
                                  >Fill-in the Blanks Element</small
                                >
                                <div
                                  class="float-end"
                                  v-if="!edit"
                                  @click="removeField(index, element.data)"
                                >
                                  <vue-feather
                                    class="pointer"
                                    type="trash-2"
                                    size="20"
                                    stroke="red"
                                  ></vue-feather>
                                </div>
                                <small class="text-muted d-block"
                                  >Type your question below</small
                                >
                                <div class="my-2"></div>
                                <div class="mb-3">
                                  <editor
                                    v-model="element.data[index].question"
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
                                <div class="row">
                                  <small class="text-muted d-block"
                                    >Mark an answer as correct, if the
                                    answer</small
                                  >
                                  <div class="col-4">
                                    <select
                                      class="form-select"
                                      :change="
                                        typeBlank(
                                          element.data[index].type_blank
                                        )
                                      "
                                      v-model="element.data[index].type_blank"
                                    >
                                      <option value="is exactly">
                                        is exactly
                                      </option>
                                      <option value="is number">
                                        exact number
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      :type="typeInput"
                                      class="form-control"
                                      v-model="
                                        element.data[index].answer_correct
                                      "
                                    />
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </div>

                          <div class="col-md-12">
                            <div class="float-start">
                              <button
                                type="button"
                                class="btn btn-admin btn-warning btn-sm mx-0"
                                @click="closeForm"
                              >
                                Back to List
                              </button>
                            </div>
                            <div class="float-end" v-if="element.data">
                              <button
                                type="submit"
                                class="btn btn-admin btn-primary btn-sm mx-0"
                                v-if="!edit"
                              >
                                Save an Element
                              </button>
                              <button
                                type="button"
                                @click="deleteElement(element.element_id)"
                                class="
                                  btn btn-admin btn-danger btn-sm
                                  mx-0
                                  me-2
                                "
                                v-if="edit"
                              >
                                Delete Element
                              </button>
                              <button
                                type="submit"
                                class="btn btn-admin btn-primary btn-sm mx-0"
                                v-if="edit"
                              >
                                Update Element
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </transition>

                <div class="mt-3" v-if="!addElement">
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
                  <div class="float-end">
                    <button
                      @click="preview"
                      class="btn btn-admin btn-primary mx-0"
                    >
                      Preview
                      <vue-feather
                        class="ps-2"
                        type="arrow-right-circle"
                      ></vue-feather>
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
import qs from "qs";

export default {
  name: "element",
  components: {
    VueFeather,
  },
  data() {
    return {
      addElement: false,
      edit: false,
      typeInput: "text",
      user: [],
      module: [],
      outline: [],
      part: [],
      element_data: [],
      order_element: [],
      element: {
        part_id: "",
        module_id: this.$route.params.module_id,
        data: [],
      },
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
      this.$router.push({
        path: "/admin/module/create/" + this.module.id + "/" + this.outline.id,
      });
      this.$emit("check-section", 3);
    },
    getModuleData() {
      this.$axios
        .get(this.$api_url + "module/" + this.$route.params.module_id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.module = response.data.data[0];
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getOutlineData() {
      this.$axios
        .get(
          this.$api_url + "detail/outline/" + this.$route.params.outline_id,
          {
            headers: {
              Authorization: "Bearer " + this.user.token,
            },
          }
        )
        .then((response) => {
          this.outline = response.data.outline;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getPartData(id) {
      this.$axios
        .get(this.$api_url + "detail/part/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.part = response.data.part;
          this.element.part_id = this.part.id;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getElementData(id) {
      this.$axios
        .get(this.$api_url + "element/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.element_data = response.data.element;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    addForm(i = null) {
      this.addElement = true;
      this.edit = false;
      this.element.element_id = "";
      this.element.group = i;
    },
    closeForm() {
      this.addElement = false;
      this.element.data = [];
    },
    addElementField(name, element) {
      if (name == "multiple") {
        element.data.push({
          c_element: name,
          answer_in_array: [
            {
              answer: "",
              value: true,
            },
            {
              answer: "",
              value: false,
            },
            {
              answer: "",
              value: false,
            },
            {
              answer: "",
              value: false,
            },
          ],
        });
      } else {
        element.data.push({
          c_element: name,
        });
      }
      // console.log(this.element);
    },
    removeField(index, element) {
      Swal.fire({
        html: "Are you sure to delete this element?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          element.splice(index, 1);
        }
      });
    },
    typeBlank(type) {
      if (type == "is exactly") {
        this.typeInput = "text";
      } else {
        this.typeInput = "number";
      }
    },
    previewImage(index) {
      const file = this.$refs["image_" + index];
      this.element.data[index].file = file.files[0];
    },
    previewFile(index) {
      const file = this.$refs["file_" + index];
      this.element.data[index].file = file.files[0];
    },
    saveElement() {
      // input variable element ke form data
      this.loading();
      let form = new FormData();
      form.append("part_id", this.element.part_id);
      form.append("module_id", this.element.module_id);

      if (this.element.element_id) {
        form.append("element_id", this.element.element_id);
      }
      if (this.element.group) {
        form.append("group", this.element.group);
      }

      for (let i = 0; i < this.element.data.length; i++) {
        form.append(
          "data[" + i + "][category]",
          this.element.data[i].c_element
        );

        // check element text
        if (this.element.data[i].c_element == "text") {
          form.append(
            "data[" + i + "][description]",
            this.element.data[i].description
          );

          // check element image
        } else if (this.element.data[i].c_element == "image") {
          form.append("data[" + i + "][file]", this.element.data[i].file);

          // check element video
        } else if (this.element.data[i].c_element == "video") {
          form.append(
            "data[" + i + "][video_link]",
            this.element.data[i].video_link
          );

          // check element upload file
        } else if (this.element.data[i].c_element == "file") {
          form.append(
            "data[" + i + "][question]",
            this.element.data[i].question
          );
          form.append("data[" + i + "][file]", this.element.data[i].file);

          // check element multiple
        } else if (this.element.data[i].c_element == "multiple") {
          form.append(
            "data[" + i + "][question]",
            this.element.data[i].question
          );

          for (let n = 0; n < 4; n++) {
            form.append(
              "data[" + i + "][choices][" + n + "][option]",
              this.element.data[i].answer_in_array[n].answer
            );
            form.append(
              "data[" + i + "][choices][" + n + "][value]",
              this.element.data[i].answer_in_array[n].value
            );
          }

          // check element fill in the blank
        } else if (this.element.data[i].c_element == "blank") {
          form.append(
            "data[" + i + "][question]",
            this.element.data[i].question
          );
          form.append(
            "data[" + i + "][answer]",
            this.element.data[i].answer_correct
          );
          form.append(
            "data[" + i + "][type_blank]",
            this.element.data[i].type_blank
          );
        }
      }

      // Display the key/value pairs
      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      // save element
      this.$axios
        .post(this.$api_url + "element", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          Swal.close();
          this.toast("success", response.data.message);
          this.addElement = false;
          this.getElementData(this.element.part_id);
          this.element.data = [];

          if (response.data.data.progress) {
            this.$emit("check-progress", response.data.data.progress);
          } else {
            this.$emit("check-progress", this.module.progress);
          }
        })
        .catch((error) => {
          Swal.close();
          console.log(error.response.data);
        });

      // alert(this.element);
    },
    generateImage(input) {
      if (input == "text") {
        return "text.png";
      } else if (input == "image") {
        return "image.png";
      } else if (input == "video") {
        return "video.png";
      } else {
        return "question.png";
      }
    },
    generateCElement(input) {
      if (input == "blank") {
        return "Fill-in the Blank";
      } else if (input == "file") {
        return "Upload File";
      } else if (input == "multiple") {
        return "Multiple Choice";
      } else {
        return input;
      }
    },
    editElement(i) {
      this.addElement = true;
      this.edit = true;
      this.$axios
        .get(this.$api_url + "detail/element/" + i, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.element.data = [];
          this.element.element_id = response.data.element.id;
          this.element.data = [
            {
              c_element: response.data.element.category_element,
              description: response.data.element.description,
              image_path: response.data.element.image_path,
              file_path: response.data.element.file_path,
              video_link: response.data.element.video_link,
              question: response.data.element.question,
              file: null,
              answer_in_array: [],
              answer_correct: null,
              type_blank: null,
            },
          ];
          console.log(this.element.data[0]);

          if (response.data.element.elementdetails) {
            if (response.data.element.category_element == "blank") {
              this.element.data[0].answer_correct =
                response.data.element.elementdetails[0].answer;
              this.element.data[0].type_blank =
                response.data.element.elementdetails[0].type_blank;
            } else if (response.data.element.category_element == "multiple") {
              for (i in response.data.element.elementdetails) {
                this.element.data[0].answer_in_array.push({
                  answer: response.data.element.elementdetails[i].answer,
                  value:
                    response.data.element.elementdetails[i].value == 1
                      ? true
                      : false,
                });
              }
            }
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    deleteElement(i) {
      Swal.fire({
        title: "<h5>Are you sure?</h5>",
        html: "Delete this Element",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading();
          this.$axios
            .delete(this.$api_url + "element/" + i, {
              headers: {
                Authorization: "Bearer " + this.user.token,
              },
            })
            .then((response) => {
              console.log(response.data);
              this.toast("success", response.data.message);
              this.addElement = false;
              this.edit = false;
              this.element.data = [];
              this.getElementData(this.element.part_id);
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
      });
    },
    orderElement(row) {
      let form = qs.stringify({
        element_id: row.id,
        part_id: row.part_id,
        group: row.group,
        new_order: row.order,
      });

      this.$axios
        .put(this.$api_url + "order/element", form, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          Swal.close();
          this.toast("success", response.data.message);
          this.getElementData(this.element.part_id);
        })
        .catch((error) => {
          Swal.close();
          console.log(error.response.data);
        });
    },
    preview() {
      this.$emit("check-section", 5);
    },
  },
  watch: {
    $route(to) {
      this.getPartData(to.params.part_id);
      this.getElementData(to.params.part_id);
    },
  },
  created() {
    this.user = this.$auth.check();

    if (this.user) {
      this.getModuleData();
      this.getOutlineData();

      if (this.$route.params.part_id) {
        this.getPartData(this.$route.params.part_id);
        this.getElementData(this.$route.params.part_id);
      }
    }
  },
};
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 0.9s ease;
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

.border-element:hover {
  border: 1px solid #5073e9 !important;
}

.card-element {
  /* background: url("~@/assets/admin/card-element.jpg") !important; */
  background: rgb(231, 231, 231);
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid #ececec;
  transition: all 0.6s ease;
  cursor: pointer;
}

.card-element:hover {
  border: 3px solid #5073e9;
}

.sort-element {
  border-radius: 10px;
  padding: 3px 5px;
  margin: 5px;
  background: white;
  position: absolute;
  color: #414141;
}

.image-element {
  width: 30%;
  margin-bottom: 20px;
  display: block;
}

.image-element-add {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
</style>