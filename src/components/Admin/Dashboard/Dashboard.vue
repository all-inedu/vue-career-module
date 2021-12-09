<template>
  <div id="dashboard">
    <div class="container px-3 mt-3">
      <div class="row mt-md-5 mt-2">
        <div class="col-md-6">
          <div class="card px-3 py-3 mb-3">
            <div class="row">
              <div class="col-md-12">
                <h3>Welcome to Admin Dashboard</h3>
                <button class="btn btn-admin btn-secondary mx-0">
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
                      <strong> 145 </strong>
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
                  <span class="badge bg-warning rounded-circle">4</span>
                  <br />
                  <span class="badge bg-success rounded-circle">4</span><br />
                  <span class="badge bg-danger rounded-circle">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <LineChart :chartData="testData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  setup() {
    const testData = {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "User Joined / Week",
          data: [15, 20, 12, 14, 10, 19, 20],
          fill: false,
          borderColor: "#041f4e",
          tension: 0.1,
        },
        {
          label: "User Logged-in / Week",
          data: [10, 12, 15, 16, 8, 5, 10, 13],
          fill: false,
          borderColor: "#e18327",
          tension: 0.1,
        },
      ],
    };

    return { testData };
  },
  data() {
    return {};
  },
  methods: {
    link(url) {
      this.$router.push({ path: url });
    },
  },
  created() {},
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