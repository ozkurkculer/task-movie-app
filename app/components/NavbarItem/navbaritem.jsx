import React from 'react'
import Image from 'next/image'

function NavbarItem({name, icon}) {
  return (
    <div className="flex flex-row gap-2">
        <Image src={icon} height={24} width={21.739} alt={name +'icon'}/>
        <p className='text-xs font-normal text-secondary active:text-primary'>{name}</p>
    </div>
  )
}

export default NavbarItem