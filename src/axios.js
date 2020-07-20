import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(config => {
    let token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`
            .replace(/(^)|($)/g, '');
    }
    return config
}, err => {
    return Promise.reject(err)
});

export default {
    getToken() {
        return instance.get(process.env.REACT_APP_BASE_URL + 'authentication/token/new?api_key=' + process.env.REACT_APP_API_KEY);
    },
    getTrending() {
        return instance.get(process.env.REACT_APP_BASE_URL + 'trending/all/day?api_key=' + process.env.REACT_APP_API_KEY);
    },
};
