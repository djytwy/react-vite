import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { Response } from './interface';

class RAxios {
  private options : AxiosRequestConfig;
  private httpInstance: AxiosInstance;

  constructor (options: AxiosRequestConfig) {
    this.options = options
    this.httpInstance = axios.create(this.options)
    this.setupInterceptors()
  }

  private async request <T> (options: AxiosRequestConfig, methods: Method) : Promise<T> {
    return new Promise( async (resolve, reject) => {
      let _res : AxiosResponse<Response<T>> = await this.httpInstance({
        ...options,
        method: methods
      })
      if (_res.status == 200) {
        // http响应码200的情况，业务code返回2000即成功
        if (_res.data.code == 2000) {
          resolve(_res.data.datas)
        } else {
          reject(`业务响应码：${_res.data.msg}`)
        }
      } else {
        reject(`http状态码: ${_res.status}`)
      }
    })
  }

  private setupInterceptors () {
    this.httpInstance.interceptors.request.use(config => {
      console.log('请求拦截');
      return config
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
    this.httpInstance.interceptors.response.use(config => {
      console.log('响应拦截')
      return config
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
  }

  public get <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request(config, 'GET')
  }

  public post <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request(config, 'POST')
  }

  public delete <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request(config, 'delete')
  }

  public put <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request(config, 'PUT')
  }
}

export default RAxios


// const request = async <T> (options: AxiosRequestConfig) : Promise<T> => {
//   return new Promise( async (resolve, reject) => {
//     const instance : AxiosInstance = axios.create()
//     const _options : AxiosRequestConfig = {
//       ...options, 
//       ...{
//         baseURL: baseURL,
//         timeout: 5000,
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8'
//         },
//         withCredentials: true
//       }
//     }
    
//     instance.interceptors.request.use(config => {
//       console.log('拦截器');
//       return config
//     }, error => {
//       return Promise.reject(error)
//     })

//     instance.interceptors.response.use(res => {
//       console.log('响应拦截:')
//       return res.data
//     }, error => {
//       console.log(error);
//       return Promise.reject(error)
//     })
//     let _res : AxiosResponse<Response<T>> = await instance(_options)
//     if (_res.status == 200) {
//       // http响应码200的情况，业务code返回2000即成功
//       if (_res.data.code == 2000) {
//         resolve(_res.data.datas)
//       } else {
//         reject(`业务响应码：${_res.data.msg}`)
//       }
//     } else {
//       reject(`http状态码: ${_res.status}`)
//     }
//   })
// }

// export default request 

// class RAxios {
//   private axionsInstance: AxiosInstance
//   private readonly options : AxiosRequestConfig;

//   constructor (options: AxiosRequestConfig) {
//     this.options = options
//     this.axionsInstance = axios.create(options)
//   }

//   private setInterceptors() {

//   }
// }