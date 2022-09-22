import React from 'react'
import { IoBarChartSharp, IoBriefcase, IoCloseSharp, IoDuplicate, IoPersonSharp } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

export default function MobileMenu() {

  function closeMenu() {
      const mobileMenu = document.querySelector('#mobileMenu')
      mobileMenu.classList.add('hidden')
  }

  return (
    <div className="hidden absolute inset-0 z-40 lg:hidden h-screen w-screen bg-gray-900 bg-opacity-60" id="mobileMenu">
      <div className="w-[90vw] h-[90vh] mx-auto bg-white my-10 rounded p-6">
        <div>
          <button className="text-darkRed font-bold" onClick={closeMenu}>
            <IoCloseSharp className='text-5xl' />
          </button>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <img src={logo} alt="" />
          <ul className="mt-10 space-y-10">
            <li className='text-lg flex items-center tracking-widest'>
            <NavLink to="/" className={({isActive})=> isActive ? 'text-textColor': 'text-gray-500'} onClick={closeMenu}>
              <IoBarChartSharp className='inline-block mr-2' /> Stats
            </NavLink></li>
            <li className='text-lg flex items-center tracking-widest'><NavLink to="all-jobs" className={({isActive})=> isActive ? 'text-textColor': 'text-gray-500'} onClick={closeMenu}>
              <IoBriefcase className='inline-block mr-2' /> All Jobs
            </NavLink></li>
            <li className='text-lg flex items-center tracking-widest'><NavLink to="add-job" className={({isActive})=> isActive ? 'text-textColor': 'text-gray-500'} onClick={closeMenu}>
              <IoDuplicate className='inline-block mr-2' /> Add Job
            </NavLink></li>
            <li className='text-lg flex items-center tracking-widest'><NavLink to="profile" className={({isActive})=> isActive ? 'text-textColor': 'text-gray-500'} onClick={closeMenu}>
              <IoPersonSharp className='inline-block mr-2' /> Profile
            </NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
