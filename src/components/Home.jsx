import React from 'react'

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-2-screen-2xl mx-auto mt-28 '>
      <div>
            <div>
                {/*Banner content */}
                <div className='md:w-3/5'>
                    <h2>Develop your skills without dilligence</h2>
                    <p>A good exmple of paragraph contains a topic sentence, details and a conclusion.
                        There are many different kinds of animals that live in China
                    </p>
                    <div>
                        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Get Started</button>
                        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Discount</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home
