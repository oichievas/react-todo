import axios from 'axios'

const baseURL = 'https://todo-38563-default-rtdb.asia-southeast1.firebasedatabase.app'

export const postTodo = (uid, body) => {
  return axios.post(`${baseURL}/todos/${uid}.json`, body)
}

export const getTodos = (uid) => {
  return axios.get(`${baseURL}/todos/${uid}.json`)
}

export const removeTodo = (uid, todoId) => {
  return axios.delete(`${baseURL}/todos/${uid}/${todoId}.json`)
}

export const editTodo = (uid, todoId, body) => {
  return axios.patch(`${baseURL}/todos/${uid}/${todoId}.json`, body)
}
