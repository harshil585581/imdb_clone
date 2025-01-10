import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let [watchlist, setWatchlist] = useState([])

  let handelAddtoWatchlist = (movieObj) =>{
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist))     //items get stored in local storage as key value pair moviesApp is key u can give any name then u have to pass newWatchList to store those newWaatchList items
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  let handelRemoveFromWatchlist = (movieObj) =>{
    let filterWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchlist(filterWatchlist)
    localStorage.setItem('moviesApp', JSON.stringify(filterWatchlist))
  }

  useEffect(() =>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<> <Banner /> <Movies handelAddtoWatchlist={handelAddtoWatchlist} handelRemoveFromWatchlist={handelRemoveFromWatchlist} watchlist={watchlist} /> </>} />
          
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handelRemoveFromWatchlist={handelRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
