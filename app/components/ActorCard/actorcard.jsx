import React from 'react'

function ActorCard({ data }) {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <img src={"https://image.tmdb.org/t/p/w500" + data.profile_path} alt="" className='w-36 rounded-full h-36 object-cover' />
      <p className="text-white text-nowrap">{data.name}</p>
    </div>
  )
}

export default ActorCard