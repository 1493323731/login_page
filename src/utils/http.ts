import axios,{AxiosRequestConfig,AxiosResponse} from 'axios';
import { ElLoading } from 'element-plus';
let loading:any;
const startLoading=()=>{
  interface Options{
        lock: boolean;
        text: string;
        background: string;
    }
    const options:Options={
        lock:true,//锁定屏幕的滚动
        text:"加载中...",
        background:'rgba(0,0,0,0.7)'
    }
    loading=ElLoading.service(options);
}
const endLoading=()=>{
    loading.close();
}
//请求拦截
axios.interceptors.request.use((config:AxiosRequestConfig)=>{
    //加载
    startLoading();
    return config;
});
//相应拦截
axios.interceptors.response.use((response:AxiosResponse)=>{
    // 结束加载
    endLoading();
    return response;
},error=>{
    // 结束加载
    endLoading();
    //错误提醒
    return Promise.reject(error);
});
export default axios;