import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler =() =>{
        authService.logout().then(() =>{
            dispatch(logout())
        })
    }
    return (
        <button className='inline-block bg-blue-600 px-6 py-2 duration-200 hover:bg-blue-400 rounded-xl' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
