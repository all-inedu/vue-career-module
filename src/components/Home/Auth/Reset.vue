<template>
  <div id="reset">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-5 mt-5">
          <form @submit.prevent="resetProcess">
            <div class="card">
              <div class="card-header text-center">
                <h4>Reset Password</h4>
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                fuga quas pariatur fugiat.
                <div class="mb-2 mt-3">
                  <label class="login-label"> E-mail</label>
                  <input
                    type="text"
                    v-model="reset.email"
                    class="form-control"
                    readonly
                  />
                </div>
                <div class="mb-2">
                  <label class="login-label">New Password</label>
                  <input
                    :type="passwordType"
                    v-model="reset.password"
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
                  <p v-if="error_reset.password" class="login-error">
                    {{ error_reset.password[0] }}
                  </p>
                </div>
                <div class="mb-2">
                  <label class="login-label">New Password Confirmation</label>
                  <input
                    :type="password_confirmationType"
                    v-model="reset.password_confirmation"
                    class="form-control"
                    placeholder="Password Confirmation"
                  />
                  <div
                    class="login-icon pointer"
                    @click="visiblePassword('password_confirmation')"
                  >
                    <unicon
                      v-if="password_confirmationType == 'password'"
                      name="eye-slash"
                      fill="royalblue"
                    />
                    <unicon
                      v-if="password_confirmationType == 'text'"
                      name="eye"
                      fill="royalblue"
                    />
                  </div>
                  <p
                    v-if="error_reset.password_confirmation"
                    class="login-error"
                  >
                    {{ error_reset.password_confirmation[0] }}
                  </p>
                </div>
                <div class="text-center my-3 mt-4">
                  <button class="btn btn-allin" type="submit">Reset</button>
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
      token: this.$route.params.token,
      passwordType: "password",
      password_confirmationType: "password",
      reset: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      error_reset: [],
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
    visiblePassword(names) {
      if (names == "password") {
        if (this.passwordType == "text") {
          this.passwordType = "password";
        } else {
          this.passwordType = "text";
        }
      } else {
        if (this.password_confirmationType == "text") {
          this.password_confirmationType = "password";
        } else {
          this.password_confirmationType = "text";
        }
      }
    },
    resetProcess() {
      this.loading();
      axios
        .post(this.api_url + "password/reset/" + this.token, this.reset)
        .then(() => {
          this.toast("success", "Your password has been changed");
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          Swal.close();
          this.error_reset = error.response.data.error;
        });
    },
  },
  created() {
    axios
      .get(this.api_url + "reset/" + this.token)
      .then((response) => {
        // console.log(response);
        this.reset.email = response.data.data.email;
      })
      .catch(() => {
        this.toast("warning", "Token is invalid");
        this.$router.push({ path: "/" });
      });
  },
};
</script>
