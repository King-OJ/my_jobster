import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import landingImg from '../assets/images/main.svg'

export default function Landing() {
  return (
    <main className='m-6'>
      <div className="max-w-6xl h-screen mx-auto">
        <img src={logo} alt="" />
        <div className="my-20 w-full flex flex-col-reverse lg:flex-row items-center">

          <div className="w-full text-center lg:w-1/2 lg:text-left px-1 my-10 lg:my-0">
            <h1 className="text-4xl font-bold">Job <span className="text-primary500">Tracking</span> App</h1>
            <p className="text-gray-600 mt-6 max-w-md mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo aliquam quaerat molestiae harum, cupiditate quos aspernatur! Mollitia ea corrupti quidem.</p>
            <Link to='/register' className="inline-block mt-6 bg-primary500 text-white font-semibold py-2 px-3 rounded text-lg hover:bg-primary600 transition duration-500">Login / Register</Link>
          </div>

          <div className="lg:w-1/2 lg:block px-1">
            <img src={landingImg} alt="" />
          </div>



        </div>
      </div>
    </main>
  )
}
