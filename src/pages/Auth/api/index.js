import axios from 'axios'
import { firebaseConfig } from 'config'

export const signUp = (body) => {
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`, body)
}

export const signIn = (body) => {
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, body)
}
