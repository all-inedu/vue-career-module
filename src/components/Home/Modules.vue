<template>
  <div id="module">
    <div class="container mt-5">
      <div class="card border border-3">
        <div class="card-body p-md-5 pt-3">
          <div class="row">
            <div class="col-md-12 mb-2">
              <div class="text-start">
                <h3 id="career mt-3"><b>Career Choices</b></h3>
                <hr />
              </div>
            </div>
          </div>
          <div class="row g-3 align-items-stretch row-cols-md-5 row-cols-2">
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('digital-marketing-specialist-101')"
              >
                <div class="container2 img-bg">
                  <img
                    src="../../assets/home/icon/Digital-Marketing.webp"
                    class="card-img-top"
                  />
                  <div class="card-text">
                    Digital Marketing <br />Specialist
                  </div>
                </div>
              </div>
            </div>

            <!-- UI/UX Designer  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('uiux-designer')"
              >
                <!-- <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div> -->
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg">
                  <img
                    src="../../assets/home/icon/UX-Designer.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">UI/UX Designer</div>
                </div>
              </div>
            </div>

            <!-- Process Control Engineering  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('process-control-engineer-101-module')"
              >
                <!-- <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div> -->
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg">
                  <img
                    src="../../assets/home/icon/Process-Control-Engineering.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">
                    Process Control <br class="d-md-block d-none" />
                    Engineering
                  </div>
                </div>
              </div>
            </div>

            <!-- Psychologist  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('psychologist-101')"
              >
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg lock-module">
                  <!-- lock-module-->
                  <img
                    src="../../assets/home/icon/Psychologist.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">Psychologist</div>
                </div>
              </div>
            </div>

            <!-- Food Scientist  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('food-scientist')"
              >
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg lock-module">
                  <img
                    src="../../assets/home/icon/Food-Scientist.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">Food Scientist</div>
                </div>
              </div>
            </div>

            <!-- Content Creator  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('content-creator')"
              >
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg lock-module">
                  <img
                    src="../../assets/home/icon/Conten-Creator.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">Content Creator</div>
                </div>
              </div>
            </div>

            <!-- Data Scientist  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('data-scientist-101')"
              >
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg lock-module">
                  <img
                    src="../../assets/home/icon/Data-Scientist.webp"
                    class="card-img-top"
                  />
                  <div class="card-text">Data Scientist</div>
                </div>
              </div>
            </div>

            <!-- Full Stack Dev  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('fullstack-engineer')"
              >
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg lock-module">
                  <img
                    src="../../assets/home/icon/FullStack-Engineer.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">Full Stack Engineering</div>
                </div>
              </div>
            </div>

            <!-- Biomedical Eng  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('biomedical-engineer')"
              >
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg lock-module">
                  <img
                    src="../../assets/home/icon/Biomedical-Engineer.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">Biomedical Engineering</div>
                </div>
              </div>
            </div>

            <!-- Investment Analyst  -->
            <div class="col mb-2">
              <div
                class="card card-allin border-allin"
                @click="getModule('investment-analyst')"
              >
                <div class="lock">
                  <unicon
                    name="lock-access"
                    fill="#233874"
                    icon-style="monochrome"
                  ></unicon>
                </div>
                <div class="container-overflow text-center pt-2"></div>
                <div class="container2 img-bg lock-module">
                  <img
                    src="../../assets/home/icon/Investment-Analyst.webp"
                    class="card-img-top blur"
                  />
                  <div class="card-text blur">Investment Analyst</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Auth :show="showLogin" :close="closeLogin"></Auth>
  </div>
</template>



<script>
import Auth from "@/components/Home/Auth/Auth";

export default {
  name: "Modules",
  components: {
    Auth,
  },
  data() {
    return {
      showLogin: false,
      user: [],
    };
  },
  methods: {
    getModule(slug) {
      if (!this.user) {
        this.showLogin = true;
      } else {
        this.$router.push({ path: "/module/" + slug });
      }
    },
    closeLogin() {
      this.showLogin = false;
    },
  },
  created() {
    this.user = this.$auth.user_data();
  },
};
</script>

<style scoped>
#module {
  margin-top: 2%;
}

a {
  text-decoration: none;
  color: rgb(43, 42, 42);
}

.card-allin {
  box-shadow: 2px 3px 5px #e0e0e0;
  height: 100%;
  padding: 10px 10px 10px 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
}

.card-allin:hover {
  box-shadow: 2px 3px 5px#F5A236;
}
.card-text {
  margin-top: -15%;
}

.card-img-top {
  width: 80%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.card-allin:hover,
.card-img-top:hover {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}

.lock {
  position: absolute;
  right: 5%;
}

.lock-module {
  filter: blur(1px);
  -webkit-filter: blur(1px);
}
</style>