import React from 'react'
import { IoToday, IoCreate, } from 'react-icons/io5'
import { MdOutlineFreeCancellation } from 'react-icons/md'

export default function Cards({stats}) {

  return (
    <>
    <div className='w-full md:max-w-md p-8 bg-white rounded border-b-4 border-yellowishGold'>
      
      <div className="flex items-center justify-between">
        <h4 className='text-yellowishGold text-6xl font-bold'>{stats.pending || 0}</h4>
        <div className={`bg-yellowishOrange p-3 text-yellowishGold text-4xl rounded`}>
          <IoToday />
        </div>
      </div>
      
        <h6 className="text-xl mt-6 text-textColor">Pending Applications</h6>
    </div>

    <div className='w-full md:max-w-md p-8 bg-white rounded border-b-4 border-blueishGold'>
      
      <div className="flex items-center justify-between">
        <h4 className='text-blueishGold text-6xl font-bold'>{stats.interview || 0}</h4>
        <div className={`bg-blueishOrange p-3 text-blueishGold text-4xl rounded`}>
          <IoCreate />
        </div>
      </div>
      
        <h6 className="text-xl mt-6 text-textColor">Interviews Scheduled</h6>
    </div>

    <div className='w-full md:max-w-md p-8 bg-white rounded border-b-4 border-redishGold'>
      
      <div className="flex items-center justify-between">
        <h4 className={`text-redishGold text-6xl font-bold`}>{stats.declined || 0}</h4>
        <div className={`bg-redishOrange p-3 text-redishGold text-4xl rounded`}>
          <MdOutlineFreeCancellation />
        </div>
      </div>
      
        <h6 className="text-xl mt-6 text-textColor">Jobs Declined</h6>
    </div>
    </>
  )
}
