import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// pages 
import Home from "./pages/Home"

import { AllAboutHTML } from './components/1st-day/AllAboutHTML.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='/html' element={<AllAboutHTML/>}/>
      <Route path='*' element={<div className='text-center text-5xl pt-20'>Page is not found</div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)







