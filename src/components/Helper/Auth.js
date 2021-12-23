import axios from 'axios';
import Swal from 'sweetalert2';
import router from '../../router';

export const auth = {
    check() {
        // return localStorage.user;
        // let api_url = "https://api-cm.all-inedu.com/api/v1/";

        let api_url = "https://dev.api-cm.all-inedu.com/api/v1/";
        let data = [];
        let token = '';
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

        // alert(localStorage.user);

        if (localStorage.user != null) {
            data = JSON.parse(localStorage.user);
            token = data.data.token;

            axios.post(api_url + 'check/token', '', {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Bearer " + token,
                },
            }).then(() => {

            }).catch(() => {
                router.push({ path: '/' })
                Toast.fire({
                    icon: 'warning',
                    title: 'Please log-in again, your token is expired!',
                });
                localStorage.removeItem('user');
            })

            return data.data;

        } else {
            router.push({ path: '/' })
            Toast.fire({
                icon: 'warning',
                title: 'Please log-in first!',
            });
        }
    },

    user_data() {
        if (localStorage.user != null) {
            const data = JSON.parse(localStorage.user);
            return data.data
        } else {
            return null
        }
    }
}