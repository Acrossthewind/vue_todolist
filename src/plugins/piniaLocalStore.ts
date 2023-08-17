import { PiniaPluginContext } from "pinia";
import { toRaw } from "vue";

const __piniaKey = "__PINAKEY__";
//定义兜底变量

type Options = {
  key?: string;
};
//定义入参类型

//将数据存在本地
const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

//从缓存中读取
const getStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : {};
};

//利用函数柯里化接收用户入参
const piniaPlugin = (options: Options) => {
  //将函数返回给pinia 让pinia调用注入context
  return (context: PiniaPluginContext) => {
    const { store } = context;
    const key = `${options?.key ?? __piniaKey}-${store.id}`;
    const data = getStorage(key);
    store.$subscribe(() => {
      setStorage(key, toRaw(store.$state));
    });
    return {
      ...data,
    };
  };
};

export default piniaPlugin;
