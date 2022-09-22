import React from 'react'
import {  NavLink } from 'react-router-dom'
import { IoBarChartSharp, IoBriefcase, IoDuplicate, IoPersonSharp } from 'react-icons/io5'

import logo from '../assets/images/logo.svg'

export default function SideBar() {
  return (
    <aside className='sidebar sticky top-0 h-[100vh] hidden ml-0 w-64 bg-white lg:flex flex-col items-center py-6 duration-1000 transition-all ease-in-out  '>
      <img src={logo} alt="" />
      <ul className="mt-16 w-full pl-4">
        <li className="group hover:bg-backgroundColor hover:cursor-pointer py-6 px-8 text-lg transition duration-500">
          <NavLink to='/' className={({isActive})=> isActive ?"group-hover:translate-x-2 flex items-center text-textColor transition ease duration-500"  
          : 
          "group-hover:translate-x-2 flex items-center text-gray-400 transition ease duration-500"
          }><IoBarChartSharp className='mr-4 text-primary500' /> Stats</NavLink>
        </li>
        <li className="group hover:bg-backgroundColor hover:cursor-pointer py-6 px-8  text-lg transition duration-500">
          <NavLink to='all-jobs' className={({isActive})=> isActive ?"group-hover:translate-x-2 flex items-center text-textColor transition ease duration-500"  
          : 
          "group-hover:translate-x-2 flex items-center text-gray-400 transition ease duration-500"
          }><IoBriefcase className='mr-4 group-hover:text-primary500' /> All Jobs</NavLink>
        </li>
        <li className="group hover:bg-backgroundColor hover:cursor-pointer py-6 px-8  text-lg transition duration-500">
          <NavLink to='add-job' className={({isActive})=> isActive ?"group-hover:translate-x-2 flex items-center text-textColor transition ease duration-500"  
          : 
          "group-hover:translate-x-2 flex items-center text-gray-400 transition ease duration-500"
          }><IoDuplicate className='mr-4 group-hover:text-primary500' /> Add Job</NavLink>
        </li>
        <li className="group hover:bg-backgroundColor hover:cursor-pointer py-6 px-8  text-lg transition duration-500">
          <NavLink to='profile' className={({isActive})=> isActive ?"group-hover:translate-x-2 flex items-center text-textColor transition ease duration-500"  
          : 
          "group-hover:translate-x-2 flex items-center text-gray-400 transition ease duration-500"
          }><IoPersonSharp className='mr-4 group-hover:text-primary500 ' /> Profile</NavLink>
        </li>
      </ul>
    </aside>
  )
}
