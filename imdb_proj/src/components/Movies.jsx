import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies() {

  const [movies,  setmovies] = useState([])
  const [pageNo, setpageNo] = useState(1)

  const handlePrev = () =>{
    if (pageNo==1)(
      setpageNo(pageNo)
    )
    else(
      setpageNo(pageNo-1)
    )
  }

  const handleFrow = () =>{
    setpageNo(pageNo+1)
  }

  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6d36a24fdfd7ac99a4b1a0b5670512d3&language=en-US&page=${pageNo}`).then(function(res){
      setmovies(res.data.results)
    })
  }, [pageNo])

  return (
    <div>
        <div className='text-2xl font-bold text-center m-5'>
            Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-5'>
            {movies.map((movieObj) => {
                 return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>   // original_title is movie title name that is present in api
            })}
            
        </div>

        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleFrow={handleFrow}/>
    </div>
  )
}

export default Movies


