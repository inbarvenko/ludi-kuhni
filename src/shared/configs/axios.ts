import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ludikuhni.ru/api",
  withCredentials: true,
  headers: {
    // "X-API-KEY": "xXw01U5fNpEWnRa4UDocUmcp0rqirCpGxJmlKhYd1lA",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Добавляем X-API-Key в заголовки
    config.headers["X-API-KEY"] = "xXw01U5fNpEWnRa4UDocUmcp0rqirCpGxJmlKhYd1lA";
    return config;
  },
  (error) => {
    // Обработка ошибок запроса
    return Promise.reject(error);
  }
);

export default axiosInstance;
