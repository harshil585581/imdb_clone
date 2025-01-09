import React from "react";
import Watchlist from "./Watchlist";

function MovieCard({ poster_path, name, movieObj, handelAddtoWatchlist, handelRemoveFromWatchlist, watchlist }) {

  function doesContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id == movieObj.id){
        return true
      }
    }
    return false
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-center relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >

      {doesContain(movieObj) ? (
      <div onClick={()=>handelRemoveFromWatchlist(movieObj)} className="top-4 right-4 text-2xl rounded-lg bg-gray-900/60">
        &#10060;
      </div>) : (
      <div onClick={()=>handelAddtoWatchlist(movieObj)} className="top-4 right-4 text-2xl rounded-lg bg-gray-900/60">
        &#128525;
      </div>)
      }

      <div className="text-white text-xl text-center w-full p-2">
        {name}
      </div>

    </div>
  );
}

export default MovieCard;
