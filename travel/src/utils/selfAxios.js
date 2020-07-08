import axios from "axios";

const selfAxios = axios.create();
selfAxios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);
export default selfAxios;
