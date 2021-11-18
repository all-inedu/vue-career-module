import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import '@popperjs/core'
import Particles from "particles.vue3";
import Unicon from 'vue-unicons'
import { uniEye, uniEyeSlash, uniScheduleMonochrome, uniBagMonochrome, uniChartPieMonochrome, uniBriefcaseMonochrome, uniGraphBarMonochrome, uniCommentMonochrome, uniCommentDotsMonochrome, uniCommentMessageMonochrome, uniLockAccessMonochrome, uniLockMonochrome, uniCalenderMonochrome, uniExclamationCircleMonochrome, uniCheckMonochrome, uniUsersAlt, uniUserCircle, uniUser, uniArrowCircleDown } from 'vue-unicons/dist/icons';
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import Datepicker from "vue3-datepicker";


Unicon.add([uniEye, uniEyeSlash, uniScheduleMonochrome, uniBagMonochrome, uniChartPieMonochrome, uniBriefcaseMonochrome, uniGraphBarMonochrome, uniCommentMonochrome, uniCommentDotsMonochrome, uniCommentMessageMonochrome, uniLockAccessMonochrome, uniLockMonochrome, uniCalenderMonochrome, uniExclamationCircleMonochrome, uniCheckMonochrome, uniUsersAlt, uniUserCircle, uniUser, uniArrowCircleDown])

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['ID', 'SG', "GB", "US", "CA", "MY"]
}

const app = createApp(App)
app.use(router)
app.use(VueTelInput, VueTelInputOptions)
app.use(Unicon)
app.use(Particles)
app.use(Datepicker)
app.mount('#app')