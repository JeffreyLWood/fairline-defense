import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'

const UserHome = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      <Navbar />
      <h3>Hi, {user.firstName}</h3>
    </div>
  )
}

export default UserHome
