import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import '@popperjs/core'
import Particles from "particles.vue3";
import Unicon from 'vue-unicons'
import { uniSortAmountDown, uniSortAmountUp, uniEye, uniEyeSlash, uniScheduleMonochrome, uniBagMonochrome, uniChartPieMonochrome, uniBriefcaseMonochrome, uniGraphBarMonochrome, uniCommentMonochrome, uniCommentDotsMonochrome, uniCommentMessageMonochrome, uniLockAccessMonochrome, uniLockMonochrome, uniCalenderMonochrome, uniExclamationCircleMonochrome, uniCheckMonochrome, uniUsersAlt, uniUserCircle, uniUser, uniArrowCircleDown } from 'vue-unicons/dist/icons';
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import Datepicker from "vue3-datepicker";
import Editor from "@tinymce/tinymce-vue";
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'
import axios from 'axios'
import { alert } from './components/Helper/Alert'
import { auth } from './components/Helper/Auth'


Unicon.add([uniSortAmountDown, uniSortAmountUp, uniEye, uniEyeSlash, uniScheduleMonochrome, uniBagMonochrome, uniChartPieMonochrome, uniBriefcaseMonochrome, uniGraphBarMonochrome, uniCommentMonochrome, uniCommentDotsMonochrome, uniCommentMessageMonochrome, uniLockAccessMonochrome, uniLockMonochrome, uniCalenderMonochrome, uniExclamationCircleMonochrome, uniCheckMonochrome, uniUsersAlt, uniUserCircle, uniUser, uniArrowCircleDown])

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['ID', 'SG', "GB", "US", "CA", "MY"]
}

const TooltipOptions = {
    name: 'VueCustomTooltip',
    color: '#fff',
    background: '#000',
    borderRadius: 100,
    fontWeight: 400,
}

// const api_url = "https://api-cm.all-inedu.com/api/v1/";
const api_url = "https://api-cm.all-inedu.com/api/v1/";
const base_url = "https://api-cm.all-inedu.com/";

const app = createApp(App)
app.use(router)
app.use(VueTelInput, VueTelInputOptions)
app.use(Unicon)
app.use(Particles)
app.use(Datepicker)
app.component('editor', Editor)
app.use(VueCustomTooltip, TooltipOptions)
app.directive('focus', { mounted(el) { el.focus() } })
app.config.globalProperties.$api_url = api_url
app.config.globalProperties.$base_url = base_url
app.config.globalProperties.$axios = axios
app.config.globalProperties.$alert = alert
app.config.globalProperties.$auth = auth
app.mount('#app')
