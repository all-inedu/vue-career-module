<template>
  <div id="activity">
    <div class="row mt-3 g-0">
      <div class="col-md-12 mx-0">
        <div class="card shadow">
          <div class="card-body">
            <h4>My Activity</h4>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h6 class="text-center">Ongoing</h6>
                    <hr class="mt-0" />
                    <div
                      class="card card-module mb-3"
                      v-for="c in module.ongoing"
                      :key="c"
                    >
                      <div class="row g-0">
                        <div class="col-md-4 bg-ongoing p-3">
                          <div class="module-name">
                            {{ c.module_name }}
                          </div>
                          <div class="border-top border-white module-category">
                            <small>
                              {{ c.category_name }}
                            </small>
                          </div>
                          <div class="module-taken">
                            {{ formatDate(c.taken_module) }}
                          </div>
                        </div>
                        <div class="col-md-8 p-3">
                          <div class="module-progress">
                            <div class="progress" style="height: 8px">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                :style="'width:' + c.percentage + '%'"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div class="row module-outline">
                            <div class="col-6 mb-3 text-start">
                              {{ c.section_name }}
                            </div>
                            <div class="col-6 text-end">
                              {{ Math.round(c.percentage) }} %
                            </div>
                          </div>
                          <div class="module-part">
                            {{ c.current_part_name }}
                          </div>
                          <button
                            class="
                              btn btn-sm btn-primary
                              rounded-pill
                              float-end
                              mx-0
                            "
                            @click="continueModule(c.slug, c.outline_id)"
                          >
                            Continue
                            <vue-feather
                              type="arrow-right"
                              size="18"
                            ></vue-feather>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="text-center mt-3 text-muted"
                      v-if="module.ongoing_count == 0"
                    >
                      You haven't taken the module
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h6 class="text-center">Completed</h6>
                    <hr class="mt-0" />
                    <div
                      class="card card-module mb-3"
                      v-for="c in module.completed"
                      :key="c"
                    >
                      <div class="row g-0">
                        <div class="col-md-4 bg-completed p-3">
                          <div class="module-name">
                            {{ c.module_name }}
                          </div>
                          <div class="border-top border-white module-category">
                            <small>
                              {{ c.category_name }}
                            </small>
                          </div>
                          <div class="module-taken">
                            {{ formatDate(c.taken_date) }}
                          </div>
                        </div>
                        <div class="col-md-8 p-3">
                          <div class="module-progress">
                            <div class="progress" style="height: 8px">
                              <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                :style="'width:' + c.percentage + '%'"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div class="row module-outline">
                            <div class="col-8 mb-3 text-start">
                              {{ c.section_name }}
                            </div>
                            <div class="col-4 text-end">
                              {{ Math.round(c.percentage) }} %
                            </div>
                          </div>
                          <div class="module-part">
                            {{ c.current_part_name }}
                          </div>
                          <div class="float-md-start text-center mb-2">
                            <button
                              class="btn btn-sm btn-warning rounded-pill mx-0"
                              @click="viewAnswer(c.slug)"
                            >
                              <vue-feather
                                type="clipboard"
                                class="me-2"
                                size="20"
                              ></vue-feather>
                              View Answer
                            </button>
                          </div>
                          <div class="float-md-end text-center">
                            <button
                              class="btn btn-sm btn-primary rounded-pill mx-0"
                              @click="continueModule(c.slug)"
                            >
                              <vue-feather
                                type="book-open"
                                class="me-2"
                                size="20"
                              ></vue-feather>
                              Read Again
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="text-center mt-3 text-muted"
                      v-if="module.completed_count == 0"
                    >
                      You haven't taken the module
                    </div>
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
import VueFeather from "vue-feather";
import moment from "moment";
export default {
  name: "activity",
  components: {
    VueFeather,
  },
  data() {
    return {
      user: [],
      module: {
        ongoing_count: "",
        ongoing: [],
        completed_count: "",
        completed: [],
      },
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("LLL");
    },
    getOngoingModule() {
      // console.log(this.user);
      this.$axios
        .get(this.$api_url + "act/latest/read", {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          // Onprogress Module
          this.module.ongoing_count = response.data.onprogress.length;
          this.module.ongoing = response.data.onprogress;

          // Completed Module
          this.module.completed_count = response.data.completed.length;
          this.module.completed = response.data.completed;

          this.$emit("check-data", this.module);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    continueModule(slug, outline_id) {
      if (!outline_id) {
        this.$router.push({ path: "/module/" + slug });
      } else {
        this.$router.push({
          path: "/module/" + slug + "/" + outline_id,
        });
      }
    },
    viewAnswer(slug) {
      this.$router.push({
        path: "/user/module/answer/" + slug,
      });
    },
  },
  created() {
    this.user = this.$auth.user_data();
    this.getOngoingModule();
  },
};
</script>
<style>
.bg-ongoing {
  background: rgb(204, 122, 14);
  color: #fff;
  border-radius: 10px 0 0 10px;
}

.bg-completed {
  background: #2c265e;
  color: #fff;
  border-radius: 10px 0 0 10px;
}

.card-module {
  border-radius: 10px;
}

.module-name {
  font-size: 1.1em;
  font-weight: bold;
}

.module-category {
  font-size: 0.9em;
}

.module-taken {
  position: absolute;
  bottom: 15px;
  font-size: 0.7em;
}

.module-outline {
  margin-top: 5px;
}

.module-part {
  margin-top: -15px;
  margin-bottom: 20px;
  position: relative;
  z-index: 10;
  font-size: 1.1em;
  font-weight: bold;
  color: rgb(53, 53, 53);
}

.module-percentage {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 3em;
  font-weight: bold;
  z-index: 9;
  color: rgba(53, 53, 53, 0.116);
}

@media screen and (max-width: 600px) {
  .module-taken {
    margin-top: 20px;
    position: relative;
  }

  .bg-ongoing,
  .bg-completed {
    border-radius: 10px 10px 0 0;
  }

  .module-percentage {
    top: 10%;
    color: rgba(228, 226, 226, 0.116);
  }
}
</style>