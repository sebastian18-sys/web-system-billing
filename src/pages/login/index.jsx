import { useEffect } from 'react'
import "./login.css"
import { MdLockOutline, MdPerson, MdOutlineKeyboardArrowRight} from "react-icons/md"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import useUser from '../../hooks/useUser'
import logo from "../../assets/logo.png"
import { Helmet } from 'react-helmet'
import Spinner from '../../components/Spinner'

export default function Login() {

  const { user, isLoginLoading, hasLoginError, login } = useUser() 
  // let token = null
  // const setToken = newToken => {
  //   token = `Bearer ${newToken}`
  // }

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if(!Array.isArray(user)) {
      navigate("/", {replace: true})
    } 
  }, [user])

  // Function submit date validate
  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      login(username, password) 
    } catch (err) {
      console.error("Error...")
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Login</title>
      </Helmet>
      <div className='login'>
        <div className='login__container'>
          <header className='login__header'>
            <img src={logo} alt='logo' loading='lazy' />
            <h2>Ingrese sus credenciales</h2>
          </header>
          <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form__container'>          
              <label>
                <MdPerson />
                <input
                  name='username'
                  type='text' 
                  placeholder='Ingrese su usuario'
                  autoComplete="off"
                  required
                  {...register('username')}
                />
              </label>
              <label>
                <MdLockOutline />
                <input
                  name='password'
                  placeholder='Ingrese su contraseña'
                  type="password"
                  autoComplete="off"
                  required
                  {...register('password')}
                />
              </label>
              <div className='checkbox'>
                <input type="checkbox" />
                <p>Recordar</p>
              </div>
              {isLoginLoading && (
                <button className='button'>
                  <Spinner />
                </button>
              )}
              {!isLoginLoading && (
                <button className='button'>
                  <p>Acceder</p>
                  <MdOutlineKeyboardArrowRight />
                </button>
              )}
              {hasLoginError && (
                <div className='error_message'>
                  <p>Credenciales inválidas</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
