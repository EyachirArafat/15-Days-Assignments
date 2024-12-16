// components 
import NavbarOne from "./components/NeededComponents/Navbar-1"
import NavbarTwo from "./components/NeededComponents/Navbar-2"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <header className="fixed w-full">
        <NavbarOne/>
        <NavbarTwo/>
      </header>
      <main className=" md:pt-24 pt-16">
        <Outlet/>
      </main>
    </>
  )
}

export default App
