import axios from 'axios'
const API = axios.create({ baseURL: window.__SYNCORA_API_BASE__ || 'http://localhost:5000' })
API.interceptors.request.use(cfg => {
  const token = localStorage.getItem('syncora_token')
  if(token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})
export default API
