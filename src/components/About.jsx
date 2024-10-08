import React from 'react'
import Padha from "../assets/padha.png"
import time from "../assets/time.png"
const About = () => {
  return (
    <div className='md:px-14 p-3  px-4 py-8   max-w-screen-2xl mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-2/5 rounded'>
            <img className='' src={Padha} alt=""/>
        </div>
        {/* about content     */}
        <div className='md:w-2/5 '>
            <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal '>
            We have been improving our product <span className='text-secondary'>
                for many years.
            </span>
            </h2>
            <p className='text-tertiary text-lg mb-7'>A good example of paragraph contains a topic conclusion. 
                There are many differet kinds of animals that live in China.
            </p>
            <button className=' bg-secondary py-2 px-8  rounded-xl font-semibold text-white hover:bg-primary transition-all duration-300 '>
                Get Started</button>
        </div>
      </div>
      <div>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 mt-10  '>
        <div className='md:w-2/5 rounded-sm'>
            <img className='rounded-sm' src={time} alt=""/>
        </div>
        {/* about content     */}
        <div className='md:w-2/5 mt-24'>
            <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal '>
            You can Practice at any <span className='text-secondary'>
               time convinent for you.
            </span>
            </h2>
            <p className='text-tertiary text-lg mb-7'>A good example of paragraph contains a topic conclusion. 
                There are many differet kinds of animals that live in China.
            </p>
            <button className=' bg-secondary py-2 px-8  rounded-xl font-semibold text-white hover:bg-primary transition-all duration-300 '>
                Get Started</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
