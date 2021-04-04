import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API,
    timeout: 3000,
    withCredentials: true
  })


  export default instance