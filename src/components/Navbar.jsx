import React,{useState}from 'react'
import logo from '../assets/A.jpg'
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";



const Navbar = () => {
    const navItems =[
        {
            link: "Overview", path:'home'
        },
        {
            link: "Feature", path:'feature'
        },
        {
            link: "About", path:'about'
        },
        {
            link: "Pricing", path:'pricing'
        }
    ]
    const [isMenuOpen,setIsMenuOpen] =useState (false);
    
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary  fixed top-0 right-0 left-0 '>
        <div className='text-xl constainer mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href="/" className='text-2xl font-semibood flex items-center space-x-3 text-primary'>
                    <img className=" w-10 inline-block items-center" src={logo} alt=''/>
                    {/* size-10 flex items-start */}
                    <span>NJR</span>
                </a>
                <ul className='md:flex hidden space-x-12'>
                    {
                    navItems.map(({link,path}) => <a key ={link} href={path} className='block hover:text-gray-300'>{link} </a>)
                    }
                </ul>
            </div>
            {/*language and signup*/}
            <div className='space-x-12 hidden md:flex items-center'>
                <a href='/' className='hidden lg:flex items-center  ' ><GrLanguage className='mr-2 hover:scale-110'/><span className='hover:text-secondary'>Language</span></a>
                <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'> Sign up </button>
            </div>
            {/*menu, btn only display on mobile*/}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300 text-lg">
                    {
                       isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>): (<FaBars className='w-6 h-6 text-primary'/>)

                    }
                </button>
            </div>
        </div>
    </nav>
    <div className={`space-y-4 px-24 pt-5 pb-5 bg-secondary  ${ isMenuOpen ? "block fixed top-[72px] right-0 left-0 " : "hidden"}`}>
    {
                    navItems.map(({link,path}) => <a key ={link} href={path} className='block hover:text-gray-300'>{link} </a>)
                    }

    </div>
    </>
  
  )
}

export default Navbar


