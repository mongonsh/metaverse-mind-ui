// utils/axios.js

import axios from "axios";
import Cookies from "js-cookie";

// Fetch CSRF token from Django backend
export const fetchCsrfToken = async () => {
  const response = await axios.get(
    `metaverse-mind.vercel.app/article/get-csrf-token`,
    {
      withCredentials: true,
    }
  );
  const csrfToken = response.data.csrfToken;
  Cookies.set("csrftoken", csrfToken);
  return csrfToken;
};

// Create an Axios instance with the CSRF token
export const axiosInstance = axios.create({
  baseURL: `metaverse-mind.vercel.app`, // Your Django backend URL
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the CSRF token in requests
axiosInstance.interceptors.request.use(
  async (config) => {
    const csrfToken = Cookies.get("csrftoken") || (await fetchCsrfToken());
    config.headers["X-CSRFToken"] = csrfToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
