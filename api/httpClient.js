import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://kolbasa.qbex.io/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

// const getAuthToken = () => localStorage.getItem("token");

// const authInterceptor = config => {
//   config.headers["Authorization"] = getAuthToken();
//   return config;
// };

// httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
