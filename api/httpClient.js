import axios from "axios";
import store from "../store/common";

const httpClient = axios.create({
  baseURL: "http://kolbasa.qbex.io/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

// httpClient.interceptors.request.use(store.commit("runSpinner"));
// httpClient.interceptors.response.use(store.actions.stopSpinner());

// const getAuthToken = () => localStorage.getItem("token");

// const authInterceptor = config => {
//   config.headers["Authorization"] = getAuthToken();
//   return config;
// };

// httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
