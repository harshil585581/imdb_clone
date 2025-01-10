import React, { useEffect, useState } from 'react';
import genreid from '../Utility/genre'

function Watchlist({watchlist, setWatchlist, handelRemoveFromWatchlist}) {

  const[search, setSearch] = useState('')

  const[genreList, setGenreList] = useState(['all genre'])

  const [currGenre, setCurrGenre] = useState('all genre')

  let handleSearch = (e) =>{
    setSearch(e.target.value)
  };

  let handleFilter = (genre) =>{
    setCurrGenre(genre)
  }

  let sortIncrease = () =>{
    let sortedIncrease = watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...sortedIncrease])
  }

  let sortDecrease = () =>{
    let sortedDecrease = watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...sortedDecrease])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreid[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['all genre', ...temp])
  },[watchlist])


  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre)=>{
         return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre?'flex justify-center items-center h-[3rem] w-[9rem] mx-4 bg-blue-400 rounded-xl text-white' : 'flex justify-center items-center h-[3rem] w-[9rem] mx-4 bg-gray-400/50 rounded-xl text-white'}>{genre}</div>
        })}
      </div>

      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text" placeholder=' search movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'/>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-100 m-8'>
        <table className='w-full text-gray-500 text-center '>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncrease} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecrease} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchlist.filter((movieObj)=>{
              if(currGenre == "all genre"){
                return true
              }
              else{
                return genreid[movieObj.genre_ids[0]] == currGenre;
              }
            }).filter((movieObj)=>{
              return movieObj.original_title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj)=>{
              return <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt="" />    {/* u can use backdrop_path or poster_path  to specify movie poster as both specify movie poster as property in movie object */}
                <div className='mx-8'>{movieObj.original_title}</div>
              </td>

              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>{genreid[movieObj.genre_ids[0]]}</td>
              <td onClick={()=> handelRemoveFromWatchlist(movieObj)} className='text-red-800'>Delete</td>
            </tr>
            })}

            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist