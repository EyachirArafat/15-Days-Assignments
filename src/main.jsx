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
import { AllAboutCSS } from './components/2nd-day/AllAboutCSS.jsx'
import { TailwindQAnswers } from './components/3rd-day/TailwindQuestions.jsx'
import { BootstrapQAnswers } from './components/3rd-day/BootstrapQuestions.jsx'
import { JavaScriptQAnswers } from './components/4th-day/JavaScriptQAnswers.jsx'
import { ES6 } from './components/5th-day/AdvanceJS.jsx'
import { DOM } from './components/5th-day/DOM.jsx'
import { BOM } from './components/5th-day/BOM.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='/html' element={<AllAboutHTML/>}/>
      <Route path='/css' element={<AllAboutCSS/>}/>
      <Route path='/tailwindcss' element={<TailwindQAnswers/>}/>
      <Route path='/bootstrap' element={<BootstrapQAnswers/>}/>
      <Route path='/js' element={<JavaScriptQAnswers/>}/>
      <Route path='/advanceJS' element={<ES6/>}/>
      <Route path='/dom' element={<DOM/>}/>
      <Route path='/bom' element={<BOM/>}/>

      
      <Route path='*' element={<div className='text-center flex flex-col text-5xl py-20'>
        <span className='text-red-500'>404!</span>
        <span className='text-white'>Page is not found</span>
      </div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)







