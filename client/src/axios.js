import axios from 'axios';
import store from './store';

axios.defaults.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 开发环境使用这个：
// axios.defaults.baseURL = 'http://localhost:5888/api';
// 生产环境使用这个：
axios.defaults.baseURL = 'http://47.92.73.208:5888/api';

axios.interceptors.request.use(function (config) {
  //判断localStorage中是否存在token，并添加至header中
  if (store.state.token !== '') {
    config.headers.common['Authorization'] = store.state.token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export {
  axios
}