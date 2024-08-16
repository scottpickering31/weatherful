import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://xsjs2s-3000.csb.app/api",
  // baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="));
    if (token) {
      const authToken = token.split("=")[1];
      console.log("authToken", authToken);
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      // Handle unauthorized access, e.g., redirect to login
      console.error("Unauthorized access, redirecting...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
