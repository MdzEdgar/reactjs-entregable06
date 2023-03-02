import React from 'react'
import { useSelector } from 'react-redux'
import "./styles/User.css"

const User = () => {
  const {
    user: {firstName, lastName, email},
  } = useSelector(store => store.userInfo)

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
            <div className="userInfo__phone"><i className='bx bx-phone' ></i><span>1234567890</span></div>
          </div>
          <button className='userInfo__btn'>Log Out</button>
        </section>
      </div>
    </main>
  )
}

export default User