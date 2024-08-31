import React from 'react'
import Girl from "../assets/girl.png"
import '../App.css'

const Home = () => {

  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 '>
        <div className='gradientBg rounded-xl rounded-br-[70ox] md:p-9 px-4 py-9'>
<div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
     {/* Banner image */}
     <div className='flex'>
        <img src={Girl} alt="" className='lg:h-[386px]' />
    </div>
    {/*Banner content */}
    <div className='md:w-3/5'>
        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed '>Develop your skills without dilligence</h2>
        <p className='tex-[#EBEBEB] text-2xl mb-8'>A good exmple of paragraph contains a topic sentence, details and a conclusion.
            There are many different kinds of animals that live in China.
        </p>
        <div className='space-x-5 space-y-4'>
            <button className='bg-secondary py-2 px-8  rounded-xl font-semibold text-white hover:bg-primary transition-all duration-300 '>Get Started</button>
            <button className='bg-secondary py-2 px-8  rounded-xl font-semibold text-white hover:bg-primary transition-all duration-300 '>Discount</button>
        </div>
    </div>
    
</div>
</div> 
    </div>
  )
}

export default Home



 