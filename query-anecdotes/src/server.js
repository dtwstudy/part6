import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () => axios.get(baseUrl).then(res =>  res.data)


export const createNew = (content) => axios.post(baseUrl,content).then(res =>  res.data)

export const updateVote = (content) => axios.put(`${baseUrl}/${content.id}`,content).then(res =>  res.data)