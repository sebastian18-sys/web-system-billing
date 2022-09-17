import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import useUser from '../../hooks/useUser'
import { postProject } from '../../services/test'
import "./home.css"

export default function Home() {

  const { register, handleSubmit } = useForm()
  const { user } = useUser()
  let tokenUser = user.token
  console.log(user.token)


  const onSubmit = async (values) => {
    try {
      const data = await postProject(values, tokenUser)
      console.log("Data ->", data)
      if(data) {
        // navigate("/proyectos", {replace: true})
        // onClose()
        console.log("add")
      } else {
        console.log("Datos invalidos")
      }
    } catch (err) {
      console.log(err)
    }
  }




  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Panel</title>
      </Helmet>
      <section className='home'>
        <Sidebar />
        <div className='home__container'>
          <Navbar />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='addProject__formText'>
              <label>Proyecto: </label>
              <input 
                name='proyecto'
                placeholder='Ingrese el nombre de su proyecto'
                type="text"
                required
                {...register('proyecto')}
              />
            </div>
            <div className='addProject__formText'>
              <label>Presupuesto: </label>
              <input 
                name='presupuesto'
                placeholder='Ingrese el monto'
                type="text"
                required
                {...register('presupuesto')}
              />
            </div>
            <div className='create__buttonSave'>
              <button>Guardar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
