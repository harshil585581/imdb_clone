import React from 'react'

function Pagination({handlePrev, handleFrow, pageNo}) {
  return (
    <div className='bg-gray-400 p-4 flex justify-center'>
        <div onClick={handlePrev} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleFrow} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination