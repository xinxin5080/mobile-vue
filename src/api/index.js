import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api'
// 新闻列表
export const newsList = () => axios.get('/getnewslist').then(res => res.data)
// 新闻详情
export const newsDetails = id => axios.get(`/getnew/${id}`).then(res => res.data)
// 评论列表
export const comment = (id, pageindex) => axios.get(`/getcomments/${id}`, { params: { pageindex } }).then(res => res.data)
// 发布评论
export const publish = (id, content) => axios.post(`/postcomment/${id}`, content)
// 图片列表顶部
export const imgtitle = () => axios.get('/getimgcategory').then(res => res.data)
// 获取图片列表
export const imgdata = (id) => axios.get(`/getimages/${id}`).then(res => res.data)
