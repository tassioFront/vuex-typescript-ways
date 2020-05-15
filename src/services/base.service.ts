import axios, { AxiosRequestConfig } from 'axios'
import storage from './localStorage.service'
import Qs from 'qs'

const token = storage.get<string>('fakeToken')

const config: AxiosRequestConfig = {
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: 'repeat' }),
  baseURL: process.env.BASE_URL
}

const authenticated = axios.create(config)
const noAuth = axios.create(config)

authenticated.interceptors.request.use(config => {
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default {
  authenticated,
  noAuth
}
