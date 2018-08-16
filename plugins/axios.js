import axios from 'axios'

let _axiosOptions
let _axiosInstance

function createInstance() {
  _axiosOptions = {
    baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`
  }
  _axiosInstance = axios.create(_axiosOptions)
}

function getInstance() {
  if (!_axiosInstance) {
    createInstance()
  }
  
  return _axiosInstance
}

function setAxiosToken(token) {
  let instance = getInstance()

  if (token) {
    instance.defaults.headers.common['Authorization'] = token;
  }
}


export default async function ({ store }) {
  setAxiosToken(store.state.token)
}

export const setToken = setAxiosToken

export const axiosInstance = getInstance()

