import React from 'react'
import Header from './header'
import skinCare from '../assets/Sophisticated skincare.png'

const Home = () => {
  return (
    <>
    <Header />
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='max-w-1/2 h-5 flex flex-col justify-center items-center'>
            <img src={skinCare} alt="" />
        </div>
    </div>
    
    </>
    
    
  )
}

export default Home