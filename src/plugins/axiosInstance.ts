//axiosInstance.ts
//导入axios
import axios, { AxiosRequestConfig } from "axios";
import { defineAsyncComponent } from "vue";

/**
 * 默认 create Axios 的配置参数
 */
const defaultConfig: AxiosRequestConfig = {
  baseURL: "", //localhost:5173(本机) 做前后端分离时，需要修改为服务器端（后端）
  timeout: 10000,
};

//使用axios下面的create([config])方法穿就爱你axios实例，
//其中config参数为axios最基本的配置信息

const MyHttp = axios.create(defaultConfig);

//导出我们建立的axios实例模块，ES6 export用法
export default MyHttp;
