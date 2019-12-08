import axios from 'axios';
import promise from 'promise';

// Add a request interceptor
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
    const accessToken = getAccessTokenFromCookies();
    if (accessToken) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = accessToken;
        }
    }
    return config;
}, function (error) {
    return promise.reject(error);
});

export default axiosInstance;