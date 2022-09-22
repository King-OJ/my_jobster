import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';

export default function Profile() {

  const {isLoading, user}= useSelector((store)=> store.user);
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email ||'',
    location: user?.location ||'',

  })

  function handleSubmit(e){
    e.preventDefault();
    const {name, lastName, email, location} = userData
    if(!name || !lastName || !email || !location){
      toast.error('Please fill out all fields');
      return;
    }

    dispatch(updateUser(userData))
  }

  function handleChange(e){
    const value = e.target.value;
    const name = e.target.name;

    setUserData({...userData, [name]: value})
  }

  return (
    <section className="border-l">
      <div className="m-10">
        <form className="w-full bg-white rounded shadow-lg p-8" onSubmit={handleSubmit}>
          <h3 className="text-2xl">Profile</h3>

          <div className="mt-8 grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            <div>
              <label htmlFor="name" className="text-textColor text-md tracking-widest">Name</label>
              <input type="text" value={userData.name} onChange={handleChange} className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' name='name' placeholder='Enter your name' />
            </div>

            <div>
              <label htmlFor="last name" className="text-textColor text-md tracking-widest">Last Name</label>
              <input type="text" value={userData.lastName} onChange={handleChange} className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' name='lastName' placeholder='Enter your last name' />
            </div>

            <div>
              <label htmlFor="email" className="text-textColor text-md tracking-widest">Email</label>
              <input type="email" value={userData.email} onChange={handleChange} className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' name='email' placeholder='Enter your email' />
            </div>

            <div>
              <label htmlFor="location" className="text-textColor text-md tracking-widest">Location</label>
              <input type="text" value={userData.location} onChange={handleChange} className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' name='location' placeholder='Enter your location' />
            </div>

            <div className="w-full flex items-end">
              <button type="submit" className="text-white p-2 w-full bg-primary500 rounded hover:bg-primary700 transition duration-200 ease" disabled={isLoading}> {isLoading ? 'Updating...':'Save Changes'}</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}
