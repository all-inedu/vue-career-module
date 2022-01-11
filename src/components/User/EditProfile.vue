<template>
  <div id="editProfile">
    <div class="container">
      <!-- Edit Profile  -->
      <transition name="fade">
        <div class="row" v-if="page == 'edit'">
          <div class="col-md-3 mb-3">
            <div class="card shadow">
              <div class="card-body">
                <img :src="preview" alt="User Name" class="user-picture" />
                <input
                  type="file"
                  class="form-control"
                  ref="picture"
                  @change="previewImage"
                />
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="my-0">Edit Profile</h5>
                <div class="float-end" style="margin-top: -30px">
                  <vue-custom-tooltip label="Setting">
                    <div class="dropstart">
                      <vue-feather
                        type="more-horizontal"
                        id="setting"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      ></vue-feather>
                      <ul class="dropdown-menu" aria-labelledby="setting">
                        <li @click="changeTo('email')">
                          <a class="dropdown-item" href="#">Change Email</a>
                        </li>
                        <li @click="changeTo('password')">
                          <a class="dropdown-item" href="#">Change Password</a>
                        </li>
                      </ul>
                    </div>
                  </vue-custom-tooltip>
                </div>
                <hr class="mt-0" />
                <form @submit.prevent="updateProfile">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <small class="text-muted"> First Name </small>
                      <input
                        type="text"
                        class="form-control"
                        v-model="user_data.first_name"
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <small class="text-muted"> Last Name </small>
                      <input
                        type="text"
                        class="form-control"
                        v-model="user_data.last_name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <small class="text-muted"> Birthday </small>
                      <datepicker
                        v-model="user_data.birthday"
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
                    </div>
                    <div class="col-md-6 mb-3">
                      <small class="text-muted"> Phone Number </small>
                      <vue-tel-input
                        :value="user_data.phone_number"
                        @input="onInput"
                      ></vue-tel-input>
                      <small class="text-danger" v-if="error_form.phone_number">
                        {{ error_form.phone_number[0] }}
                      </small>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <small class="text-muted"> Address </small>
                      <editor
                        v-model="user_data.address"
                        api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                        :init="{
                          height: 300,
                          menubar: true,
                          inline: false,
                        }"
                      />
                      <small class="text-danger" v-if="error_form.address">
                        {{ error_form.address[0] }}
                      </small>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <hr />
                      <div class="float-start">
                        <button
                          class="btn btn-warning rounded-pill"
                          type="button"
                          @click="cancelEdit"
                        >
                          Back to Dashboard
                        </button>
                      </div>
                      <div class="float-end">
                        <button
                          class="btn btn-primary rounded-pill"
                          type="submit"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Change Email  -->
      <transition name="fade">
        <div class="row justify-content-center" v-if="page == 'email'">
          <div class="col-md-5">
            <div class="card shadow">
              <div class="card-body" v-if="!verification">
                <form @submit.prevent="updateEmail">
                  <h5 class="text-center mb-4">Change Your Email</h5>
                  <small class="text-muted">New Email</small>
                  <input
                    type="email"
                    v-model="email.email"
                    class="form-control"
                  />
                  <small class="text-danger" v-if="email.error.email">
                    {{ email.error.email[0] }}
                  </small>
                  <hr />
                  <div class="text-center">
                    <button class="btn btn-primary rounded-pill" type="submit">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-body" v-if="verification">
                <h5 class="text-center mb-4">Verify Your Email</h5>
                <p class="text-center">
                  We emailed you the four digit code to {{ email.email }}.
                  <br />
                  Enter the code below to confirm your email address.
                </p>
                <div class="row justify-content-center">
                  <div class="col-2">
                    <input
                      type="text"
                      class="form-control text-center"
                      required
                      maxlength="1"
                      v-model="code[0]"
                    />
                  </div>
                  <div class="col-2">
                    <input
                      type="text"
                      class="form-control text-center"
                      required
                      maxlength="1"
                      v-model="code[1]"
                    />
                  </div>
                  <div class="col-2">
                    <input
                      type="text"
                      class="form-control text-center"
                      required
                      maxlength="1"
                      v-model="code[2]"
                    />
                  </div>
                  <div class="col-2">
                    <input
                      type="text"
                      class="form-control text-center"
                      required
                      maxlength="1"
                      v-model="code[3]"
                    />
                  </div>
                  <div class="text-center mt-3 mb-3">
                    <button
                      class="btn btn-primary rounded-pill"
                      @click="verifyCode"
                    >
                      Submit
                    </button>
                    <hr />
                    <span v-if="resend == false">
                      Please wait {{ timerCount }} seconds <br />
                      to resend the verification code
                    </span>
                    <span v-if="resend == true">
                      Resend the verification code
                      <a class="pointer" @click="updateEmail">here</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 text-center" @click="changeTo('edit')">
              <vue-feather type="arrow-left"></vue-feather>
              Back to Profile
            </div>
          </div>
        </div>
      </transition>

      <!-- Change Password  -->
      <transition name="fade">
        <div class="row justify-content-center" v-if="page == 'password'">
          <div class="col-md-5">
            <div class="card shadow">
              <div class="card-body">
                <form @submit.prevent="updatePassword">
                  <h5 class="text-center mb-4">Change Your Password</h5>
                  <small class="text-muted">Old Password</small>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password.old_password"
                  />
                  <small class="text-danger" v-if="password.error.old_password">
                    {{ password.error.old_password[0] }}
                  </small>
                  <hr />
                  <div class="mb-2">
                    <small class="text-muted">New Password</small>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password.new_password"
                    />
                    <small class="text-danger" v-if="password.error.password">
                      {{ password.error.password[0] }}
                    </small>
                  </div>
                  <div class="mb-3">
                    <small class="text-muted">Confirmation Password</small>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password.confirm_password"
                    />
                  </div>
                  <hr />
                  <div class="text-center">
                    <button class="btn btn-primary rounded-pill">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="mt-3 text-center" @click="changeTo('edit')">
              <vue-feather type="arrow-left"></vue-feather>
              Back to Profile
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import datepicker from "vue3-datepicker";
import VueFeather from "vue-feather";
import moment from "moment";

export default {
  name: "edit profile",
  components: {
    datepicker,
    VueFeather,
  },
  // moment().format("ddd MMM D yyyy h:i:s")
  data() {
    return {
      user: [],
      user_data: [],
      page: "edit",
      verification: false,
      resend: false,
      timerCount: 60,
      birthday: "",
      preview: "",
      password: {
        old_password: "",
        new_password: "",
        confirm_password: "",
        error: [],
      },
      email: {
        email: "",
        error: [],
      },
      code: [],
      error_form: [],
    };
  },
  methods: {
    previewImage() {
      //   let file = this.$refs["picture"].files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target.result;
      };
      this.user_data.profile_picture = this.$refs["picture"].files[0];
      reader.readAsDataURL(this.user_data.profile_picture);
    },
    cancelEdit() {
      this.$emit("edit-form", false);
    },
    changeTo(p) {
      this.page = p;
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
    onInput(phone, phoneObject) {
      if (phone != "") {
        if (phoneObject?.formatted) {
          this.user_data.phone_number = phoneObject.formatted;
        }
      } else {
        this.user_data.phone_number = "";
      }
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
          // console.log(response.data);
          this.user_data = response.data.data.user[0];
          this.user_data.birthday = new Date(this.user_data.birthday);
          this.checkImage();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkImage() {
      if (this.user_data.profile_picture) {
        this.preview = this.$base_url + this.user_data.profile_picture;
      } else {
        this.preview = "https://dummyimage.com/600x400/000/fff";
      }
    },
    updateProfile() {
      this.$alert.loading();
      const form = new FormData();
      form.append("first_name", this.user_data.first_name);
      form.append("last_name", this.user_data.last_name);
      form.append(
        "birthday",
        moment(this.user_data.birthday).format("YYYY-MM-DD")
      );
      form.append("phone_number", this.user_data.phone_number);
      form.append("address", this.user_data.address);
      form.append("profile_picture", this.user_data.profile_picture);

      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      this.$axios
        .post(this.$api_url + "profile", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          if (response.data.success) {
            this.user_data = response.data.data.user;
            this.user_data.birthday = new Date(this.user_data.birthday);
            this.$emit("check-data", this.user_data);
            this.checkImage();
            this.$alert.toast("success", "Your profile has been updated");
          } else {
            this.$alert.toast("error", response.data.error);
          }
        })
        .catch((error) => {
          this.$alert.close();
          this.error_form = error.response.data.error;
          // console.log(this.user_data);
        });
    },
    updateEmail() {
      this.$alert.loading();
      const form = new FormData();
      form.append("email", this.email.email);

      this.$axios
        .post(this.$api_url + "request/email-change", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.verification = true;
          this.$alert.toast("success", response.data.message);
          this.timerCount = 60;
          this.resend = false;
          this.countDownTimer();
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
          this.email.error = error.response.data.error;
        });
    },
    verifyCode() {
      const code =
        this.code[0] +
        "" +
        this.code[1] +
        "" +
        this.code[2] +
        "" +
        this.code[3];

      this.$axios
        .get(this.$api_url + "change/mail/" + code, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.success) {
            this.page = "edit";
            this.verification = false;
            this.code = [];
            this.email.email = "";
            this.$alert.toast("success", response.data.message);
          } else {
            this.$alert.toast("error", response.data.error);
            this.code = [];
          }
        })
        .catch((error) => {
          console.log(error.response);
          this.email.error = error.response.data.error;
        });
    },
    updatePassword() {
      const form = new FormData();
      form.append("old_password", this.password.old_password);
      form.append("password", this.password.new_password);
      form.append("password_confirmation", this.password.confirm_password);

      this.$axios
        .post(this.$api_url + "change/password", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.user.token,
          },
        })
        .then((response) => {
          this.page = "edit";
          this.$alert.toast("success", response.data.message);
          // console.log(response.data);
        })
        .catch((error) => {
          // console.log(error.response.data);
          if (typeof error.response.data.error == "object") {
            this.password.error = error.response.data.error;
          } else {
            this.$alert.toast("error", error.response.data.error);
          }
        });
    },
  },
  created() {
    document.title = "Edit Profile";
    this.user = this.$auth.user_data();
    // console.log(this.user);
    this.getProfile();
    this.checkImage();
    this.countDownTimer();
  },
};
</script>
<style>
.user-picture {
  width: 100%;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>