import React from 'react'
import { useDispatch } from 'react-redux'
import FormCols from '../../components/FormCols'
import JobsContainer from '../../components/JobsContainer'
import { clearFilters } from '../../features/allJobs/allJobsSlice'

export default function AllJobs() {

  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()
    dispatch(clearFilters())
  }

  return (
    <section className="border-l">
      <div className="m-10">
        <form className="w-full bg-white rounded shadow-lg p-8" onSubmit={handleSubmit}>
          <h3 className="text-2xl">Search Form</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
            <FormCols  />
          </div>
        </form>
        <JobsContainer />
      </div>
    </section>
  )
}
