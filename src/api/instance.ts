import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337/api',
  timeout: 1000,
  headers: {
    // 'X-Custom-Header': 'foobar'
  }
});

instance.interceptors.request.use(
  function (config) {
    const token = import.meta.env.VITE_ACCESS_TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;