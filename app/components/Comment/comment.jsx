import Image from "next/image"
import { useEffect } from 'react'

function Comment({ data }) {

  return (
    <div className="container">
      <div className='grid text-white py-4 grid-cols-6'>
        <div className="col-span-1 flex flex-col items-center justify-start gap-3">
          <Image src="/user.png" width={75} height={75} alt="User image"></Image>
          <p className="text-primary font-light text-sm">{data.author_details.rating}</p>
        </div>
        <div className="col-span-5">
          <p className="font-medium">{data.author}</p>
          <br /> <p className="text-sm">{data.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment