import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice'

export default function FormCols() {
  const { isLoading, sortOptions, search, searchStatus, searchType, sort } = useSelector((store)=> store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store)=> store.job)

  const dispatch = useDispatch()

  function handleSearch(e){
    const name = e.target.name
    let value = e.target.value
    if(isLoading) return;
    
    dispatch(handleChange({name, value}))
    
  }


  return (
    <>
    <div>
    <label htmlFor="search" className="text-textColor text-md tracking-widest">Search</label>
    <input id="search" type="text" className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' name='search' placeholder='Enter job title' value={search} onChange={handleSearch}/>
    </div>
    
    <div>
    <label htmlFor="status" className="text-textColor text-md tracking-widest">Status</label>
    <select id="status" name="searchStatus" className='mt-2 w-full border p-2 rounded bg-backgroundColor outline-none' value={searchStatus} onChange={handleSearch}>
      <option value="all">all</option>
      {statusOptions.map((status, index)=> {
        return <option value={status} key={index}>{status}</option>
      })}
    </select>
    </div>
    
    <div>
    <label htmlFor="type" className="text-textColor text-md tracking-widest">Type</label>
    <select id="type" name="searchType" className='mt-2 w-full border p-2 rounded bg-backgroundColor outline-none' value={searchType} onChange={handleSearch}>
      <option value="all">all</option>
      {jobTypeOptions.map((job, index)=> {
        return <option value={job} key={index}>{job}</option>
      })}
    </select>
    </div>
    
    <div>
    <label htmlFor="sort" className="text-textColor text-md tracking-widest">Sort</label>
    <select id="sort" name='sort' className='mt-2 w-full border p-2 rounded bg-backgroundColor outline-none' value={sort} onChange={handleSearch}>
      {sortOptions.map((sortOption, index)=>{
        return <option key={index} value={sortOption}>{sortOption}</option>
      })}
    </select>
    </div>

    <div className="flex items-end w-full">
      <button type="button" className="bg-lightRed text-darkRed py-2 px-8 text-center rounded shadow-md hover:bg-darkRed hover:text-white transition duration-200 w-full" onClick={()=>{dispatch(clearFilters())}} disabled={isLoading}>Clear Filters</button>
    </div>
    </>
  )
}
