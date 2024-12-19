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
        HTML
      </NavLink>
      <NavLink
        to='css'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        CSS
      </NavLink>
      <NavLink
        to='tailwindcss'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        Tailwind
      </NavLink>
      <NavLink
        to='bootstrap'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        Bootstrap
      </NavLink>
      <NavLink
        to='js'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        JS
      </NavLink>
      <NavLink
        to='advanceJS'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        ES6
      </NavLink>
      <NavLink
        to='dom'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        DOM
      </NavLink>
      <NavLink
        to='bom'
        className={({ isActive }) =>
          isActive
            ? 'p-2 px-6 bg-green-600 text-red-600'
            : 'p-2 px-6 hover:bg-green-600'
        }
      >
        BOM
      </NavLink>
      
     
    </div>
  );
}

export default Navbar;
