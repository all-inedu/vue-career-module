<template>
  <div id="preview">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card border">
              <div class="card-body">
                <h3 class="my-0">{{ module.module_name }}</h3>
                <div class="badge badge-pill bg-info">
                  {{ module.category_name }}
                </div>
                <h6 class="my-0" v-html="module.desc"></h6>
                <hr class="mb-3" />
                <div v-for="(i, index) in module.outline" :key="index">
                  <div class="row g-0 mb-3">
                    <h6 class="my-0 mb-2">
                      <strong class="text-primary">
                        {{ i.section_name }}
                      </strong>
                      <br />
                      <b>{{ i.name }}</b>
                    </h6>
                    <div class="col-md-12">
                      <div
                        class="row row-cols-md-4 row-cols-1 align-items-stretch"
                      >
                        <div class="col mb-3" v-for="n in i.part" :key="n">
                          <div class="card h-100">
                            <div class="card-body text-center">
                              <div class="mb-3">{{ n.title }} <br /></div>

                              <small
                                class="text-muted"
                                style="
                                  position: absolute;
                                  bottom: 10px;
                                  left: 10px;
                                "
                              >
                                Element
                              </small>
                              <small
                                class="badge text-white bg-primary"
                                style="
                                  position: absolute;
                                  bottom: 10px;
                                  right: 10px;
                                "
                              >
                                {{ n.total_element }}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <hr class="my-1 mt-3" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mt-2">
                    <div class="float-start">
                      <button
                        @click="previous(module.id)"
                        class="btn btn-admin btn-warning mx-0"
                      >
                        <vue-feather
                          class="pe-2"
                          type="arrow-left-circle"
                        ></vue-feather>
                        Back to Module
                      </button>
                    </div>
                    <div class="float-end" v-if="module.status == 0">
                      <button
                        @click="publish(module.id, 1)"
                        class="btn btn-admin btn-primary mx-0"
                      >
                        Publish
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
      </div>
    </transition>
  </div>
</template>
<script>
import VueFeather from "vue-feather";
import qs from "qs";
import Swal from "sweetalert2";

export default {
  name: "preview",
  components: {
    VueFeather,
  },
  data() {
    return {
      user: [],
      module: [],
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  methods: {
    previous(id) {
      this.$router.push({ path: "/admin/module/create/" + id });
      this.$emit("check-section", 1);
    },
    getPreviewModule(id) {
      this.$axios
        .get(this.$api_url + "preview/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.module = response.data.module;
          console.log(response.data.module);
        })
        .catch(() => {});
    },
    publish(id, s) {
      let status = qs.stringify({ status: s });

      Swal.fire({
        title: "<h5>Are you sure to publish this module</h5>",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$axios
            .put(this.$api_url + "module/" + id, status, {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=utf-8",
                Authorization: "Bearer " + this.user.token,
              },
            })
            .then((response) => {
              Swal.close();
              this.$alert.toast("success", response.data.message);
              this.getPreviewModule(id);

              if (response.data.data.progress) {
                this.$emit("check-progress", response.data.data.progress);
                this.$emit("check-status", response.data.data.status);
              } else {
                this.$emit("check-progress", this.module.progress);
                this.$emit("check-status", this.module.status);
              }
            })
            .catch((error) => {
              Swal.close();
              console.log(error.response);
            });
        }
      });
    },
  },
  created() {
    this.user = this.$auth.check();

    if (this.user) {
      if (this.$route.params.module_id) {
        this.getPreviewModule(this.$route.params.module_id);
      }
    }
  },
};
</script>
<style scoped>
h6 {
  line-height: 1.5;
}
</style>