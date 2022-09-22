import React from 'react'
import { IoChevronBackSharp, IoChevronForwardOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../features/allJobs/allJobsSlice'

export default function PageBtnContainer() {

  const { page, numOfPages }= useSelector((store)=> store.allJobs)
  const pages = Array.from({length:numOfPages}, (_, index)=> {
    return index + 1;
  })
 
  const dispatch = useDispatch()

  function nextPage(){
    console.log("next page")
    let nextPage = page + 1;
    if(nextPage > numOfPages){
      nextPage = 1
    }
    dispatch(changePage(nextPage))
  }
  function prevPage(){
    let prevPage = page - 1;
    if(prevPage < 1){
      prevPage = numOfPages;
    }
    dispatch(changePage(prevPage))
  }

  return (
    <div className="my-10 flex justify-end">
      <div className="flex space-x-3 items-center">
        <button className="pageBtn" onClick={prevPage}><IoChevronBackSharp className=" mr-1 text-xl inline-block" /> Prev</button>

        <div className="space-x-1">
        {pages.map((pageNumber)=> {
          return <button type="button" key={pageNumber} className={pageNumber === page ? 'active page' : "page"} onClick={()=>dispatch(changePage(pageNumber)) }>{pageNumber}</button>
        })}
        </div>

        <button className="pageBtn" onClick={nextPage}>Next <IoChevronForwardOutline className=" ml-1 text-xl inline-block" /></button>
      </div>
    </div>
  )
}
