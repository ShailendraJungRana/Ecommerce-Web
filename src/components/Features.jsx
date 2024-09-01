import React from 'react'
import siting from '../assets/siting.png'
import stack from "../assets/stack.png"
import bro from '../assets/bro.png'
const Features = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
        <div className='lg:w-1/4 '>
          <h3 className='text-3xl text-primary font-bold lg:w-full mb-3'>Why are we better than others</h3>
          <p className='text-base text-tertiary'>A simple paragraph is comprsed of three major components.
             The first sentence, which is often a declarative sentence, is called the "topic sentence." </p>
        </div>
        {/* featured cards */}
        <div className='w-full lg:w-3/4 mt-4'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
            <div className='card bg-white shadow-md rounded-[35px] overflow-hidden w-[260px] h-[280px] justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
              <img className='w-[148px] h-[130px] object-cover mx-auto'  src={siting} alt=""/>
              <h5 className='text-2xl font-semibold text-primary text-center px-5 mt-4'>Conventient study schedule.</h5>
            </div> 
            <div className='card bg-white shadow-md rounded-[35px] overflow-hidden w-[260px] h-[280px] justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
              <img className='w-[148px] h-[130px] object-cover mx-auto'  src={stack} alt=""/>
              <h5 className='text-2xl font-semibold text-primary mt-4 text-center px-5'>Empower yourself with knowledge.</h5>
            </div>
            <div className='card bg-white shadow-md rounded-[35px] overflow-hidden w-[260px] h-[280px] justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
              <img className='w-[148px] h-[130px] object-cover mx-auto'  src={bro} alt=""/>
              <h5 className='text-2xl font-semibold mt-4 text-primary text-center px-5'>A book is a dream that you hold in your hand.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
