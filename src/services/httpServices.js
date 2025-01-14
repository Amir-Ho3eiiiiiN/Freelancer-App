import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// err => response => status => 401 => Proccess => !!!
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const orginalConfig = err.config;
    if (err.response.status === 401 && !orginalConfig._retry) {
      orginalConfig._retry = true;
      try {
        const data = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) app(orginalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
};

export default http;
