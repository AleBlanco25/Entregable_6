import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {

  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(false)

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {console.log(res.data.data)
      localStorage.setItem('token', res.data.data.token)
      setIsLogged(true)
      navigate('/')
      })
      .catch(err => console.log(err))
      // colocar credenciales inválidas
      reset({
        email: '',
        password: '',
      });
  }

  useEffect(() => {
    const condition = localStorage.getItem('token') ? true : false
    setIsLogged(condition)
  }, [])



  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if (isLogged) {
    return (
    <div className='user__logged'>
      <p className='user__status'>Current status: </p>
      <h1 className='user__logged-title'>User Logged 👍</h1>
      <button className='user__logged-btn' onClick={handleLogout}>Logout</button>
    </div>
    )
  }

  return (
    <div className='login'>
      <div className='login-container'> 
        <h2 className='login__title'>Welcome! Please enter your email and password to continue</h2>
        <p className='login__text'>You have to Log In to get access to your cart</p>
        <div className='data'>
          <h4 className='data__title'>Test data</h4>
          <p className='data__text'> <i className="fa-regular fa-envelope"></i>ale.blanco.2589@gmail.com</p>
          <p><i className="fa-solid fa-lock"></i>0123456789</p>
        </div>
        <form className='login__form' onSubmit={handleSubmit(submit)}>
          <div className='login__inputs'>
            <label className='login__label' htmlFor="email"><span className='email-span'>Email</span></label>
            <input className='login__input' type="text" id='email' {...register("email")} />
          </div>
          <div className='login__inputs'>
            <label className='login__label' htmlFor="password"><span className='password-span'>Password</span></label>
            <input className='login__input' type="password" id='password' {...register("password")} />
          </div>
          <button className='login__btn'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login


