<template>
  <div id="Part">
    <!-- LIST PART  -->
    <transition name="fade">
      <div class="row" v-if="part">
        <div class="col-md-12 mt-md-0 mt-3">
          <div class="card">
            <div class="card-body">
              <h4>
                {{ outline_data.outline_name || outline_data.name }}
              </h4>
              <hr class="my-2" />
              <div
                class="row row-cols-md-4 row-cols-1 align-items-stretch mt-3"
                v-if="!load"
              >
                <div
                  class="col mb-3"
                  v-for="(i, index) in part_data"
                  :key="index"
                >
                  <div
                    class="card shadow h-100 card-part"
                    @click="goToElement(i)"
                  >
                    <span class="card-number">
                      {{ index + 1 }}
                    </span>
                    <div class="card-body item">
                      {{ i.part_title }}
                    </div>
                    <div class="px-2 pb-2" v-if="i.percentage > 0">
                      <div class="progress">
                        <div
                          :class="
                            i.percentage + '%' >= '100%'
                              ? 'progress-bar bg-complete'
                              : ' progress-bar bg-ongoing'
                          "
                          role="progressbar"
                          :style="{ width: i.percentage + '%' }"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {{ i.percentage }} %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="load">
                <div class="text-center my-5">
                  <vue-feather
                    type="loader"
                    size="50"
                    animation="spin"
                  ></vue-feather>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- ELEMENT  -->
    <transition name="fade">
      <div class="row" v-if="!part">
        <div class="col-md-12 mt-md-0 mt-3">
          <v-element
            :part="part_default"
            :module_id="module_id"
            @part-element="checkElement"
            @outline="checkOutline"
            @progress="checkProgress"
          ></v-element>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import hElement from "@/components/Home/ModuleDetail/Element";
import VueFeather from "vue-feather";

export default {
  name: "moduleBanner",
  props: {
    outline: Array,
    module_id: String,
    part_show: Boolean,
  },
  components: {
    "v-element": hElement,
    VueFeather,
  },
  data() {
    return {
      user: [],
      load: true,
      outline_data: [],
      part: true,
      part_data: [],
      part_default: [],
      percent: "100%",
      data: [],
    };
  },
  methods: {
    getProp() {
      this.outline_data = this.outline;
      this.part = this.part_show;
    },
    getOutlineData(id) {
      this.$axios
        .get(this.$api_url + "detail/outline/" + id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.outline_data = response.data.outline;
          this.$emit("outline-data", response.data.outline);
          this.getPartData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPartData() {
      this.load = true;
      this.$axios
        .get(this.$api_url + "listen/part/outline/" + this.outline_data.id, {
          headers: {
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.data.part != null) {
            this.load = false;
            this.part_data = response.data.data.part;
          } else {
            this.$router.push({ path: "/" });
            this.$alert.toast("warning", "The module is not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToElement(data) {
      // console.log(data);
      this.part = false;
      this.part_default = data;
    },
    checkOutline(data) {
      this.part = true;
      this.part_data = [];
      this.getOutlineData(data);
    },
    checkElement(data) {
      if (data) {
        this.part = true;
        this.getPartData();
      }
    },
    checkProgress(data) {
      if (data) {
        this.$emit("progress", data);
        // console.log(data);
      }
    },
  },
  beforeUpdate() {
    this.getProp();
    this.getPartData();
  },
  created() {
    this.user = this.$auth.check();
    this.getProp();
    this.getPartData();
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 40px 10px;
}

.card-part {
  background: hsla(226, 52%, 29%, 1);

  background: linear-gradient(
    135deg,
    hsla(226, 52%, 29%, 1) 0%,
    hsla(226, 39%, 49%, 1) 100%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(226, 52%, 29%, 1) 0%,
    hsla(226, 39%, 49%, 1) 100%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(226, 52%, 29%, 1) 0%,
    hsla(226, 39%, 49%, 1) 100%
  );

  color: white;
  font-weight: bold;
  border: 4px solid rgba(255, 255, 255, 0.014);
  transition: all 0.3s ease;
  cursor: pointer;
}

.card-part:hover {
  border-left: 4px solid rgb(218, 139, 49);
}

.card-number {
  position: absolute;
  top: -15px;
  right: 10px;
  font-size: 4em;
  font-weight: 900;
  color: #dedede3b;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.bg-complete {
  background: rgb(58, 233, 58);
  color: #000;
}

.bg-ongoing {
  background: rgb(72, 104, 247);
}
</style>