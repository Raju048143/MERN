import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'

function LogoutButton() {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout()
        .then(()=>dispatch.apply(logout()))
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100'>Logout</button>
  )
}

export default LogoutButton