import React, { useState, useEffect } from 'react'
import { FaBell, FaBars, FaTimes } from 'react-icons/fa'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isdropdown, setIsdropdown] = useState(false);

  function Hidedropdown() {
    setIsdropdown(!isdropdown)
  }

  const handleMenuLogin = () => {
    setShowMenu(false)
  }

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

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setIsdropdown(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setShowMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pb-2">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300  ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-white'} `}>
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            {/* <a className="Logo" href="/">E-Expo</a> */}
            <Link to='/'>E-Expo</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            {/* <a href="#" className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Explore Expo</a> */}
            <Link to='/Expo' className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Explore Expo</Link>
            <a href="#" className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Timetables</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Upcoming Events</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">More</a>
          </div>
          <div className="hidden md:flex space-x-4">
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

          <div className="md:hidden">
            <button onClick={handleMenuClick} className="text-2xl text-blue-900 focus:outline-none">
              {showMenu ?  <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* <div className="md:hidden">
            <button onClick={handleMenuClick} className="text-2xl text-blue-900 focus:outline-none ">
              <div
                className={`transition-opacity duration-300 ease-in-out ${showMenu ? 'opacity-100' : 'opacity-0'} `}
              >
                <FaTimes />
              </div>
              <div
                className={`transition-opacity duration-300 ease-in-out ${showMenu ? 'opacity-0' : 'opacity-100'} `}
              >
                <FaBars />
              </div>
            </button>
          </div> */}

        </nav>

        {showMenu && (
          <div className="md:hidden bg-gray-100 shadow-lg">
            <div className="space-y-4 py-4 px-4">
              <a href="#" className="block text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Explore Expo</a>
              <a href="#" className="block text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Timetables</a>
              <a href="#" className="block text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Upcoming Events</a>
              <a href="#" className="block text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">More</a>
              <button onClick={() => setIsLoginOpen(true)} className="block w-1/3 border font-semibold bg-blue-900 text-white py-2 rounded-md hover:border-blue-900 hover:bg-gray-100 hover:text-blue-900 transition duration-300">
                Login
              </button>
              <button onClick={() => setIsRegisterOpen(true)} className="block w-1/3 border font-semibold border-blue-900 text-blue-900 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                Register
              </button>
            </div>
          </div>
        )}

        <Register open={isRegisterOpen}
          setOpen={setIsRegisterOpen}
          menuClose={handleMenuLogin}/>

        <Login open={isLoginOpen}
          setOpen={setIsLoginOpen}
          menuClose={handleMenuLogin}/>

      </header>
    </div>
  )
}

export default Header
