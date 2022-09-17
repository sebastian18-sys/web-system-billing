import axios from "../utils/axios" 

export const postLogin = async (username, password) => {
  console.log(username, password)

  const result = await axios.post("/login", {
    username,
    password
  })
  return result.data
}