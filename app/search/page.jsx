import React from 'react'
import icons from '../lib/icons'

function Search() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-4 px-4 text-center'> 
    <div className="">{icons.error}</div>
    <h1 className='text-white text-xl font-medium sm:text-4xl sm:font-bold'>404</h1>
    <h1 className='text-grey text-sm font-light sm:text-lg sm:font-normal'>Sorry, We can&apos;t do this right now.</h1>
    </div>
  )
}

export default Search