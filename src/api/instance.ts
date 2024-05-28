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
    const token = '7b88a3b7b917b21770be7600fc88a4f99241b4ac47f0486229e1d891820f294a28b6e6a8ae8ab51c5e4b172513ca89d13604504b63bad4f341282ad40bf017ce2517d7b20fcb81f7defd90b76154942d0d8cacfa642e4c86f16d882f37426effa52a1ff40d4f9261307a9066c8da86d4888729a2978d2a351c9a9bc401f7b5ad';
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