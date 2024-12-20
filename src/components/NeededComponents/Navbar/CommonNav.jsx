import { NavLink } from "react-router-dom"
import { cn } from "../lb/utils/cn"

export const CommonNav = ({direction, children, className})=>{
  return(
    <NavLink
      to={direction}
      className={({ isActive }) =>
        cn(isActive
          ? 'p-2 px-6 bg-green-600 text-red-600 text-nowrap'
          : 'p-2 px-6 hover:bg-red-500 text-nowrap', className)
        
      }
    >
      {children}
    </NavLink>
  )
}