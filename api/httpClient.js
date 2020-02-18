import axios from "axios";
import store from "../store/common";
import { BASE_URL } from "~/config";

const httpClient = axios.create({
  baseURL: BASE_URL + "api/",
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
