import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9999"
    : "https://mulili.github.io/travel";

const commonURL = "/mock";

const selfAxios = axios.create({
  // api base url
  baseURL: `${baseURL}${commonURL}`,
});

selfAxios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default selfAxios;
