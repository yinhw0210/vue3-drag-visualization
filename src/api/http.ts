import { request } from './request'
interface parameter {
  readonly method: string
  url: string
  data?: object
  params?: object
}
export function http(method: string, url: string, data: object | undefined) {
  const config: parameter = {
    method,
    url
  }
  config.method === 'post' ? (config.data = data) : (config.params = data)
  return request(config)
}
