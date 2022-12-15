import axios from 'axios';
// Set config defaults when creating the instance
const axiosInstance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});
// Alter defaults after instance has been created
// axiosInstance.defaults.headers.common['token'] = process.env.REACT_APP_SITE_TOKEN;
export default axiosInstance;