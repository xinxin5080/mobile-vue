import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api'
// 新闻列表
export const newsList = () => axios.get('/getnewslist').then(res => res.data)
