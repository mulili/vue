import axios from "axios";

const selfAxios = axios.create({
  // api base url
  baseURL: process.env.BASE_URL
});
selfAxios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);
export default selfAxios;
