import axios from "../utils/axios"

export const postProject = async (values, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const { proyecto, presupuesto } = values
  const project = await axios.post("/projects", {
    nombre_proyecto: proyecto,
    presupuesto
  }, config)
  return project.data 
}