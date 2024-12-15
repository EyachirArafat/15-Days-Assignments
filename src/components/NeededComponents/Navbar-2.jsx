import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='flex mx-auto justify-start bg-slate-600 text-white overflow-x-auto'>
      <NavLink
        to='html'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        HTML <span className='text-[10px]'>(1st day)</span>
      </NavLink>
      <NavLink
        to='css'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        CSS <span className='text-[10px]'>(2nd day)</span>
      </NavLink>
      
     
    </div>
  );
}

export default Navbar;
