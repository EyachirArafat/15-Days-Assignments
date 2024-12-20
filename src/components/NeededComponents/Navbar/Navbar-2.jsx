import { NavLink } from 'react-router-dom';
import { CommonNav } from './CommonNav';


function Navbar() {
  return (
    <div className='flex mx-auto justify-start bg-slate-600 text-white overflow-x-auto'>
      <CommonNav direction='html' children="HTML"/>
      <CommonNav direction='css' children="CSS"/>
      <CommonNav direction='tailwindcss' children="Tailwind"/>
      <CommonNav direction='bootstrap' children="Bootstrap"/>
      <CommonNav direction='js' children="JS"/>
      <CommonNav direction='advanceJS' children="ES6"/>
      <CommonNav direction='dom' children="DOM"/>
      <CommonNav direction='bom' children="BOM"/>
      <CommonNav direction='webapi-json' children="WebAPI & JSON"/>
      <CommonNav direction='reactjs' children="ReactJS"/>
      <CommonNav direction='reactrouter' children="ReactRouter"/>
      <CommonNav direction='projects' children="Real Life Projects"/>
      
    </div>
  );
}

export default Navbar;
