import React from 'react'
import { Link } from 'react-router-dom';

import errorImg from '../assets/images/not-found.svg';

export default function Error() {
  return (
    <main>
      <div className="container mx-auto text-center h-screen flex flex-col justify-center items-center">
        <img src={errorImg} alt="" className="max-w-[600px] w-[90vw]" />
        <div className="mt-8 text-center space-y-4">
          <h3 className=" text-3xl">oh! Page not found</h3>
          <p className="text-gray-500 max-w-xs md:max-w-full">We can't seem to find the page you're looking for.</p>
          <Link to="/" className="underline block tracking-wide text-md text-primary500">Back Home</Link>
        </div>
      </div>
    </main>
  )
}
