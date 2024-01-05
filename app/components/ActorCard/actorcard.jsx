import React from 'react'

function ActorCard({data}) {
  return (
    <div>
      {data.profile_path}
      {data.name}
    </div>
  )
}

export default ActorCard