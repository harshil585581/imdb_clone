import React from 'react'

function Banner() {
  return (
    <div className='h-[60vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://i.pinimg.com/originals/2b/64/8f/2b648fa6172bc7d70e8668c6e5ffd7d9.jpg)`}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>Avengers Endgame</div>
    </div>
  )
}

export default Banner