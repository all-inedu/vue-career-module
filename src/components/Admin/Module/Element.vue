<template>
  <div id="element">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h3 class="m-0">Element of</h3>
                <hr />
                <transition name="fade">
                  <div class="row justify-content-center" v-if="!addElement">
                    <div class="col-md-6">
                      <div class="border-add pointer">
                        <div class="container">
                          <div class="row g-2 align-items-stretch">
                            <div class="col my-1">
                              <div
                                class="border p-3 h-100 border-element"
                                @click="addForm('desc')"
                              >
                                <vue-feather
                                  class="pe-2"
                                  type="plus-circle"
                                ></vue-feather>
                                <h6 class="m-0">Add an Element</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>

                <transition name="fade">
                  <div
                    class="row justify-content-center my-3"
                    v-if="!addElement"
                  >
                    <div class="col-md-12">
                      <ul class="list-group">
                        <li class="list-group-item" v-for="i in 5" :key="i">
                          <span class="badge rounded-pill bg-primary me-2">
                            {{ i }}
                          </span>
                          Lorem ipsum
                          <div class="float-end">
                            <span class="badge rounded-pill bg-dark me-2">
                              Description
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>

                <transition name="fade">
                  <div
                    class="row justify-content-center my-3"
                    v-if="addElement"
                  >
                    <div class="col-md-12 mb-3">
                      <div class="row align-items-center mb-2">
                        <div class="col">
                          <h5 class="text-start">Title</h5>
                        </div>
                        <div class="col">
                          <div class="text-end">
                            <button
                              class="btn btn-danger btn-sm mx-0"
                              @click="closeForm"
                            >
                              Back to List
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr class="my-0 mb-3" />
                      <div
                        class="col-md-12 py-2 text-center bg-white sticky-top"
                        style="top: 93px"
                      >
                        <button
                          class="btn btn-sm btn-primary mx-1 my-1"
                          @click="addElementField('text', element)"
                        >
                          <vue-feather type="plus"></vue-feather>
                          Text
                        </button>
                        <button
                          class="btn btn-sm btn-primary mx-1 my-1"
                          @click="addElementField('image', element)"
                        >
                          <vue-feather type="plus"></vue-feather>
                          Image
                        </button>
                        <button
                          class="btn btn-sm btn-primary mx-1 my-1"
                          @click="addElementField('video', element)"
                        >
                          <vue-feather type="plus"></vue-feather>
                          Video
                        </button>
                        <button
                          class="btn btn-sm btn-primary mx-1 my-1"
                          @click="addElementField('file', element)"
                        >
                          <vue-feather type="plus"></vue-feather>
                          Upload File
                        </button>
                        <button
                          class="btn btn-sm btn-primary mx-1 my-1"
                          @click="addElementField('multiple', element)"
                        >
                          <vue-feather type="plus"></vue-feather>
                          Multiple Choice
                        </button>
                        <button
                          class="btn btn-sm btn-primary mx-1 my-1"
                          @click="addElementField('blank', element)"
                        >
                          <vue-feather type="plus"></vue-feather>
                          Fill-in the Blanks
                        </button>
                        <hr class="my-3" />
                      </div>

                      <div class="row">
                        <div
                          :class="
                            element[index].c_element == 'text' ||
                            element[index].c_element == 'multiple' ||
                            element[index].c_element == 'blank' ||
                            element[index].c_element == 'file'
                              ? 'col-md-12'
                              : 'col-md-6'
                          "
                          v-for="(i, index) in element"
                          :key="index"
                        >
                          <!-- Image  -->
                          <transition name="fade">
                            <div
                              class="mb-3"
                              v-if="element[index].c_element == 'image'"
                            >
                              <small class="text-primary fw-bold"
                                >Image Element</small
                              >
                              <div
                                class="float-end"
                                @click="removeField(index, element)"
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
                                class="form-control"
                                placeholder="Select the image"
                              />
                            </div>
                          </transition>

                          <!-- Video  -->
                          <transition name="fade">
                            <div
                              class="mb-3"
                              v-if="element[index].c_element == 'video'"
                            >
                              <small class="text-primary fw-bold"
                                >Video Element</small
                              >
                              <div
                                class="float-end"
                                @click="removeField(index, element)"
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
                                type="url"
                                class="form-control"
                                placeholder="Paste Youtube video link here"
                                v-model="element[index].value"
                              />
                            </div>
                          </transition>

                          <!-- Text  -->
                          <transition name="fade">
                            <div
                              class="mb-3"
                              v-if="element[index].c_element == 'text'"
                            >
                              <small class="text-primary fw-bold"
                                >Text Element</small
                              >
                              <div
                                class="float-end"
                                @click="removeField(index, element)"
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
                                v-if="element[index].c_element == 'text'"
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
                              v-if="element[index].c_element == 'file'"
                            >
                              <small class="text-primary fw-bold"
                                >Upload File Element</small
                              >
                              <div
                                class="float-end"
                                @click="removeField(index, element)"
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
                                  v-model="element[index].value"
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
                              <small class="text-muted d-block mb-2">
                                Upload your worksheet below
                              </small>
                              <input
                                type="file"
                                class="form-control"
                                placeholder="Select the file"
                              />
                            </div>
                          </transition>

                          <!-- Multiple choice -->
                          <transition name="fade">
                            <div
                              class="mb-3"
                              v-if="element[index].c_element == 'multiple'"
                            >
                              <small class="text-primary fw-bold"
                                >Multiple Choice Element</small
                              >
                              <small class="text-muted d-block"
                                >Type your question below</small
                              >
                              <div
                                class="float-end"
                                @click="removeField(index, element)"
                              >
                                <vue-feather
                                  class="pointer"
                                  type="trash-2"
                                  size="20"
                                  stroke="red"
                                ></vue-feather>
                              </div>
                              <div class="my-2"></div>
                              <editor
                                v-model="element[index].value"
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
                                  <div class="input-group mb-3">
                                    <div class="form-check py-2">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="statusAnswer"
                                        :value="key"
                                        v-model="element[index].status"
                                      />
                                    </div>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="element[index].answer[key]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </transition>

                          <!-- Fill in the blanks  -->
                          <transition name="fade">
                            <div
                              class="mb-3"
                              v-if="element[index].c_element == 'blank'"
                            >
                              <small class="text-primary fw-bold"
                                >Fill-in the Blanks Element</small
                              >
                              <div
                                class="float-end"
                                @click="removeField(index, element)"
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
                                  v-model="element[index].value"
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
                                      typeBlank(element[index].type_blank)
                                    "
                                    v-model="element[index].type_blank"
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
                                    v-model="element[index].answer_correct"
                                  />
                                </div>
                              </div>
                            </div>
                          </transition>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
                <div class="mt-3" v-if="!addElement">
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
import Swal from "sweetalert2";
export default {
  name: "element",
  components: {
    VueFeather,
  },
  data() {
    return {
      addElement: false,
      typeInput: "text",
      element: [],
    };
  },
  methods: {
    previous() {
      this.$emit("check-section", 3);
    },
    addForm(name) {
      console.log(name);
      this.addElement = true;
    },
    closeForm() {
      this.addElement = false;
    },
    addElementField(name, element) {
      if (name == "multiple") {
        element.push({ c_element: name, answer: [], status: "" });
      } else {
        element.push({ c_element: name });
      }
      console.log(this.element);
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
    saveElement() {
      console.log(this.test);
      this.$emit("check-section", 1);
    },
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
</style>