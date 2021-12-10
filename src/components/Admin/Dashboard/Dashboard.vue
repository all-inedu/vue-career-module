<template>
  <div id="dashboard">
    <div class="container px-3 mt-3">
      <div class="row mt-md-5 mt-2">
        <div class="col-md-6">
          <div class="card card-dashboard px-3 py-3 mb-3">
            <div class="row">
              <div class="col-md-12">
                <h3>Welcome to Admin Dashboard</h3>
                <button
                  class="btn btn-admin btn-secondary mx-0"
                  @click="link('/admin/module/create')"
                >
                  <vue-feather type="plus"></vue-feather> Create Module Now
                </button>
              </div>
            </div>
          </div>
          <div class="card mb-3 card-dashboard" @click="link('/admin/user')">
            <div class="row g-0 align-items-center">
              <div class="col-md-2 p-2 rounded-2">
                <img
                  src="~@/assets/admin/user.png"
                  alt="User List"
                  class="img-dashboard mx-auto d-block"
                />
              </div>
              <div class="col-md-10 px-3 py-2">
                <h4 class="float-start my-0">
                  <strong>User Registered</strong>
                </h4>
                <div class="float-end">
                  <div
                    class="badge bg-info rounded-pill"
                    style="margin-top: -5px"
                  >
                    <h4 class="my-0">
                      <strong> {{ user_register }} </strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 card-dashboard" @click="link('/admin/module')">
            <div class="row g-0 align-items-center">
              <div class="col-md-2 px-3 py-2">
                <img
                  src="~@/assets/admin/module.png"
                  alt="User List"
                  class="img-dashboard mx-auto d-block"
                />
              </div>
              <div class="col-md-10 px-3 py-2">
                <h4 class="my-0">
                  <strong> Module List </strong>
                </h4>
                <hr class="my-0 mb-2" />
                <div class="float-start">
                  <span>Draft</span> <br />
                  <span>Publised</span> <br />
                  <span>Inactive</span>
                </div>
                <div class="float-end">
                  <span class="badge bg-warning text-dark rounded-circle">{{
                    module.draft
                  }}</span>
                  <br />
                  <span class="badge bg-success rounded-circle">{{
                    module.publish
                  }}</span
                  ><br />
                  <span class="badge bg-danger rounded-circle">{{
                    module.inactive
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <LineChart :chartData="userChart" :options="options" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { ref } from "vue";
import VueFeather from "vue-feather";
import { LineChart } from "vue-chart-3";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "dashboard",
  components: {
    VueFeather,
    LineChart,
  },
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      userSession: [],
      user_register: "",
      module: [],
      userChart: {
        labels: [],
        datasets: [
          {
            label: "User Joined / Week",
            data: [],
            fill: false,
            borderColor: "#041f4e",
            backgroundColor: "#3464a8",
            tension: 0.1,
          },
          {
            label: "User Logged-in / Week",
            data: [],
            fill: false,
            borderColor: "#e18327",
            backgroundColor: "#fcc583",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "USER JOINED & LOGGED-IN",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            ticks: {
              // forces step size to be 50 units
              stepSize: 5,
            },
          },
        },
      },
    };
  },
  methods: {
    link(url) {
      this.$router.push({ path: url });
    },
    getUserRegistered() {
      axios
        .get(this.api_url + "count/user", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          this.user_register = response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getModule() {
      axios
        .get(this.api_url + "count/module", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          this.module = response.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getUserChart() {
      axios
        .get(this.api_url + "count/user/weekly", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.userSession.data.token,
          },
        })
        .then((response) => {
          this.userChart.datasets[0].data = response.data.register;
          this.userChart.datasets[1].data = response.data.login;
          this.userChart.labels = response.data.date;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.userSession = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.userSession = sessionStorage.getItem("user");
    }

    this.getUserRegistered();
    this.getModule();
    this.getUserChart();
  },
};
</script>
<style scoped>
.card-dashboard {
  border: 3px solid rgba(223, 220, 220, 0.933);
  transition: all 0.5s ease;
  cursor: pointer;
}
.card-dashboard:hover {
  border: 3px solid rgb(114, 114, 245);
}
.img-dashboard {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .img-dashboard {
    width: 30%;
  }
}
</style>