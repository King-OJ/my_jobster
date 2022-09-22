import React from 'react'
import moment from 'moment'
import { IoBriefcase, IoCalendarNumberSharp, IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteJob, setEditJob } from '../features/job/jobSlice'

export default function Jobs({_id, company, position, status, jobType, jobLocation, createdAt, editJobId}) {

  
  const dispatch = useDispatch()

  const date = moment(createdAt).format('MMM Do, YYYY')
  return (
    <div className="w-full bg-white rounded p-6 shadow-md">
      <div className="pb-4 border-b">
        <div className="flex items-center">
          <div className="bg-primary500 rounded text-white py-3 px-5 text-3xl font-bold ">{company.charAt(0)}</div>
          <div className="ml-6 space-y-1">
            <h5 className="text-xl">{position}</h5>
            <h6 className="text-lg text-gray-400">{company}</h6>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row md:justify-start space-y-4 sm:space-y-0">
        <div className="space-y-4 text-gray-500 sm:w-1/2">
          <div className='capitalize text-md flex items-center tracking-widest '>
            <IoLocationSharp className="inline-block mr-3 text-xl" />{jobLocation}
          </div>
          <div className='capitalize text-md flex items-center tracking-widest'>
            <IoBriefcase className="inline-block mr-3 text-xl" />{jobType}
          </div>

          <div className="space-x-2">
            <Link to='/add-job' className="bg-lightGreen rounded text-darkGreen px-3 py-2 shadow-md tracking-widest " onClick={()=> dispatch(setEditJob({ editJobId: _id, position, company, jobType, jobLocation, status,}))}>Edit</Link>

            <button className="bg-lightRed rounded text-darkRed px-3 py-1 shadow-md tracking-widest" onClick={()=> dispatch(deleteJob(_id))}>Delete</button>
          </div>
        </div>

        <div className="space-y-3 text-gray-500 sm:w-1/2">
          <div className='text-md flex items-center tracking-widest'>
            <IoCalendarNumberSharp className="inline-block mr-3 text-xl" />{date}
          </div>

          <div className={`${status} capitalize inline-block rounded px-3 py-1 shadow-md tracking-widest`}>{status}</div>

        
        </div>


      </div>
    </div>
  )
}
