import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

export default function SharedLayout() {
  const { user } = useSelector((store)=> store.user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate('/landing')
    }

  }, [user, navigate])
  
  return (
    <main className="relative w-screen h-full flex">
      <MobileMenu />
      <SideBar />
      <div className='flex-1'>
        <NavBar />
        <Outlet />
      </div>
    </main>
  )
}
