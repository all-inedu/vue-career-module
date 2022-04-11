<template>
  <div class="resources">
    <hNavbar></hNavbar>

    <div class="container mt-5" v-if="!show">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <vue-feather type="loader" animation="spin" size="50"></vue-feather>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="show">
        <!-- <hBanner></hBanner> -->
        <!-- Description  -->

        <div class="container">
          <div class="row">
            <div class="col-md-12">
                <div class="text-left my-md-5 px-md-5 px-2">
                    <h1 class="resources-title">Resources</h1>
                    <p style="font-size: 2em" class="fst-normal">
                        Here, you will find the files, worksheets, links, and other resources that you will need throughout the career exploration journey.
                    </p>
                    <p style="font-size: 1.3em">
                        <b>Start </b>by downloading the documents below: <br /><br />
                            <ul style="padding-left: 4vh;">
                                <li>
                                    Career Exploration Guidebook: your go-to guidebook for your entire exploration process. 
                                    You can also access the resources below by clicking on the links found in the roadmap
                                </li>
                                <li>
                                    Initial Reflection: complete this quiz to find your potential career paths to explore. 
                                    There are two assessments to be filled: <a href="/file/resources-xlsx/Final-Initial Reflection Career Module.xlsx" class="resources-xlsx" download target="_blank">
                                        one by you </a> , and <a href="/file/resources-xlsx/Final-Other Person Reflections Career Module.xlsx" class="resources-xlsx" download target="_blank">
                                        one by your closest relative </a>  
                                    (ask your parent(s)/friend/relatives that knows you well.
                                </li>
                                <li>
                                    <a href="/file/career-bank-list/Final-Career Bank List.pdf" class="resources-xlsx" download target="_blank">
                                        Career List</a>: Refer to this list after you completed the Initial Reflection. 
                                    Use them as a guidance to check the Career Fact Sheets and YouTube Playlist below.
                                </li>
                                
                            </ul>
                    </p>
                    <p style="font-size: 1.3em">
                        <b>Phase 1  </b><br />
                          <ul style="padding-left: 4vh;">
                              <li class="mb-3">
                                  Career Fact Sheets: an overview of the top 50 careers, including their core tasks, 
                                  average salary, needed skills, job prospects, and others. <br>
                                  <span v-if="readMore"></span><span v-else></span>
                                  <div class="row" v-show="readMore">
                                    <div class="col-md-12 mt-4">
                                      <transition name="fade">
                                        <hCareerModule></hCareerModule>
                                      </transition>
                                    </div>
                                  </div>
                                  <button class="btn btn-career" @click="readMore =! readMore">
                                    <span v-if="readMore">Read Less</span>
                                    <span v-else>Read More</span>
                                  </button>
                              </li>
                              <li class="mb-3">
                                  YouTube playlist: a curated playlist that corresponds to the Career List, that will 
                                  help you understand the day-to-day activities of a particular career. <br>
                                  <span v-if="youtubePlaylist"></span><span v-else></span>
                                  <div class="row" v-show="youtubePlaylist">
                                    <div class="col-md-12 mt-4">
                                      <transition name="fade">
                                        <hYoutubePlaylist></hYoutubePlaylist>
                                      </transition>
                                    </div>
                                  </div>
                                  <button class="btn btn-career" @click="youtubePlaylist =! youtubePlaylist">
                                    <span v-if="youtubePlaylist">Read Less</span>
                                    <span v-else>Youtube Playlist</span>
                                  </button>

                              </li>
                              <li>
                                  <a href="/file/resources-xlsx/Final-End of Phase 1 Reflection Career Module.xlsx" class="resources-xlsx" download target="_blank">
                                        End Of Phase 1 Reflection</a>: complete the Talent-Interest Matching to see how much your talent, 
                                  interest and personality aligns with the career of your choice.
                              </li>
                          </ul>
                    </p>
                    <p style="font-size: 1.3em">
                        <b>Phase 2 </b><br />
                          <ul style="padding-left: 4vh;">
                              <li>
                                  <a href="/file/resources-xlsx/Final-End of Phase 2 Reflection Career Module.xlsx" class="resources-xlsx" download target="_blank">
                                        End Of Phase 2 Reflection</a>: identify the current skill and knowledge gap between you and the dream career, 
                                  which will at the end help you choose your major(s).
                              </li>
                              
                          </ul>
                    </p>
                </div>
            </div>
            
          </div>
        </div>



        <!-- About Us  -->
        <!-- <div class="container mt-5">
          <div class="row mt-4 justify-content-center">
            <div class="col-md-8 text-center mb-3">
              <h3>ABOUT US</h3>
              <hr />
              <h5 class="text-xl font-semibold text-darkblue px-md-5">
                We are an independent university consultant based in Jakarta,
                Indonesia. Our mission is to ensure that students are thriving
                into the path they aspire to have in the future.<br />
              </h5>
            </div>
          </div>
          <div class="row row-cols-md-3 row-cols-2">
            <div class="col text-center mb-3">
              <img
                src="../../assets/home/about/Icon_1.png"
                class="about-icon"
              /><br />
              <span>100% Students placed<br />at target universities</span>
            </div>
            <div class="col text-center mb-3">
              <img
                src="../../assets/home/about/Icon_2.png"
                class="about-icon"
              /><br />
              <span>More than 40<br />School Clients</span>
            </div>
            <div class="col text-center mb-3">
              <img
                src="../../assets/home/about/Icon_3.png"
                class="about-icon"
              /><br />
              <span>More than 1,000<br />Esays Reviewed</span>
            </div>
            <div class="col text-center mb-3">
              <img
                src="../../assets/home/about/Icon_4.png"
                class="about-icon"
              /><br />
              <span>More than 50<br />Corporate Partners</span>
            </div>
            <div class="col text-center mb-3">
              <img
                src="../../assets/home/about/Icon_5.png"
                class="about-icon"
              /><br />
              <span>150+ Point SAT<br />Score Improvement</span>
            </div>
            <div class="col text-center mb-3">
              <img
                src="../../assets/home/about/Icon_6.png"
                class="about-icon"
              /><br />
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
        </div> -->

        <hFooter></hFooter>
      </div>
    </transition>

    <Auth :show="showLogin"></Auth>
// test
  </div>
</template>



<script>
// @ is an alias to /src
import Auth from "@/components/Home/Auth/Auth";
import hNavbar from "@/components/Home/Navbar";
import hCareerModule from "@/components/Home/CareerModule";
import hYoutubePlaylist from "@/components/Home/YoutubePlaylist";
// import hBanner from "@/components/Home/Banner";
// import hModule from "@/components/Home/Modules";
import hFooter from "@/components/Home/Footer";

import VueFeather from "vue-feather";

export default {
  name: "Resources",
  components: {
    Auth,
    hNavbar,
    hCareerModule,
    hYoutubePlaylist,
    // hBanner,
    // hModule,
    hFooter,
    VueFeather,
  },
  data() {
    return {
      show: false,
      showLogin: false,
      reflection: false,
      showModal: false,
      readMore: false,
      youtubePlaylist: false,
    };
  },
  methods: {
    guideline() {
      this.showModal = true;
      this.reflection = true;
    },
  },
  created() {
    document.title = "Career Exploration Module";
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
};
</script>

<style scoped>
.about-icon {
  width: 20%;
}
.resources-xlsx{
  color: #eeaa56;
  text-decoration: none;
}

.btn-career {
  background: #243672;
  border-radius: 30px;
  padding: 1px 10px !important;
  cursor: pointer;
  margin-left: 0;
  color: #ffffff !important;
  transition: all 0.4s ease;
  font-weight: bold;
}

.btn-career:hover {
  background: #eeaa56;
}

.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.resources-title {
  width: 70%;
  font-size: 3.8em;
  color: #223872;
  font-weight: bold;
  margin-bottom: 2%;
}

h5 {
  line-height: 1.5em;
}
</style>