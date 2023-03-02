import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut } from '../store/slices/userInfo.slice'
import "./styles/User.css"

const User = () => {
  const {
    token,
    user: {firstName, lastName, email, phone},
  } = useSelector(store => store.userInfo)

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(userLogOut())
  }

  return (
    <main className='userInfo'>
      <div className='userInfo__container'>
        <section className='userInfo__section'>
          <h3 className='userInfo__welcome'>Welcome <span>{firstName}</span>, here are your information</h3>
          <div className="userInfo__data">
            <h4>User Info</h4>
            <div className="userInfo__firstName"><i className='bx bxs-user-circle'></i><span>{firstName}</span></div>
            <div className="userInfo__lastName"><i className='bx bxs-user-account' ></i><span>{lastName}</span></div>
            <div className="userInfo__email"><i className='bx bx-envelope' ></i><span>{email}</span> </div>
            <div className="userInfo__phone"><i className='bx bx-phone' ></i><span>{phone}</span></div>
          </div>
          <button onClick={handleLogOut} className='userInfo__btn'>Log Out</button>
        </section>
      </div>
    </main>
  )
}

export default User