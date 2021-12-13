<template>
  <div id="module_detail">
    <v-navbar></v-navbar>

    <div class="container mt-3">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h2>DIGITAL MARKETING</h2>
              <p class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                quibusdam ut in officia, eius exercitationem consequuntur
                possimus quod debitis quis eos accusantium vel minima omnis
                cupiditate molestiae. Officia, deserunt quod?
              </p>
            </div>
          </div>
          <div
            class="alert alert-warning alert-dismissible fade show mt-2"
            role="alert"
          >
            This module consists of all the <b>background information</b> on
            <b> Digital Marketing Specialist</b> as a career, 2 (two)
            <b>case studies</b> and a final reflection. Complete all sections
            <b>in order</b> . Refer to Glossary and Additional Resources when
            necessary.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mt-4">
        <div class="col-md-3">
          <div class="card">
            <ul class="list-group" id="sidebar-list">
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="fas fa-tachometer fa-fw"></i>
                  Introduction <i class="" id="dm-iconPart1"></i>
                </a>
              </li>
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="fas fa-tasks fa-fw"></i>
                  Core Tasks <i class="" id="dm-iconPart2"></i>
                </a>
              </li>
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="fas fa-tag fa-fw"></i>
                  Types <i class="" id="dm-iconPart3"></i>
                </a>
              </li>
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="fas fa-bezier-curve fa-fw"></i>
                  Pathway <i class="" id="dm-iconPart4"></i>
                </a>
              </li>
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="fas fa-marker fa-fw"></i>
                  Case Studies <i class="" id="dm-iconPart5"></i>
                </a>
              </li>
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="far fa-file-alt fa-fw"></i>
                  Reflection <i class="" id="dm-iconPart6"></i>
                </a>
              </li>
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="fas fa-book fa-fw"></i>
                  Glossary <i class=""></i>
                </a>
              </li>
              <li class="list-group-item">
                <a class="sidebar-elements text-uppercase">
                  <i class="fas fa-link fa-fw"></i>
                  Additional Resources <i class=""></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>
<script>
import hNavbar from "@/components/Home/Navbar";
import hFooter from "@/components/Home/Footer";

export default {
  name: "module_detail",
  components: {
    "v-navbar": hNavbar,
    "v-footer": hFooter,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.desc {
  font-size: 16px;
}
</style>