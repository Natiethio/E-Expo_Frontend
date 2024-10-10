import React from 'react'
import { useState, useEffect } from 'react'
import { FaBell } from 'react-icons/fa'
import Login from './Login'
import Register from './Register'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="pb-2">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300  ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-white'} `}>
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            E-Expo
          </div>
          <div className="space-x-6">
            <a href="#" className=" text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Explore Expo</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Timetables</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Upcoming Events</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">More</a>
          </div>
          <div className="space-x-4">
            <button onClick={() => setIsLoginOpen(true)} className="border font-semibold bg-blue-900 text-white w-24 px-3 py-2 rounded-md hover:border-blue-900 hover:bg-gray-100 hover:text-blue-900 transition duration-300">
              Login
            </button>
            <button onClick={() => setIsRegisterOpen(true)} className="border font-semibold border-blue-900 text-blue-900 w-24 px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              Register
            </button>
            <button className='text-blue-900'>
              <FaBell />
            </button>
          </div>
        </nav>
        <Login open={isLoginOpen} setOpen={setIsLoginOpen} />
        <Register open={isRegisterOpen} setOpen={setIsRegisterOpen} />
      </header>
    </div>
  )
}

export default Header
