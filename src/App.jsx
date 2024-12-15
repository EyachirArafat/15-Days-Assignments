// components 
import NavbarOne from "./components/NeededComponents/Navbar-1"
import NavbarTwo from "./components/NeededComponents/Navbar-2"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <header>
        <NavbarOne/>
        <NavbarTwo/>
      </header>
      <main className="bg-[#1A1E1C] h-screen text-white">
        <Outlet/>
      </main>
    </>
  )
}

export default App
