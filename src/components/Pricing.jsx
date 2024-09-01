
import { useState } from 'react'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const packages =[
        {name: 'Start', monthlyPrice : 24, yearlyPrice: 299,description:'Lorem ipsum dolor sit amet: consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna',green: "/src/assets/dot.png"},
        {name: 'Advance', monthlyPrice : 49, yearlyPrice: 849,description:'Lorem ipsum dolor sit amet: consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna',green: "/src/assets/dot.png"},
        {name: 'Premium', monthlyPrice : 70, yearlyPrice: 999,description:'Lorem ipsum dolor sit amet: consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna' 
        ,green: "/src/assets/dot.png"},
      ]
  return (
    <div className='md:px-14 p-4 max-w-screen mx-auto py-10'>
      <div className='text-center'>
        <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>Here are all our plans.</h2>
        <p className='text-tertiary md:w-1/2 mx-auto px-4'>
        "Good planning without good working is nothing. Plans are only good intentions unless they immediately degenerate into hard work. 
        It’s not the plan that is crucial, but the execution.
        </p>
        {/* toggle pricing */}
        <div className='mt-16'>
          <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
            <span className='mr-8 text-2xl font-semibold'>
              Monthly
            </span>
            <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out'>
              <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}>

              </div>
            </div>
            <span className='ml-10 text-2xl font-semibold'>
              Yearly
            </span>
          </label>
          <input type='checkbox' id='toggle' className='hidden' checked={isYearly} onChange={()=>setIsYearly(!isYearly)} />
        </div>
      </div>
      {/* pricing cards */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
        {
          packages.map((pkg,index) => <div key ={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
            <h3 className='text-3xl font-bold  text-center text-primary'>{pkg.name}</h3>
            <p className='text-tertiary text-center my-5'> {pkg.description}</p>
            <p className='mt-5 text-center text-secondary text-3xl font-bold'>
              {isYearly ? `$${pkg.yearlyPrice}`:`$${pkg.monthlyPrice}`}<span className='text-base text-tertiary'>/{isYearly ? 'year' : 'month'}</span>
            </p>
            <ul className='mt-4 space-y-4 px-4'>
              <li className='flex gap-3 items-center'>
                <img src={pkg.green} alt="dot" className='w-4 h-4'/>
                Videos of Lessons
              </li>
              <li className=' flex gap-3 items-center'>
                <img src={pkg.green} alt="dot" className='w-4 h-4'/>
                Homework check
              </li>
              <li className=' flex gap-3 items-center'>
                <img src={pkg.green} alt="dot" className='w-4 h-4'/>
                Additiional practical task
              </li>
              <li className=' flex gap-3 items-center'>
                <img src={pkg.green} alt="dot" className='w-4 h-4'/>
                Monthly conferences
              </li>
              <li className=' flex gap-3 items-center'>
                <img src={pkg.green} alt="dot" className='w-4 h-4'/>
                Personal advice from teachers
              </li>
            </ul>
            <div className='w-full mx-auto mt-8 flex items-center justify-center'>
            <button className='bg-secondary py-2 px-8  rounded-xl font-semibold text-white hover:bg-primary transition-all duration-300 '>Get Started</button>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Pricing
