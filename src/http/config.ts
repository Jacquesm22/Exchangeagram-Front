import axios from 'axios'
import { Consts } from '@/utils/consts'

const axiosInstance = axios.create({
  headers: { Pragma: 'no-cache' },
  baseURL: 'http://localhost:5000/api/',
  timeout: 90000
})

// Request interceptor, mainly used for authorization
axiosInstance.interceptors.request.use(async (config) => {
  const token: string | null = localStorage.getItem(Consts.Application.ACCESS_TOKEN_NAME)
  if (token && config) {
    if (config.headers) config.headers.authorization = `Bearer ${token}`
  }
  return config
}, error => Promise.reject(error)
)

export default {
  axiosInstance
}
