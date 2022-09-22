import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AreaChartComponent from './AreaChart'
import BarChartComponent from './BarChart'

export default function ChartsContainer() {

  const [barChart, setbarChart ] = useState(true)

  const { monthlyApplications: data } = useSelector((store)=> store.allJobs)

  return (
    <div className="mt-16 flex flex-col mx-auto">
      <h3 className="text-2xl text-center">Monthly Applications</h3>
      <button className=" font-bodyFont font-semibold mt-3 text-primary500 text-xl text-center mb-16" onClick={()=>setbarChart(!barChart) }>{ barChart ? 'Area Chart' : 'Bar Chart'}</button>

      {barChart ? <BarChartComponent data={data}/> : <AreaChartComponent data={data} />}



    </div>
  )
}
