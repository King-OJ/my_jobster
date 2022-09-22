import React from 'react'

export default function FormRow({label, type, value, handleChange, name}) {
  return (
    <div className="mt-6 self-start text-md w-full text-textColor">
    <label htmlFor={label} className='capitalize tracking-wider'>{label}</label>
    <input 
    type={type}
    id={label} 
    name={name} 
    value={value} 
    onChange={handleChange} 
    className="mt-2 w-full bg-backgroundColor rounded p-1 placeholder:text-sm outline-none border-2" placeholder={`Enter your ${label}`} />
    </div>
  )
}
