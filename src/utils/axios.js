import axios from "axios"

const URL = "http://localhost:8000/api/v1/"

const instance = axios.create({
  baseURL: URL
})

export default instance