import React from 'react'
import { IoAppsSharp, IoPersonSharp, IoCaretDownSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { clearStore } from '../features/user/userSlice';

export default function NavBar() {

  const { user } = useSelector((store)=> store.user)
  const dispatch = useDispatch()
  

  return (
    <nav className="w-full sticky top-0 h-24 px-4 md:px-10 bg-white flex items-center justify-between border-b">
      <button onClick= {()=>{
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('showBigSidebar')
        if(window.innerWidth < 1024) {
          document.querySelector('#mobileMenu').classList.remove('hidden')
        }
      }}>
        <IoAppsSharp className='text-primary500 text-3xl' />
      </button>
      
      <h1 className="text-3xl">Dashboard</h1>

      <div className='relative'>
        <button className="bg-primary500 rounded text-white p-1 px-2 shadow-md flex items-center space-x-2" onClick= {()=> {
          const subMenu = document.querySelector('#sub-menu')
          subMenu.classList.toggle('hidden')
        }}>
        <div className='inline-block bg-white rounded-full p-1'><IoPersonSharp className="h-3 w-3 mx-auto my-auto text-primary500 rounded-full"/></div> 
          
          <span className='tracking-widest'>{user?.name}</span>
          
          <IoCaretDownSharp className='' />
        </button>

        <button className="hidden absolute top-12 w-full bg-lightGreen text-primary500 p-2 rounded z-30 transition duration-200 shadow-md" id='sub-menu' onClick={()=>{
          dispatch(clearStore("Logging out..."))
          }}>Logout</button>

      </div>

    </nav>
  )
}
