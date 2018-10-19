import axios from 'axios'
import qs from 'qs'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

axios.defaults.withCredentials = true 

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 检查状态码
function checkStatus(res) { 
    if (res.status === 200 ||res.status===304) {
        return res.data
    }
    else{
        Toast.fail('网络错误');
    }
}
function checkReload(res){
    if(res.code==='200')
    {
        return res
    }
    else{
        Toast.fail('获取数据失败');
    }
}

const movieBaseUrl = 'https://www.easy-mock.com/mock/5bc838f04645473183fb626b/douban/'
var movieUrl = {
    get(url, params) {
        if (!url) return
        return axios({
            method: 'get',
            url: movieBaseUrl + url,
            params,
            timeout: 3000,
        }).then(checkStatus).then(checkReload)
    },
    // post(url, data) {
    //     if (!url) return
    //     return axios({
    //         method: 'post',
    //         url: prefix + url,
    //         data: qs.stringify(data),
    //         timeout: 30000,
    //         headers: {
    //             'X-Requested-With': 'XMLHttpRequest',
    //             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //         }
    //     }).then(checkStatus).then(checkReload)
    // }
}

export {movieUrl}
