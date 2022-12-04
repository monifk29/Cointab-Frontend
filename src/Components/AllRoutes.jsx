import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import LogOut from '../pages/LogOut'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<LogOut/>}/>
    </Routes>
  )
}

export default AllRoutes