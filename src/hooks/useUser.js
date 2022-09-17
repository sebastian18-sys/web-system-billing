import { useEffect, useState } from "react"
import { postLogin } from "../services/login"

function useUser() {
  const [user, setUser] = useState([])
  const [state, setState] = useState({ loading: false, error: false })

  useEffect(() => {
    const logeedUser = window.localStorage.getItem('loggedUser')
    if(logeedUser) {
      const user = JSON.parse(logeedUser)
      setUser(user)
    }
  }, [])

  const login = async (username, password) => {
    setState({ loading: true, error: false })
    
    postLogin(username, password)
      .then(result => {
        window.localStorage.setItem(
          'loggedUser', JSON.stringify(result)
        )
        setState({ loading: false, error: false })
        setUser(result)
      })
      .catch(err => {
        console.error(err)
        window.sessionStorage.removeItem('loggedUser')
        setState({loading: false, error: true })
      })
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedUser')
  }

  return {
    user,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}

export default useUser