<template>
  <div class="home">
    <hNavbar></hNavbar>
    <hBanner></hBanner>
    <!-- Description  -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center my-5 px-5">
            <p style="font-size: 24px" class="fst-italic">
              Are you currently trying to figure out what you want as a career
              in the future?
            </p>
            <p style="font-size: 20px">
              Career Exploration Module is here to provide you the space to
              discover various job roles and industries of your interest. Learn
              the basic knowledge of each career and how to implement them
              through hands-on learning experience here.<br /><br />
              <b
                >Let’s walk on your career exploration journey with Career
                Exploration Module!</b
              >
            </p>
          </div>
          <div class="text-center">
            <button @click="guideline" class="btn btn-allin">
              Start Your Journey
            </button>

            <!-- <a
              href="{{ asset('file/Initial Reflection.xlsx') }}"
              class="text-decoration-none"
              id="reflection-btn"
            > -->
            <a
              href="/file/Initial Reflection.xlsx"
              download
              v-if="reflection"
              class="btn btn-allin-blue"
            >
              Reflection
            </a>
            <!-- </a> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <transition name="fade" appear>
      <div
        class="vue-modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="fade" appear>
      <div class="vue-modal animate__animated animate__fadeIn" v-if="showModal">
        <div class="modal-header justify-content-center">
          <h5 class="modal-title">Guideline Book</h5>
        </div>
        <div class="modal-body" style="text-align: justify">
          Before starting your career exploration journey, make sure to read our
          CAREER EXPLORATION GUIDEBOOK
          <ul class="mt-2" style="margin-left: -10px">
            <li>Career Roadmap</li>
            <li>Understanding breadth, depth, and choosing university major</li>
          </ul>
        </div>
        <div class="modal-footer justify-content-center">
          <a
            href="/file/CAREER_EXPLORATION_GUIDELINES.pdf"
            download
            class="my-2 btn btn-primary btn-allin"
            >Download the GUIDEBOOK</a
          >
        </div>
      </div>
    </transition>

    <hModule></hModule>

    <!-- About Us  -->
    <div class="container mt-5">
      <div class="row mt-4 justify-content-center">
        <div class="col-md-8 text-center mb-3">
          <h3>ABOUT US</h3>
          <hr />
          <p class="text-xl font-semibold text-darkblue px-md-5">
            We are an independent university consultant based in Jakarta,
            Indonesia. Our mission is to ensure that students are thriving into
            the path they aspire to have in the future.<br />
          </p>
        </div>
      </div>
      <div class="row row-cols-md-3 row-cols-2">
        <div class="col text-center mb-3">
          <img src="../assets/home/about/Icon_1.png" class="about-icon" /><br />
          <span>100% Students placed<br />at target universities</span>
        </div>
        <div class="col text-center mb-3">
          <img src="../assets/home/about/Icon_2.png" class="about-icon" /><br />
          <span>More than 40<br />School Clients</span>
        </div>
        <div class="col text-center mb-3">
          <img src="../assets/home/about/Icon_3.png" class="about-icon" /><br />
          <span>More than 1,000<br />Esays Reviewed</span>
        </div>
        <div class="col text-center mb-3">
          <img src="../assets/home/about/Icon_4.png" class="about-icon" /><br />
          <span>More than 50<br />Corporate Partners</span>
        </div>
        <div class="col text-center mb-3">
          <img src="../assets/home/about/Icon_5.png" class="about-icon" /><br />
          <span>150+ Point SAT<br />Score Improvement</span>
        </div>
        <div class="col text-center mb-3">
          <img src="../assets/home/about/Icon_6.png" class="about-icon" /><br />
          <span>More than 1,500<br />Event Participants</span>
        </div>
      </div>
      <br /><br />
      <div class="text-center mt-4">
        <a href="https://all-inedu.com/about">
          <button class="btn btn-allin text-white py-2 px-4 font-bold">
            Find Out More
          </button>
        </a>
      </div>
    </div>
    <hFooter></hFooter>

    <Auth :show="showLogin"></Auth>
  </div>
</template>

<script>
// @ is an alias to /src
import Auth from "@/components/Home/Auth/Auth";
import hNavbar from "@/components/Home/Navbar";
import hBanner from "@/components/Home/Banner";
import hModule from "@/components/Home/Modules";
import hFooter from "@/components/Home/Footer";

export default {
  name: "Home",
  components: {
    Auth,
    hNavbar,
    hBanner,
    hModule,
    hFooter,
  },
  data() {
    return {
      showLogin: false,
      reflection: false,
      showModal: false,
    };
  },
  methods: {
    guideline() {
      this.showModal = true;
      this.reflection = true;
    },
  },
  created() {
    // sessionStorage.removeItem("user");
    // console.log(sessionStorage.getItem("user"));
  },
};
</script>

<style scoped>
.about-icon {
  width: 20%;
}
</style>