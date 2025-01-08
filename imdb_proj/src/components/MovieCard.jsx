import React from "react";

function MovieCard({ poster_path, name }) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >

      <div className="text-white text-xl text-center w-full p-2">
        {name}
      </div>

    </div>
  );
}

export default MovieCard;
