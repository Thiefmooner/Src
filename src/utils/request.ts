import axios, {AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios';

const service:AxiosInstance = axios.create({
    timeout: 5000
});

//post请求，CORS问题
//const service2:AxiosInstance = axios.create({
   // baseURL:'http://192.168.3.21:1024/api/SampleData/SaveData?id=1&&value=111',
    //timeout: 5000
//})

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response;
        } else {
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

export default service ;
