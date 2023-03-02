import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { loginUser } from '../store/slices/userInfo.slice'
import "./styles/Login.css"

const Login = () => {
  const {register, handleSubmit, reset} = useForm()

  const {
    token
  } = useSelector(store => store.userInfo)

  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(loginUser(data))
    reset({
      email: "",
      password: ""
    })
  }

  return (
    <main className='login'>
      {
        token ? (
          <Navigate to="/user" />
        ) : (
        <form className='login-form__container' onSubmit={handleSubmit(submit)}>
        <h3 className='login-form__title'>Welcome! Enter your email and password to continue</h3>

        <div className='login-form__containerTest'>
          <h4 className='login-form__titleTest'>Test data</h4>
          <div className='login-form__emailTest'>
            <i className='bx bx-envelope'></i> john@gmail.com
          </div>
          <div className='login-form__passwordTest'>
            <i className='bx bx-lock-alt'></i> john1234
          </div>
        </div>

        <div className='login-form__divInfo'>
          <label className='login-form__label' htmlFor="">Email</label>
          <input className='login-form__input' type="text" {...register("email")} />
        </div>
        <div className='login-form__divInfo'>
          <label className='login-form__label' htmlFor="">Password</label>
          <input className='login-form__input' type="password" {...register("password")} />
        </div>

        <button className='login-form__btn'>Login</button>

        <p className='login-form__footerText'>
          Don't have an account? <span>Sign up</span>
        </p>
      </form>
        )
      }
    </main>
  )
}

export default Login