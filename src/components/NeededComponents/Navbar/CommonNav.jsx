import { NavLink } from "react-router-dom"

export const CommonNav = ({direction, children})=>{
  return(
    <NavLink
      to={direction}
      className={({ isActive }) =>
        isActive
          ? 'p-2 px-6 bg-green-600 text-red-600 text-nowrap'
          : 'p-2 px-6 hover:bg-red-500 text-nowrap'
      }
    >
      {children}
    </NavLink>
  )
}