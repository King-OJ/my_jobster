import React, {useState, useEffect} from 'react'
import logo from '../assets/images/logo.svg'
import FormRow from '../components/FormRow'

import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }

  const [values, setValues ]= useState(initialState)

  const {user, isLoading} = useSelector(store => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      navigate('/')
    }
    
  }, [user, navigate])
  

  function handleChange(e){
    const value = e.target.value
    const name = e.target.name

    setValues({...values, [name]: value })
  }

  function handleSubmit(e){
    e.preventDefault()
    const {name, email, password, isMember} = values;
    
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if(isMember) {
      dispatch(loginUser({email: email, password: password}))
      return;
    }

    dispatch(registerUser({name, email, password}))

  }



  return (
    <main className="">
      <div className="flex justify-center items-center h-screen w-screen">
        <form onSubmit={handleSubmit} className="w-[90vw] p-10 bg-white rounded shadow-lg border-t-4 border-primary500 max-w-lg flex flex-col items-center hover:shadow-2xl transition duration-500">
          <img src={logo} alt="" />
          <h3 className="mt-4 text-3xl">{values.isMember ? 'login' : 'register'}</h3>

          {!values.isMember && <FormRow label="name" name="name" type="text" value={values.name} handleChange={handleChange} />}
          <FormRow label="email" name="email" type="email" value={values.email} handleChange={handleChange}/>
          <FormRow label="password" name="password" type="password" value={values.password} handleChange={handleChange} />

          <button type="submit" className="mt-8 bg-primary500 text-white text-center py-2 w-full rounded text-md shadow-md hover:bg-primary600 hover:shadow-lg transition duration-500" disabled={isLoading}>{isLoading? 'Loading...' : 'Submit'}</button>

          <button type="button" className="mt-8 bg-primary200 text-primary600 text-center py-2 w-full rounded text-md shadow-md hover:bg-primary600 hover:text-white hover:shadow-lg transition duration-500" disabled={isLoading} onClick={()=>dispatch(loginUser({email: 'testUser@test.com', password: 'secret'}))}>{isLoading? 'Loading...' : 'Demo App'}</button>

          <div className='mt-6 text-textColor'>{values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <a className='ml-1 text-primary500 cursor-pointer' onClick={()=>setValues({...values, isMember: !values.isMember})}>{values.isMember? 'Register' : 'Login'}</a>
          </div>
        </form>
      </div>
    </main>
  )
}
