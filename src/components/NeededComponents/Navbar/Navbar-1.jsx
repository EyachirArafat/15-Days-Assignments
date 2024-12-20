import { NavLink } from 'react-router-dom';
import { CommonNav } from './CommonNav';


function Navbar() {
  return (
    <div className='flex mx-auto justify-center items-center bg-slate-300 '>
      <CommonNav direction='/' children="Home" className="p-4 px-8 hover:bg-red-600 text-white"/>
      <CommonNav direction='/about' children="About" className="p-4 px-8 hover:bg-red-600 text-white"/>
      <CommonNav direction='/contact' children="Contact" className="p-4 px-8 hover:bg-red-600 text-white"/>
    </div>
  );
}

export default Navbar;
