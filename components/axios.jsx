import axios from "axios";

// TOKEN : QOEKEKASDBDEWUWEFETVQOWMD

const TOKEN = process.env.TOKEN

// const baseURL = 'http://localhost:8000/api/';
const baseURL = 'https://panel.ziniamlaminates.com/api/';


const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    headers: {
        Authorization: TOKEN,
        'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=UTF-8',
        accept: 'application/json',
    },
});


export default axiosInstance;