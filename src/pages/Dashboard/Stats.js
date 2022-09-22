import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/Cards'
import ChartsContainer from '../../components/ChartsContainer'
import Loading from '../../components/Loading'
import { showStats } from '../../features/allJobs/allJobsSlice'

export default function Stats() {
  const dispatch = useDispatch()

  const { stats, isLoading, monthlyApplications, } = useSelector((store)=> store.allJobs)

  

  useEffect(() => {
    dispatch(showStats())
  }, [])

  if(isLoading) {
    return <Loading />
  }

  return (
    <section className="border-l">
      <div className="m-10">
        <div className="grid w-full md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Cards stats={stats}/>
        </div>
        {monthlyApplications.length > 0 && <ChartsContainer /> }
      </div>
    </section>
  )
}
