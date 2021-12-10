<template>
  <div id="preview">
    <transition name="fade">
      <div class="container p-md-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card border">
              <div class="card-body">
                <h3 class="my-0">Lorem Ipsum Test</h3>
                <div class="badge badge-pill bg-info">Category</div>
                <h6 class="my-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  alias earum laborum! Quae tempora eos expedita, incidunt minus
                  perferendis sed qui. Obcaecati molestias veritatis maiores,
                  corrupti molestiae modi perferendis dolores!
                </h6>
                <hr class="mb-3" />
                <div v-for="(i, index) in 8" :key="index">
                  <div class="row g-0 mb-3">
                    <div style="width: 35px">
                      <h6>
                        <strong> {{ alphabet[index] }}. </strong>
                      </h6>
                    </div>
                    <div style="width: auto">
                      <h6 class="my-0">
                        <strong> {{ outline_title[index] }} </strong>
                      </h6>
                      <div class="" v-for="n in 2" :key="n">
                        <h6 class="my-0">Part {{ n }} (n Element)</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-2">
            <div class="float-start">
              <button @click="previous" class="btn btn-admin btn-warning mx-0">
                <vue-feather
                  class="pe-2"
                  type="arrow-left-circle"
                ></vue-feather>
                Return
              </button>
            </div>
            <div class="float-end">
              <button @click="publish" class="btn btn-admin btn-primary mx-0">
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
    </transition>
  </div>
</template>
<script>
import VueFeather from "vue-feather";
export default {
  name: "preview",
  components: {
    VueFeather,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
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
      outline_title: [
        "Introduction",
        "Core Tasks",
        "Types",
        "Pathway",
        "Case Studies",
        "Reflection",
        "Glossary",
        "Additional Resources",
      ],
    };
  },
  methods: {
    previous() {
      this.$emit("check-section", 4);
    },
  },
  created() {},
};
</script>
<style scoped>
h6 {
  line-height: 1.5;
}
</style>