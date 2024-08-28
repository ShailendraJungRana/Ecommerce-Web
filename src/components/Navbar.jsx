import React from 'react'
import logo from '../assets/A.jpg'
const Navbar = () => {
    const navItems =[
        {
            link: "Overview", path:'home'
        },
        {
            link: "Feature", path:'overview'
        },
        {
            link: "About", path:'about'
        },
        {
            link: "Pricing", path:'pricing'
        }
    ]
    return (
    <nav>
        <div>
            <div>
                <a href="/" className='text-2xl font-semibood flex items-center space-x-3 text-primary'>
                    <img className="size-10 flex items-start" src={logo} alt=''/>
                    <span>NJR</span>
                </a>
                <ul className='md:flex space-x-12'>
                    {
                    navItems.map(({link,path}) => <a key ={link} href={path} className='block hover:text-gray-300'>{link} </a>)
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
