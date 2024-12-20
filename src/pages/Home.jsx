import React from 'react'
import { Container } from '../components/NeededComponents/common/Container';


function Home() {
  return (
    <Container>
      <div className='flex h-screen justify-center items-center'>
        <div className='text-center space-y-2 border md:p-10 p-2 mb-64 bg-[#1A1E1C] text-white flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-green-600 text-center'>Welcome to <span className='text-red-600'>15 Days</span> Assignments</h1>
          <img className='lg:size-44 md:size-40 size-32 rounded-full' src="https://avatars.githubusercontent.com/u/177961704?v=4" alt="ea" />
          <p>I am <span className='text-2xl'>Eyachir Arafat</span></p>
          <p><span className='font-bold'>Email:</span> mohammad106685@gmail.com</p>
          <p>Student of Batch 2, <span className='font-bold'>Hablu Programmer</span></p>
        </div>
        
      </div>
    </Container>
  )
}

export default Home;
