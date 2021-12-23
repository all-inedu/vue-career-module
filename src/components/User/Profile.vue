<template>
  <div id="profile">
    <div class="container mt-3">
      <transition name="fade">
        <div class="row align-items-stretch" v-if="!edit_form">
          <div class="col-md-8 mb-md-0 mb-3 center">
            <div class="card h-100 shadow">
              <div class="card-body h-100">
                <div class="row row-cols-md-2 row-cols-1 align-items-center">
                  <div class="col w-25 mb-3 text-center">
                    <img
                      :src="profile_picture"
                      alt="Career Exploration Module"
                      class="user-img mx-auto d-block"
                    />
                    <div class="mt-3 mb-0">
                      <button
                        class="btn btn-primary rounded-pill btn-sm px-3"
                        @click="editForm"
                      >
                        <vue-feather
                          type="edit"
                          class="me-2"
                          size="20"
                        ></vue-feather>

                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div class="col w-75">
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <div class="mb-2">
                          <small class="text-muted d-block"> Full Name </small>
                          {{ user_data.first_name + " " + user_data.last_name }}
                        </div>
                        <div class="mb-2">
                          <small class="text-muted d-block"> Email </small>
                          {{ user_data.email }}
                        </div>
                        <div class="mb-2">
                          <small class="text-muted d-block">
                            Date of Birth
                          </small>
                          {{ formatDate(user_data.birthday) }}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-2">
                          <small class="text-muted d-block">
                            Phone Number
                          </small>
                          {{ user_data.phone_number }}
                        </div>
                        <div class="mb-2">
                          <small class="text-muted d-block">Address </small>
                          <div v-html="user_data.address"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow">
              <div class="card-body">
                <span class="chart-total">{{ activity_total }}</span>
                <DoughnutChart
                  :chartData="activityStatus"
                  :options="options"
                  class="user-chart"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="edit_form">
          <v-edit @edit-form="checkForm" @check-data="checkProfile"></v-edit>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="!edit_form">
          <v-activity @check-data="activityUpdate"></v-activity>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import EditProfile from "@/components/User/EditProfile";
import Activity from "@/components/User/Activity";
import VueFeather from "vue-feather";
import moment from "moment";
import { DoughnutChart } from "vue-chart-3";
import {
  Chart,
  DoughnutController,
  ArcElement,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  DoughnutController,
  ArcElement,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "Profile",
  components: {
    DoughnutChart,
    "v-edit": EditProfile,
    "v-activity": Activity,
    VueFeather,
  },
  data() {
    return {
      user: [],
      user_data: [],
      edit_form: false,
      profile_picture: "",
      activity_total: 0,
      activityStatus: {
        labels: ["Ongoing", "Completed"],
        datasets: [
          {
            label: "Activity Status",
            data: [3, 1],
            backgroundColor: ["#CC7A0E", "#2C265E"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Activity Status",
          },
        },
      },
    };
  },
  methods: {
    editForm() {
      this.edit_form = true;
    },
    checkForm(data) {
      this.edit_form = data;
    },
    getProfile() {
      this.$axios
        .get(this.$api_url + "profile", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.user_data = response.data.data.user[0];
          this.checkImage();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkImage() {
      if (this.user_data.profile_picture) {
        this.profile_picture = this.$base_url + this.user_data.profile_picture;
      } else {
        this.profile_picture = "https://dummyimage.com/600x400/000/fff";
      }
    },
    checkProfile(data) {
      this.user_data = data;
    },
    formatDate(date) {
      return moment(date).format("LL");
    },
    activityUpdate(data) {
      this.activityStatus.datasets[0].data = [];
      this.activityStatus.datasets[0].data.push(data.ongoing_count);
      this.activityStatus.datasets[0].data.push(data.completed_count);
      this.activity_total = data.ongoing_count + data.completed_count;
      console.log(data);
    },
  },
  created() {
    this.user = this.$auth.user_data();
    this.getProfile();
    // this.checkImage();
  },
};
</script>
<style>
#profile {
  min-height: 48vh;
}
.center {
  align-items: center !important;
}
.user-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.user-chart {
  height: 200px;
}

.chart-total {
  position: absolute;
  top: 50%;
  font-size: 2em;
  left: 0%;
  display: block;
  margin: 0 47.5%;
}

@media screen and (max-width: 600px) {
  .w-25,
  .w-75 {
    width: 100% !important;
  }
}
</style>