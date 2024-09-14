import React from 'react'
import logo from '../assets/A.jpg'

const Footer = () => {
  return (
    <div className='bg-[#010851]  md:px-14 p-4 max-w-full mx-auto text-white'>
    <div className='my-12 grid grid-cols-1 md:grid-cols-3 gap-10'>
      {/* Logo and description */}
      <div className='space-y-8'>
        <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
          <img src={logo} className="w-10 h-10 rounded-xl" alt="logo" />
          <span className='text-white'>NJR</span>
        </a>
        <p className='md:w-3/4'>
          A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.
        </p>
      </div>

      {/* Email subscription */}
      <div className='space-y-4'>
  <h4 className='text-xl'>Subscribe to our newsletter</h4>
  <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-2'>
    <input 
      type='email' 
      name="email" 
      id='email' 
      placeholder='Your email' 
      className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none w-full' 
    />
    <input 
      type='submit' 
      value="Subscribe" 
      className="px-4 py-2 bg-secondary rounded-md cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all w-full sm:w-auto" 
    />
  </div>
</div>


      {/* Footer navigation */}
      <div className='flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0'>
        {/* Platform Links */}
        <div className='space-y-6'>
          <h4 className='text-xl '>Platform</h4>
          <ul className='space-y-3'>
            <li><a href='/' className='block hover:text-gray-300'>Overview</a></li>
            <li><a href='/' className='block hover:text-gray-300'>Features</a></li>
            <li><a href='/' className='block hover:text-gray-300'>About</a></li>
            <li><a href='/' className='block hover:text-gray-300'>Pricing</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div className='space-y-6'>
          <h4 className='text-xl '>Help</h4>
          <ul className='space-y-3'>
            <li><a href='/' className='block hover:text-gray-300'>How does it work?</a></li>
            <li><a href='/' className='block hover:text-gray-300'>Where to ask questions?</a></li>
            <li><a href='/' className='block hover:text-gray-300'>How to play?</a></li>
            <li><a href='/' className='block hover:text-gray-300'>What is needed for this?</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div>
        <p>@NJR 20xx -- 2024. All rights reserved. </p>
        <div>
            <img src='' alt/>
        </div>
    </div>
  </div>
  )
}

export default Footer
