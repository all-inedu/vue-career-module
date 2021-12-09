<template>
  <div id="reset">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4 mt-md-5">
          <form @submit.prevent="loginProcess">
            <div class="card mt-md-5">
              <div class="card-header text-center">
                <h4>Log In</h4>
              </div>
              <div class="card-body">
                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="login-label">E-mail</label>
                      <input
                        type="text"
                        v-model="login.email"
                        class="form-control"
                        placeholder="E-mail"
                      />
                      <p v-if="error_login.email" class="login-error">
                        {{ error_login.email[0] }}
                      </p>
                    </div>
                    <div class="mb-3">
                      <label class="login-label">Password</label>
                      <input
                        :type="passwordType"
                        v-model="login.password"
                        class="form-control"
                        placeholder="Password"
                      />
                      <div
                        class="login-icon pointer"
                        @click="visiblePassword('password')"
                      >
                        <unicon
                          v-if="passwordType == 'password'"
                          name="eye-slash"
                          fill="royalblue"
                        />
                        <unicon
                          v-if="passwordType == 'text'"
                          name="eye"
                          fill="royalblue"
                        />
                      </div>
                      <p v-if="error_login.password" class="login-error">
                        {{ error_login.password[0] }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="text-center my-2">
                  <button class="btn btn-allin" type="submit">Log In</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Reset",
  data() {
    return {
      api_url: "https://api-cm.all-inedu.com/api/v1/",
      passwordType: "password",
      login: {
        email: "",
        password: "",
      },
      error_login: [],
      user: [],
    };
  },
  methods: {
    loading() {
      Swal.fire({
        title: "Please wait a minute",
      });
      Swal.showLoading();
    },
    toast(status, title) {
      const Toast = Swal.mixin({
        toast: true,
        width: "32rem",
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: status,
        title: title,
      });
    },
    loginProcess() {
      this.loading();
      axios
        .post(this.api_url + "login", this.login)
        .then((response) => {
          Swal.close();
          if (response.data.success == true) {
            console.log("");
            if (response.data.data.is_verified == 1) {
              // login success
              // localStorage.user = JSON.stringify(response.data);
              sessionStorage.setItem("user", JSON.stringify(response.data));
              if (response.data.data.role_id == 1) {
                this.toast("warning", "Oops, you're not admin");
                this.$router.push({ path: "/" });
              } else if (response.data.data.role_id == 2) {
                this.toast("success", "You have successfully logged in");
                this.$router.push({ path: "/admin/dashboard" });
              }
            } else {
              // verify
              this.token = response.data.data.token;
              this.resendProcess();
              this.toast("warning", "Please, verify your email first!");
              this.form_name = "verify";
            }
          }
        })
        .catch((error) => {
          Swal.close();
          if (!error.response) {
            this.toast("warning", "Please check your network");
          }
          if (typeof error.response.data.error == "object") {
            this.error_login = error.response.data.error;
            Swal.close();
          } else {
            this.toast("warning", error.response.data.error);
            this.login.email = "";
            this.login.password = "";
          }
        });
    },
    visiblePassword(names) {
      if (names == "password") {
        if (this.passwordType == "text") {
          this.passwordType = "password";
        } else {
          this.passwordType = "text";
        }
      }
    },
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      if (this.user.data.role_id == 1) {
        this.toast("warning", "You have already logged in as a student");
        this.$router.push({ path: "/" });
      } else if (this.user.data.role_id == 2) {
        this.$router.push({ path: "/admin/dashboard" });
      }
    } else {
      this.user = sessionStorage.getItem("user");
    }
  },
};
</script>
