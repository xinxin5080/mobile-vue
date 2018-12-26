import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api'
// 新闻列表
export const newsList = () => axios.get('/getnewslist').then(res => res.data)
// 新闻详情
export const newsDetails = id => axios.get(`/getnew/${id}`).then(res => res.data)
// 评论列表
export const comment = (id, pageindex) => axios.get(`/getcomments/${id}`, { params: { pageindex } }).then(res => res.data)
