<template>
  <div id="Auth">
    <transition name="fade" appear>
      <div class="vue-modal-overlay" v-if="show" @click="close"></div>
    </transition>
    <transition name="fade" appear>
      <div class="vue-modal" v-if="show">
        <div class="display" v-if="form_name == 'login'">
          <form @submit.prevent="loginProcess">
            <div class="modal-header justify-content-center auth-header">
              <h5 class="modal-title">Log In</h5>
            </div>
            <div class="modal-body mx-md-5" style="text-align: justify">
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
                    <p v-if="error_form.login.email" class="login-error">
                      {{ error_form.login.email[0] }}
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
                    <p v-if="error_form.login.password" class="login-error">
                      {{ error_form.login.password[0] }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-center my-2">
                <button class="btn btn-allin" type="submit">Log In</button>
              </div>
              <div class="text-center mt-3 mb-3">
                <span>
                  Forgot
                  <a class="pointer" @click="form('forgot')">Password</a>?
                </span>
                <br />
                <span>
                  Don't have an account?
                  <a class="pointer" @click="form('signup')">Sign up</a>
                </span>
              </div>
            </div>
          </form>
        </div>

        <div class="display" v-if="form_name == 'signup'">
          <form @submit.prevent="registerProcess">
            <div class="modal-header justify-content-center auth-header">
              <h5 class="modal-title">Sign Up</h5>
            </div>
            <div class="modal-body mx-md-5" style="text-align: justify">
              <div class="row mt-3">
                <div class="col-md-12">
                  <div class="row g-2">
                    <div class="col-md-6">
                      <div class="mb-2">
                        <label class="login-label">First Name</label>
                        <input
                          type="text"
                          v-model="register.first_name"
                          class="form-control"
                          placeholder="First Name"
                        />
                        <p
                          v-if="error_form.register.first_name"
                          class="login-error"
                        >
                          {{ error_form.register.first_name[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-2">
                        <label class="login-label">Last Name</label>
                        <input
                          type="text"
                          v-model="register.last_name"
                          class="form-control"
                          placeholder="Last Name"
                        />
                        <p
                          v-if="error_form.register.last_name"
                          class="login-error"
                        >
                          {{ error_form.register.last_name[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <label class="login-label">Birthday</label>
                    <datepicker
                      v-model="nfbirthday"
                      inputFormat="dd MMMM yyyy"
                      class="bday"
                      readonly="false"
                      style="
                        --vdp-bg-color: #fff;
                        --vdp-hover-bg-color: #363caa;
                        --vdp-selected-bg-color: #e59c3d;
                        --vdp-divider-color: #363caa;
                      "
                    />
                    <div class="login-icon">
                      <unicon
                        name="calender"
                        fill="royalblue"
                        icon-style="monochrome"
                      />
                    </div>
                    <p v-if="error_form.register.birthday" class="login-error">
                      {{ error_form.register.birthday[0] }}
                    </p>
                  </div>
                  <div class="mb-2">
                    <label class="login-label">Phone Number</label>
                    <vue-tel-input
                      :value="register.phone_number"
                      @input="onInput"
                    ></vue-tel-input>
                    <p
                      v-if="error_form.register.phone_number"
                      class="login-error"
                    >
                      {{ error_form.register.phone_number[0] }}
                    </p>
                  </div>
                  <div class="mb-2">
                    <label class="login-label">E-mail</label>
                    <input
                      type="text"
                      v-model="register.email"
                      class="form-control"
                      placeholder="E-mail"
                    />
                    <p v-if="error_form.register.email" class="login-error">
                      {{ error_form.register.email[0] }}
                    </p>
                  </div>
                  <div class="mb-2">
                    <label class="login-label">Password</label>
                    <input
                      :type="passwordType"
                      v-model="register.password"
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
                    <p v-if="error_form.register.password" class="login-error">
                      {{ error_form.register.password[0] }}
                    </p>
                  </div>
                  <div class="mb-2">
                    <label class="login-label">Password Confirmation</label>
                    <input
                      :type="password_confirmationType"
                      v-model="register.password_confirmation"
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
                  </div>
                </div>
              </div>
              <div class="text-center my-2">
                <button class="btn btn-allin" type="submit">Sign Up</button>
              </div>
              <div class="text-center mt-3 mb-3">
                <span>
                  Already have an account?
                  <a class="pointer" @click="form('login')">Log in</a>
                </span>
              </div>
            </div>
          </form>
        </div>

        <div class="display" v-if="form_name == 'forgot'">
          <form @submit.prevent="forgotProcess">
            <div class="modal-header justify-content-center auth-header">
              <h5 class="modal-title">Forgot Password</h5>
            </div>
            <div class="modal-body px-md-5" style="text-align: justify">
              <div class="row mt-3">
                <div class="col-md-12">
                  <p>
                    Please enter your email and we'll send an email to reset
                    your password
                  </p>
                  <div class="mb-3">
                    <label class="login-label">E-mail</label>
                    <input
                      type="text"
                      v-model="forgot.email"
                      class="form-control"
                      placeholder="E-mail"
                    />
                    <p v-if="error_form.forgot.email" class="login-error">
                      {{ error_form.forgot.email[0] }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-center my-2">
                <button class="btn btn-allin" type="submit">
                  Forgot Password
                </button>
              </div>
              <div class="text-center mt-3 mb-3">
                <span>
                  Do you remember your password?
                  <a class="pointer" @click="form('login')">Log in</a>
                </span>
              </div>
            </div>
          </form>
        </div>

        <div class="display" v-if="form_name == 'verify'">
          <form @submit.prevent="verifyProcess">
            <div class="modal-header justify-content-center auth-header">
              <h5 class="modal-title">Verify Your Account</h5>
            </div>
            <div class="modal-body px-md-5" style="text-align: justify">
              <div class="row mt-3">
                <div class="col-md-12 text-center">
                  <p>
                    We emailed you the four digit code to {{ login.email }}.
                    Enter the code below to confirm your email address.
                  </p>
                  <div class="mb-2">
                    <div class="code-container">
                      <input
                        v-for="i in 4"
                        :key="i"
                        :ref="setInputRef"
                        @keydown="keydown($event, i - 1)"
                        type="number"
                        class="code"
                        placeholder=""
                        min="0"
                        max="9"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mb-2">
                <button class="btn btn-allin" type="submit">Verify</button>
              </div>
              <div class="text-center mt-3 mb-3">
                <span v-if="resend == false">
                  Please wait {{ timerCount }} seconds <br />
                  to resend the verification code
                </span>
                <span v-if="resend == true">
                  Resend the verification code
                  <a class="pointer" @click="resendProcess">here</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import datepicker from "vue3-datepicker";
import moment from "moment";

export default {
  name: "Auth",
  props: {
    show: Boolean,
    close: Function,
  },
  components: {
    datepicker,
  },
  data() {
    return {
      show_modal: false,
      form_name: "",
      nfbirthday: new Date(),
      token: "",
      login: {
        email: "",
        password: "",
      },
      register: {
        first_name: "",
        last_name: "",
        phone_number: "",
        birthday: "",
        email: "",
        role_id: 1,
        password: "",
        password_confirmation: "",
      },
      forgot: {
        email: "",
      },
      error_form: {
        login: [],
        register: [],
        forgot: [],
      },
      verify_code: {
        0: "",
        1: "",
        2: "",
        3: "",
      },
      inputRefs: [],
      timerCount: 60,
      resend: false,
      error_forgot: [],
      passwordType: "password",
      password_confirmationType: "password",
      user: [],
    };
  },
  methods: {
    form(name) {
      this.form_name = name;
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
    loginProcess() {
      this.$alert.loading();
      this.$axios
        .post(this.$api_url + "login", this.login)
        .then((response) => {
          Swal.close();
          if (response.data.success == true) {
            console.log("");
            if (response.data.data.is_verified == 1) {
              // login success
              localStorage.setItem("user", JSON.stringify(response.data));
              this.$alert.toast("success", "You have successfully logged in");
              // this.$router.go();
              if (response.data.data.role_id == 1) {
                this.$router.push({ path: "/user/dashboard" });
              } else if (response.data.data.role_id == 2) {
                this.$router.push({ path: "/admin/dashboard" });
              }
            } else {
              // verify
              this.token = response.data.data.token;
              this.resendProcess();
              this.$alert.toast("warning", "Please, verify your email first!");
              this.form_name = "verify";
            }
          }
        })
        .catch((error) => {
          Swal.close();
          if (typeof error.response.data.error == "object") {
            this.error_form.login = error.response.data.error;
            Swal.close();
          } else {
            this.$alert.toast("warning", error.response.data.error);
            this.login.email = "";
            this.login.password = "";
          }
        });
    },
    registerProcess() {
      this.$alert.loading();
      this.register.birthday = moment(this.nfbirthday).format("YYYY-MM-DD");
      this.$axios
        .post(this.$api_url + "register", this.register)
        .then((response) => {
          Swal.close();
          this.token = response.data.token;
          this.login.email = this.register.email;
          this.$alert.toast("warning", "Please, verify your email first!");
          this.form_name = "verify";
          this.timerCount = 60;
          this.countDownTimer();
        })
        .catch((error) => {
          this.error_form.register = error.response.data.error;
          Swal.close();
        });
    },
    forgotProcess() {
      this.$alert.loading();
      this.$axios
        .post(this.$api_url + "password/reset", this.forgot)
        .then(() => {
          Swal.close();
          this.$alert.toast("success", "Reset password link has been sent");
        })
        .catch((error) => {
          this.error_form.forgot = error.response.data.error;
          Swal.close();
        });
    },
    verifyProcess() {
      this.$alert.loading();
      const code =
        this.verify_code[0] +
        this.verify_code[1] +
        this.verify_code[2] +
        this.verify_code[3];
      this.$axios
        .get(this.$api_url + "user/verify/" + code)
        .then((response) => {
          Swal.close();
          if (response.data.success == false) {
            this.verify_code[0] = "";
            this.verify_code[1] = "";
            this.verify_code[2] = "";
            this.verify_code[3] = "";
            Swal.fire("Ooops !", response.data.error, "warning");
          } else {
            Swal.fire("Horay !", response.data.message, "success");
            this.form_name = "login";
          }
        })
        .catch((error) => {
          console.log(error.response);
          // this.error_form.register = error.response.data.error;
          Swal.close();
        });
    },
    resendProcess() {
      this.$alert.loading();
      this.$axios
        .post(this.$api_url + "email/verification-notification", "", {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then(() => {
          Swal.close();
          this.timerCount = 60;
          this.countDownTimer();
          this.$alert.toast("success", "Verification code has been sent");
        })
        .catch((error) => {
          console.log(error);
          Swal.close();
        });
    },
    onInput(phone, phoneObject) {
      if (phoneObject?.formatted) {
        this.register.phone_number = phoneObject.formatted;
      }
    },
    setInputRef(el) {
      this.inputRefs.push(el);
    },
    keydown(e, i) {
      // todo: "e" and "." should not pass
      if (e.key >= 0 && e.key <= 9) {
        this.inputRefs[i].value = "";
        this.verify_code[i] = e.key;
        if (i === this.inputRefs.length - 1) return;
        setTimeout(() => this.inputRefs[i + 1].focus(), 10);
      } else if (e.key === "Backspace") {
        if (i === 0) return;
        setTimeout(() => this.inputRefs[i - 1].focus(), 10);
      }

      if (i == 3) {
        this.verifyProcess();
      }
    },
    countDownTimer() {
      if (this.timerCount > 0) {
        setTimeout(() => {
          this.timerCount -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.resend = true;
      }
    },
  },
  created() {
    this.form_name = "login";
  },
};
</script>
<style scoped>
.auth-header {
  background: #243672;
  color: #fff;
}
</style>