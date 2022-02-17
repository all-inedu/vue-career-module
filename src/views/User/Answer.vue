<template>
  <div id="answer">
    <v-navbar></v-navbar>
    <div class="container mt-5" v-if="!show">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <vue-feather type="loader" animation="spin" size="50"></vue-feather>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="container mt-4 answer" v-if="show">
        <div class="row mx-2">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="mb-3">
                <vue-feather
                  type="arrow-left"
                  class="me-3 pointer"
                  @click="backToDashboard"
                >
                </vue-feather>
                {{ module_data.module_name }}
              </h5>
              <button
                class="btn-warning float-end btn-sm rounded-pill"
                @click="download"
              >
                Download
              </button>
              <br />
              <div class="mb-3"></div>
              <div class="table-responsive">
                <table class="table table-bordered align-middle">
                  <thead>
                    <tr class="text-center">
                      <th class="border-end" width="1%">No</th>
                      <th width="30%">Part Name</th>
                      <th>Question / Answer</th>
                    </tr>
                  </thead>
                  <tbody v-if="outline_length == 0">
                    <tr class="text-center">
                      <td colspan="3" class="py-4">
                        This module has no questions
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-for="outline in module_data.outlines" :key="outline">
                    <tr class="text-center bg-secondary text-white">
                      <td colspan="3">
                        <strong>
                          {{ outline.name }}
                        </strong>
                      </td>
                    </tr>
                    <tr
                      class="text-center"
                      v-for="(part, index) in outline.parts"
                      :key="index"
                    >
                      <td class="border">{{ index + 1 }}</td>
                      <td class="border">{{ part.title }}</td>
                      <td class="border">
                        <div class="table-responsive">
                          <table class="table border mb-0">
                            <tr class="bg-light">
                              <th class="border py-2">Question</th>
                              <th class="border" width="40%">Answer</th>
                            </tr>
                            <tr
                              class="border-1"
                              v-for="element in part.elements"
                              :key="element"
                            >
                              <td
                                class="border text-start"
                                v-html="element.question"
                              ></td>
                              <td class="border">
                                <div v-if="element.category_element == 'blank'">
                                  {{ element.answersdetails[0].answer }}
                                </div>
                                <div
                                  v-if="element.category_element == 'multiple'"
                                >
                                  {{
                                    element.answersdetails[0]
                                      .answer_from_multiple
                                  }}
                                </div>
                                <div v-if="element.category_element == 'file'">
                                  <a
                                    :href="
                                      $base_url +
                                      element.answersdetails[0].file_path
                                    "
                                    class="btn btn-primary btn-sm rounded-pill"
                                    download
                                  >
                                    Your Worksheet
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mt-4" v-if="show">
        <v-footer></v-footer>
      </div>
    </transition>
  </div>
</template>
<script>
import hNavbar from "@/components/User/Navbar";
import hFooter from "@/components/Home/Footer";
import VueFeather from "vue-feather";

export default {
  name: "answer",
  components: {
    "v-navbar": hNavbar,
    "v-footer": hFooter,
    VueFeather,
  },
  data() {
    return {
      user: [],
      show: false,
      module_data: [],
      outline_length: "",
    };
  },
  methods: {
    backToDashboard() {
      this.$router.push({ path: "/user/dashboard" });
    },
    getModuleData(slug) {
      this.$axios
        .get(this.$api_url + "act/view/answer/" + slug, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.module_data = response.data;
          this.outline_length = this.module_data.outlines.length;
          // console.log(this.module_data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    download() {
      window.open(
        "https://api-cm.all-inedu.com/api/v1/module/" +
          this.$route.params.slug +
          "/answer/user/" +
          this.user.id +
          "/download/",
        "_blank"
      );
    },
  },
  created() {
    document.title = "Module Answer";
    this.user = this.$auth.check();

    if (this.$route.params.slug) {
      // console.log(this.$route.params.slug);
      this.getModuleData(this.$route.params.slug);
    }

    setTimeout(() => {
      this.show = true;
    }, 500);
  },
};
</script>
<style>
.answer {
  min-height: 47vh;
}

p {
  margin-bottom: 0px;
}
</style>