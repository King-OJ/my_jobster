import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import Job from './Job'
import Loading from './Loading'
import PageBtnContainer from './PageBtnContainer'

export default function JobsContainer() {

  const { jobs, isLoading, totalJobs, numOfPages, page, searchStatus, searchType, sort, search }= useSelector((store)=> store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllJobs());
    
    // eslint-disable-next-line
  }, [page, searchStatus, searchType, sort, search])

  if (isLoading) {
    return (
        <Loading />
    )
  }

  if(jobs.length === 0) {
    return (
      <div className="mt-20">
        <h3 className="text-4xl text-center">No jobs to display...</h3>
      </div>
    )
  }

  return (
    <div className="mt-10">
      <h4 className="font-bold mb-4 text-xl">{totalJobs} {jobs.length > 1 ? 'jobs': "job"} found</h4>   
      <div className="grid gap-4 lg:grid-cols-2">
        {jobs.map((job)=> {
          return (
            <Job key={job._id} {...job} />
          )
        })}
        
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  )
}
