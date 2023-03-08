/*
 * @Descripttion:
 * @version:
 * @Author: volit
 * @Date: 2022-11-14 22:34:34
 * @LastEditors: volit
 * @LastEditTime: 2022-12-16 18:42:02
 */
import axios from "axios";
import { MessagePlugin } from "tdesign-vue-next";
import qs from "qs";

const service = axios.create({
  baseURL: "http://www.volit.top:3000/",
  timeout: 5000,
  withCredentials: false,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.state !== true) {
      MessagePlugin.error(res.message);
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

/**
 * 封装请求方式
 */
export const request = {
  get(url: string, params?: any, callback?: any) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params: params })
        .then((res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url: string, params: any, callback?: any) {
    return new Promise((resolve, reject) => {
      service
        .post(url, qs.stringify(params))
        .then((res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  put(url: string, params: any, callback?: any) {
    return new Promise((resolve, reject) => {
      service.put(url, params).then(
        (res) => {
          callback ? resolve(callback(res.data)) : resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
};

export default service;
