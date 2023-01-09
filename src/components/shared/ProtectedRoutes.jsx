import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

if (localStorage.getItem('token')) {
    //Estoy loggeado
    return <Outlet/>
} else {
    //NO estoy Loggeado
    return <Navigate to='/login'/>
    }
}

export default ProtectedRoutes