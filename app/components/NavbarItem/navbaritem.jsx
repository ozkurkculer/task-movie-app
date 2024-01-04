"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavbarItem({ name, direction }) {
  const path = usePathname();
  const linkClasses = " flex flex-col gap-2 w-auto items-center";
  const svgImage = () => {
    if (name === "Home") {
      return(<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Home">
          <g id="Home_2">
            <path id="Home_3" d="M16.5246 22H14.7818H7.34876H5.60596C3.86861 22 2.46021 20.4607 2.46021 18.5618V9.84736C2.4669 9.09967 2.78834 8.39702 3.3316 7.94256L9.26584 2.6853C10.31 1.77157 11.7944 1.77157 12.8386 2.6853L18.799 7.93303C19.3402 8.38935 19.6611 9.09083 19.6704 9.83784V18.5618C19.6704 20.4607 18.2619 22 16.5246 22Z" stroke={(path === ('/' + direction) ? "#0296E5" : "#67686D")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>)
    }
    else if (name === "Search") {
      return(<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Search">
          <g id="Search_2">
            <ellipse id="Ellipse_739" cx="10.7885" cy="11.7666" rx="8.14181" ry="8.98856" stroke={(path === ('/' + direction) ? "#0296E5" : "#67686D")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path id="Line_181" d="M16.4513 18.4851L19.6433 22" stroke={(path === ('/' + direction) ? "#0296E5" : "#67686D")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>)
    } else {
      return(
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Save">
          <g id="Bookmark">
            <path id="Path_33968" fillRule="evenodd" clipRule="evenodd" d="M10.6963 18.6316L5.32373 21.881C4.89477 22.1271 4.3663 21.9529 4.12982 21.4874V21.4874C4.0614 21.3432 4.02449 21.1834 4.02203 21.0206V6.62244C4.02203 3.87644 5.7217 2.77805 8.16756 2.77805H13.9133C16.2845 2.77805 18.0588 3.80322 18.0588 6.43937V21.0206C18.0588 21.2804 17.9653 21.5295 17.7989 21.7132C17.6326 21.8968 17.4069 22 17.1716 22C17.0216 21.9974 16.874 21.9567 16.7405 21.881L11.3347 18.6316C11.1355 18.5128 10.8955 18.5128 10.6963 18.6316Z" stroke={(path === ('/' + direction) ? "#0296E5" : "#67686D")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>)
    }
  }

  return (
    <Link href={'/' + direction} className={(path === ('/' + direction) ? "text-primary" : "text-secondary") + linkClasses}>
      {svgImage()}
      <p className={'text-xs font-bold'}>{name}</p>
    </Link>
  )
}

export default NavbarItem