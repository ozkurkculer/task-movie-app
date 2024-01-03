import NavbarItem from "../NavbarItem";

function Navbar() {
  return (
    <div className="fixed bottom-0 w-full border-t-2 border-primary bg-third flex flex-row justify-between px-10 py-4 ">
      <NavbarItem name={'Home'} direction={''} svgname={'HomeIcon'} />
      <NavbarItem name={'Search'} direction={'search'} svgname={'SearchIcon'}/>
      <NavbarItem name={'Watch list'} direction={'watchlist'} svgname={'SaveIcon'}/>
    </div>
  )
}

export default Navbar