import React from 'react'
import icons from '../lib/icons'

function WatchList() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-4 px-4 text-center'> 
    <div className="">{icons.magicBox}</div>
    <h1 className='text-white text-xl font-medium sm:text-4xl sm:font-bold'>There Is No Movie Yet!</h1>
    <h1 className='text-grey text-sm font-light sm:text-lg sm:font-normal'>Find your movie by Type title, categories, years, etc </h1>
    </div>
  )
}

export default WatchList