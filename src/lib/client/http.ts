import axios from 'axios';
import toast from 'react-hot-toast';

const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: false, // 跨域请求是否需要携带 cookie
});

http.interceptors.request.use(
  (config) => {
    // if (false) {
    //   config.headers["Authorization"] = localStorage.getItem("token");
    // }
    // if (!config.headers["content-type"]) {
    //   if (config.method === "post") {
    //     config.headers["content-type"] = "application/json";
    //     // 序列化,比如表单数据
    //     config.data = qs.stringify(config.data);
    //   } else {
    //     config.headers["content-type"] = "application/json"; // 默认类型
    //   }
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const MessageMap = {
  302: '接口重定向了！',
  400: '参数不正确！',
  401: '您未登录，或者登录已经超时，请先登录！',
  403: '您没有权限操作！',
  408: '请求超时！',
  409: '系统已存在相同数据！',
  500: '服务器内部错误！',
  501: '服务未实现！',
  502: '网关错误！',
  503: '服务不可用！',
  504: '服务暂时无法访问，请稍后再试！',
  505: 'HTTP 版本不受支持！',
};

http.interceptors.response.use(
  (res) => {
    // 处理自己的业务逻辑，比如判断 token 是否过期等等
    if (res.data.code !== 200) {
      toast.error(res.data.msg);
      return null;
    }
    return res.data.data;
  },
  (error) => {
    let message;
    if (!error || !error.response) {
      message = '系统出错了';
    }
    if (error.response.status === 404) {
      message = `请求地址出错: ${error.response.config.url}`;
    }
    message =
      Reflect.get(MessageMap, error.response.status) ||
      `未知错误码: ${error.response.status}`;
    toast.error(`${message}(${error.response.status})`);
    return Promise.reject(message);
  }
);

export default http;
