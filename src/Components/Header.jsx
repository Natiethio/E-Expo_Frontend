import React, { useState, useEffect, useRef } from 'react';
import { FaBell, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';

const Header = ({page}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownRef = useRef(null);

    const handleMenuLogin = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
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
                <nav className="container mx-auto p-4 flex justify-between items-center">
                    <div className="xl:text-xl text-xl font-bold text-blue-900 pr-1">
                        <Link to="/">E-Expo</Link>
                    </div>


                    <div className="hidden md:flex lg:space-x-8 space-x-6">
                        <div className="relative">
                            <Link
                                to="/Real_Estates"
                                className={`hover:text-blue-900 hover:font-bold transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-105 ${page === 'Real_Estates' ? 'text-blue-900 font-bold' : 'text-gray-700'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                Real Estates
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                to="/Expo"
                                className={`hover:text-blue-900 hover:font-bold transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-105 ${page === 'Explore_Expo' ? 'text-blue-900 font-bold' : 'text-gray-700'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                Explore Expo
                            </Link>
                        </div>
                        <div className="relative">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-900 hover:font-bold transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-105"
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                Upcoming Events
                            </a>
                        </div>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="text-gray-700 hover:text-blue-900 hover:font-bold transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-105"
                                style={{ display: 'inline-block', transformOrigin: 'center' }}>
                                <div className="flex space-x-1 items-center">
                                    <span>More</span>
                                    <FaChevronDown />
                                </div>
                            </button>
                            {showDropdown && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md">
                                    <ul className="py-1">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <Link to='/' className="text-gray-700 hover:scale-125">Your Expo</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <a href="#" className="text-gray-700">About</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <a href="#" className="text-gray-700">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <button onClick={() => setIsLoginOpen(true)} className="border font-semibold bg-blue-900 text-white w-24 px-3 py-2 rounded-md hover:border-blue-900 hover:bg-gray-100 hover:text-blue-950 transition duration-300">
                            Login
                        </button>
                        <button onClick={() => setIsRegisterOpen(true)} className="border font-semibold border-blue-900 text-blue-950 w-24 px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
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
                                    to="/Expo"
                                    className="text-gray-700 hover:text-blue-950 transform hover:font-bold transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}>
                                    Explore Expo
                                </Link>
                            </div>
                            <div className="relative">
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-950 hover:font-bold transform transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    Upcoming Events
                                </a>
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
                                                <Link to='/' className="text-gray-700 hover:scale-125">Your Expo</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <a href="#" className="text-gray-700">About</a>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <a href="#" className="text-gray-700">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button onClick={() => setIsLoginOpen(true)} className="block w-1/3 border font-semibold bg-blue-900 text-white py-2 rounded-md hover:border-blue-900 hover:bg-gray-100 hover:text-blue-950 transition duration-300">
                                Login
                            </button>
                            <button onClick={() => setIsRegisterOpen(true)} className="block w-1/3 border font-semibold border-blue-900 text-blue-950 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                Register
                            </button>
                        </div>
                    </div>
                )}

                <Register open={isRegisterOpen} setOpen={setIsRegisterOpen} menuClose={handleMenuLogin} />
                <Login open={isLoginOpen} setOpen={setIsLoginOpen} menuClose={handleMenuLogin} />
            </header>
        </div>
    );
};

export default Header;