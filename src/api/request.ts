import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
export function request(config: object) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: '',
    timeout: 10000
  })
  // 请求拦截器配置
  instance.interceptors.request.use(
    (config) => {
      if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
      }
      return config
    },
    (error) => {
      console.log(error)
      return Promise.error(error)
    }
  )
  // 响应拦截器配置
  instance.interceptors.response.use(
    (response) => {
      if (!response.data.success) {
        ElMessage({
          message: response.data.message || '未知错误',
          type: 'warning'
        })
        return Promise.reject(response)
      } else {
        return response.data
      }
    },
    (error) => {
      switch (error.response.status) {
        case 401:
          ElMessage({
            message: '无权访问',
            type: 'warning'
          })
          // router.push({path: '/login'})
          break
        case 403:
          // ElMessage({
          //   message: 'token过期',
          //   type: 'warning'
          // })
          localStorage.removeItem('token')
          sessionStorage.removeItem('menuPath')
          router.push({ path: '/login' })
          break
        case 404:
          ElMessage({
            message: '找不到了',
            type: 'warning'
          })
          // router.push({path: '/404'})
          break
        case 500:
          ElMessage({
            message: '服务器内部错误',
            type: 'warning'
          })
          // router.push({path: '/404'})
          break
        default:
          return Promise.reject(error)
      }
      return Promise.reject(error)
    }
  )
  // 发送真正的网络请求
  return instance(config)
}
export default request
