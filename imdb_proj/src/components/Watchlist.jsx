import React from 'react'

function Watchlist() {
  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        <div className='flex justify-center items-center h-[3rem] w-[9rem] mx-4 bg-blue-400 rounded-xl text-white'>Action</div>
        <div className='flex justify-center items-center h-[3rem] w-[9rem] m-4 bg-blue-400 rounded-xl text-white'>Sci-Fic</div>
      </div>

      <div className='flex justify-center my-4'>
        <input type="text" placeholder=' search movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'/>
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
            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={`https://wallpapers.com/images/file/movie-poster-background-zd9fqn8prhr9kewl.jpg`} alt="" />
                <div className='mx-8'>Tron Legacy</div>
              </td>

              <td>8.5</td>
              <td>9</td>
              <td>Sci-Fic</td>
              <td className='text-red-800'>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist