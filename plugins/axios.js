import * as axios from 'axios'
let axiosOptions = {}

axiosOptions = {
  baseURL : `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`
}

export default axios.create(axiosOptions)