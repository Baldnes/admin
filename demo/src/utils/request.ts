import axios from "axios"
const service = axios.create()
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use(res => {
    return res.data
}, error => {
    return Promise.reject(error)
})
export default service