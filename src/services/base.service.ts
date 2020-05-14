import axios from 'axios'
import storage from './localStorage.service'
import Qs from 'qs'

type configuration = {
  paramsSerializer: (params: {} | [] | string) => string,
  baseURL: string
}

const token: string = storage.get(process.env.TOKEN) ?? ''
const config: configuration = {
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
