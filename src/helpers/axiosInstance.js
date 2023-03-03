import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import {LOGOUT} from '../constants/actionTypes'
import {CREATE_CONTACT} from '../constants/routeNames'
import {navigate} from '../navigations/SideMenu/RootNavigator'
// import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env'

// BACKEND_URL = 'http://192.168.100.70:3000' // VIEJA
// BACKEND_URL = 'http://192.168.100.26:3000' // CASA
BACKEND_URL = 'http://172.16.10.122:3000' // TRABAJO

let headers = {}

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers,
})

console.log(axiosInstance.defaults.baseURL)

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.log('interceptor ', error)
    return Promise.reject(error)
  },
)

// axiosInstance.interceptors.response.use(
//   response =>
//     new Promise((resolve, reject) => {
//       resolve(response)
//     }),
//   error => {
//     if (!error.response) {
//       return new Promise((resolve, reject) => {
//         reject(error)
//       })
//     }
//     if (error.response.status === 403) {
//       navigate(LOGOUT, {tokenExpired: true})
//     } else {
//       return new Promise((resolve, reject) => {
//         reject(error)
//       })
//     }
//   },
// )

export default axiosInstance
