import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = "sdagdhytsdgbfgddfgdfgdfgdfgdfgfdgdfg";
//     if (token) {
//       config.headers.Authorization = Bearer`${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     if (error.response) {
//       if (error.response.status === 401) {
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
