import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { clearInputs, createJob, editJob, handleChange } from '../../features/job/jobSlice';

export default function AddJob() {

  const { user } = useSelector((store)=> store.user)

  const {
    editJobId,
    isEditing,
    isLoading, 
    position, 
    company, 
    status,
    jobLocation,
    statusOptions,
    jobTypeOptions,
    jobType
  } = useSelector((store)=>store.job)

  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault();
    if(!position || !company || !jobLocation){
      toast.error('Please Fill Out All Fields');
      return;
    }
    if(isEditing){
      dispatch(editJob({jobId: editJobId, job: {position, company, jobLocation, status, jobType}}))
      return;
    }
    dispatch(createJob({position, company, jobLocation, status, jobType}))
  }

  function handleJobInput(e){
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value}))
  }

  useEffect(() => {
    if(!isEditing){
      dispatch(handleChange({name:'jobLocation', value: user.location}))
    }
    // eslint-disable-next-line
  }, [])
  

  return (
    <section className="border-l">
      <div className="m-10">
        <form className="w-full bg-white rounded shadow-lg p-8" onSubmit={handleSubmit}>
          <h3 className="text-2xl">{isEditing ? 'Edit Job' : 'Add Job'}</h3>

          <div className="mt-8 grid lg:grid-cols-2 gap-6 xl:grid-cols-3">
            <div>
              <label htmlFor="position" className="text-textColor text-md tracking-widest">Position</label>
              <input type="text" className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' id="position" name='position' placeholder='Enter job position' value={position} onChange={handleJobInput} />
            </div>

            <div>
              <label htmlFor="company" className="text-textColor text-md tracking-widest">Company</label>
              <input type="text" className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' id='company' name='company' placeholder='Enter company' value={company} onChange={handleJobInput} />
            </div>

            <div>
              <label htmlFor="jobLocation" className="text-textColor text-md tracking-widest">Job Location</label>
              <input type="text" className='mt-2 w-full border p-2 rounded bg-backgroundColor placeholder:text-sm outline-none' id='jobLocation' name='jobLocation' placeholder='Enter location' value={jobLocation} onChange={handleJobInput} />
            </div>

            <div>
              <label htmlFor="status" className="text-textColor text-md tracking-widest">Status</label>
              <select id="status" name="status" className='mt-2 w-full border p-2 rounded bg-backgroundColor outline-none' value={status} onChange={handleJobInput}>
              {statusOptions.map((status, index)=> {
                  return <option key={index} value={status}>{status}</option>
                })}
              </select>
            </div>

            <div>
              <label htmlFor="jobType" className="text-textColor text-md tracking-widest">Job Type</label>
              <select id='jobType' name="jobType" className='mt-2 w-full border p-2 rounded bg-backgroundColor outline-none' value={jobType} onChange={handleJobInput}>
                {jobTypeOptions.map((jobs, index)=> {
                  return <option key={index} value={jobs}>{jobs}</option>
                })}
              </select>
            </div>

            <div className="flex items-end justify-between">
              <button type="button" className="text-white p-2 w-[48%] bg-gray-500 rounded hover:bg-gray-700 transition duration-200 ease" onClick={()=> dispatch(clearInputs()) }> Clear</button>
              <button type="submit" className="text-white p-2 w-[48%] bg-primary500 rounded hover:bg-primary700 transition duration-200 ease" onClick={handleSubmit} disabled={isLoading}> {isLoading ? 'Adding job...' : `${isEditing ? "Edit Job" : "Submit"}`}</button>
            </div>


          </div>
        </form>
      </div>
    </section>
  )
}
