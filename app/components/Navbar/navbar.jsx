import React from "react";
import NavbarItem from "../NavbarItem";

function Navbar() {
  return (
    <div className="w-full bg-third flex flex-row justify-between px-10 py-4">
      <NavbarItem name={'Home'} icon={'/icons/Home.svg'}/>
      <NavbarItem name={'Search'} icon={'/icons/Search.svg'}/>
      <NavbarItem name={'Watch list'} icon={'/icons/Save.svg'}/>
    </div>
  )
}

export default Navbar