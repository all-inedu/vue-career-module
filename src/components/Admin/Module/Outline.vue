<template>
  <div id="outline">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h3>Outline of</h3>
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
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
                          @click="saveOutline()"
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
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
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
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
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
                          placeholder="Outline title"
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
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
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
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
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
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
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
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
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <vue-feather
                          class="pointer"
                          type="arrow-right-circle"
                          fill="green"
                          stroke="white"
                          size="30"
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
export default {
  name: "outline",
  components: {
    VueFeather,
  },
  data() {
    return {};
  },
  methods: {
    previous() {
      this.$emit("check-section", 1);
    },
    saveOutline() {
      this.$emit("check-section", 3);
    },
  },
};
</script>