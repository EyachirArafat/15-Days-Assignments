import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='flex mx-auto justify-center items-center bg-slate-300 '>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'p-4 px-8 bg-green-600 text-white'
            : 'p-4 px-8 hover:bg-green-600'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) =>
          isActive
            ? 'p-4 px-8 bg-green-600 text-white'
            : 'p-4 px-8 hover:bg-green-600'
        }
      >
        About
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) =>
          isActive
            ? 'p-4 px-8 bg-green-600 text-white'
            : 'p-4 px-8 hover:bg-green-600'
        }
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar;
