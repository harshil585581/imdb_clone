import React, { useState } from 'react'

function Watchlist({watchlist}) {

  const[search, setSearch] = useState('')

  let handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        <div className='flex justify-center items-center h-[3rem] w-[9rem] mx-4 bg-blue-400 rounded-xl text-white'>Action</div>
        <div className='flex justify-center items-center h-[3rem] w-[9rem] m-4 bg-blue-400 rounded-xl text-white'>Sci-Fic</div>
      </div>

      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text" placeholder=' search movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'/>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-100 m-8'>
        <table className='w-full text-gray-500 text-center '>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchlist.filter((movieObj)=>{
              return movieObj.original_title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj)=>{
              return <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt="" />    {/* u can use backdrop_path or poster_path  to specify movie poster as both specify movie poster as property in movie object */}
                <div className='mx-8'>{movieObj.original_title}</div>
              </td>

              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>Action</td>
              <td className='text-red-800'>Delete</td>
            </tr>
            })}

            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist