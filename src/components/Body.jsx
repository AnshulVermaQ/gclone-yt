import React from 'react'
import Sidebar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
       
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
