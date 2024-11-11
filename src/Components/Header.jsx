import React, { useState, useEffect, useRef } from 'react';
import { FaBell, FaBars, FaTimes, FaChevronDown, FaFacebook, FaTelegram, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import Login from './Login';
import Register from './Register';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaLocationDot, FaX } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const Header = ({ page }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showTopBar, setShowTopBar] = useState(true);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();



    const handleContactClick = () => {
        setShowDropdown(false);
        handleMenuClick();
        if (location.pathname === '/') {
            const contactSection = document.getElementById('contact_us');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            sessionStorage.setItem('scrollToContact', 'true');
        }
    };

    useEffect(() => {

        if (location.pathname === '/' && sessionStorage.getItem('scrollToContact')) {
            const contactSection = document.getElementById('contact_us');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            sessionStorage.removeItem('scrollToContact');
        }
    }, [location]);


    const dropdownRef = useRef(null);

    const handleMenuLogin = () => {
        setShowMenu(false);
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const offset = window.scrollY;
    //         if (offset > 50) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
            setShowTopBar(offset === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
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


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="pb-2">
         
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-white'} `}>
                {showTopBar && (
                    <div
                        className={`bg-blue-950 text-white flex justify-between items-center px-4 py-2 md:px-8 transform transition-all duration-500 ease-in-out ${showTopBar ? 'opacity-100 translate-y-0 transform transition-all duration-500 ease-in-out delay-200' : 'opacity-0 -translate-y-full'}`}
                    >
                        <div className="hidden md:flex items-center space-x-2 py-2">
                            <FaLocationDot className="text-white" />
                            <span>Sengatera Traders Building, Addis Ababa, Ethiopia</span>
                        </div>
                        {/* <div className="md:hidden items-center space-x-2 py-2 ">
                            <FaPhoneAlt className="text-white hover:text-gray-300" />
                            <a href="tel:+251911362741" className="text-white hover:text-gray-300 transform transition-all duration-300 ease-in-out">+251-911-362-741</a>
                        </div> */}
                        <div className="flex items-center space-x-2 py-2">
                            <FiMail className="text-white" />
                            <a href="mailto:infoe-expo@gmail.com" className="text-white hover:text-gray-200 transform transition-all duration-300 ease-in-out">infoe-expo@gmail.com</a>
                        </div>

                        <div className="flex space-x-3">
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaFacebook size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaTelegram size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaInstagram size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaLinkedin size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaX size={20} /></a>
                        </div>
                    </div>
                )}

                <nav className="container xl:mx-auto sm:mx-9 p-4 flex lg:justify-between justify-around items-center">
                    <div className="xl:text-2xl text-xl font-bold text-blue-900 pr-1">
                        <Link to="/">E-Expo</Link>
                    </div>

                    <div className="hidden md:flex lg:space-x-12 space-x-4">
                        <div className="relative">
                            <Link
                                onMouseEnter={() => setShowDropdown(false)}
                                onClick={() => setShowDropdown(false)}
                                to="/Real_Estates"
                                className={` hover:text-blue-900 xl:text-lg text-md  font-semibold hover:scale-105 transform transition-all duration-300 ease-in-out ${page === 'Real_Estates' ? 'text-blue-900 font-bold scale-105' : 'text-gray-600 font-semibold'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}>
                                Real Estates
                            </Link>
                        </div>

                        <div className="relative">
                            <Link
                                to="/UpcomingEvents"
                                onMouseEnter={() => setShowDropdown(false)}
                                onClick={() => setShowDropdown(false)}
                                className={`hover:text-blue-900 xl:text-lg text-md font-semibold  hover:scale-105 transform transition-all duration-300 ease-in-out ${page === 'Upcoming_Events' ? 'text-blue-900 font-bold scale-105' : 'text-gray-600 font-semibold'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                Upcoming Events
                            </Link>
                        </div>

                        <div className="relative">
                            <Link
                                onMouseEnter={() => setShowDropdown(false)}
                                onClick={() => setShowDropdown(false)}
                                to=""
                                className={`hover:text-blue-900 xl:text-lg text-md font-semibold  hover:scale-105 transform transition-all duration-300 ease-in-out ${page === 'Explore_Expo' ? 'text-blue-900 font-bold scale-105' : 'text-gray-600 font-semibold'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                               Blogs
                            </Link>
                        </div>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onMouseEnter={() => setShowDropdown(!showDropdown)}
                                // onMouseLeave={() => setShowDropdown(!showDropdown)}
                                className={`hover:text-blue-900 text-gray-600 xl:text-lg text-md font-semibold hover:scale-105 transform transition-all duration-300 ease-in-out`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}>
                                <div className="flex space-x-1 items-center">
                                    <span>More</span>
                                    <FaChevronDown />
                                </div>
                            </button>
                            {showDropdown && (
                                <div className={`absolute top-10 left-0 mt-2 w-48  shadow-lg border  rounded-b-md ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-white'}`}>
                                    <ul className="py-1">
                                        {/* <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isScrolled ? 'hover:bg-gray-200' : 'hover:bg-gray-100'}`}>
                                            <Link to='/' className="text-gray-700 hover:scale-125">Your Expo</Link>
                                        </li> */}
                                        <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isScrolled ? 'hover:bg-gray-200' : 'hover:bg-gray-100'}`}>
                                            <Link to="/Expo"className="text-gray-700">Your Expo</Link>
                                        </li>
                                        <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isScrolled ? 'hover:bg-gray-200' : 'hover:bg-gray-100'}`}>
                                            <a href="#" className="text-gray-700">About</a>
                                        </li>
                                        {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <a href="/#contact_us" className="text-gray-700">Contact us</a>
                                        </li> */}
                                        <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isScrolled ? 'hover:bg-gray-200' : 'hover:bg-gray-100'}`}>
                                            <button onClick={handleContactClick} className="text-gray-700">Contact us</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <button onClick={() => {
                            setIsLoginOpen(true)
                            setShowTopBar(false)
                        }} className="border font-semibold bg-blue-900 text-white w-24 px-3 py-2 rounded-md hover:border-blue-900 hover:bg-gray-100 hover:text-blue-950 transition duration-300">
                            Login
                        </button>
                        <button onClick={() => {
                            setIsRegisterOpen(true)
                            setShowTopBar(false)
                        }} className="border font-semibold border-blue-900 text-blue-950 w-24 px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                            Register
                        </button>
                        <button className="text-blue-950">
                            <FaBell />
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={handleMenuClick} className="text-2xl text-blue-950 focus:outline-none">
                            {showMenu ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {showMenu && (
                    <div className="xl:hidden bg-gray-100 shadow-lg">
                        <div className="space-y-4 py-4 px-4">
                            <div className="relative">
                                <Link
                                    to="/Real_Estates"
                                    className="text-gray-700 hover:text-blue-900 hover:font-bold transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-105"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    Real Estates
                                </Link>
                            </div>

                            <div className="relative">
                                <Link
                                    to="/UpcomingEvents"
                                    className="text-gray-700 hover:text-blue-950 hover:font-bold transform transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    Upcoming Events
                                </Link>
                            </div>

                            <div className="relative">
                                <Link
                                    to="#"
                                    className="text-gray-700 hover:text-blue-950 transform hover:font-bold transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}>
                                    Blogs
                                </Link>
                            </div>

                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="text-gray-700 hover:text-blue-950 hover:font-bold transform transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    <div className="flex space-x-2 items-center">
                                        <span>More</span>
                                        <FaChevronDown />
                                    </div>
                                </button>
                                {showDropdown && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md">
                                        <ul className="py-1">

                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link to="/Expo" className="text-gray-700">Your Expos</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <a href="#" className="text-gray-700">About</a>
                                            </li>
  
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <button onClick={handleContactClick} className="text-gray-700">Contact us</button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button onClick={() => {
                                setIsLoginOpen(true)
                                setShowTopBar(false)
                                }} className="block w-1/3 border font-semibold bg-blue-900 text-white py-2 rounded-md hover:border-blue-900 hover:bg-gray-100 hover:text-blue-950 transition duration-300">
                                Login
                            </button>
                            <button onClick={() => {
                                setIsRegisterOpen(true)
                                setShowTopBar(false)
                            }} className="block w-1/3 border font-semibold border-blue-900 text-blue-950 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                Register
                            </button>
                        </div>
                    </div>
                )}

                <Register open={isRegisterOpen} setOpen={setIsRegisterOpen} menuClose={handleMenuLogin} topbar={showTopBar} setTop={setShowTopBar} />
                <Login open={isLoginOpen} setOpen={setIsLoginOpen} menuClose={handleMenuLogin} topbar={showTopBar} setTop={setShowTopBar} />
            </header>
        </div>
    );
};

export default Header;