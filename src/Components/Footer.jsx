import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const Expo = useNavigate()

  const handelExpo = () => {
    Expo('/Expo')
  }

  return (
    <div className='bg-gray-100'>
      <section className="mx-auto  md:mx-10">
        <div className="bg-gradient-to-br from-blue-600  to-blue-950 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-full mx-auto mt-10">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-gray-200">Start your journey with E-Expo</span>
              <br />
              <span className="text-gray-200 text-4xl font-semibold">Explore Expo</span>
            </div>
            <button onClick={handelExpo} className="mt-2 border font-semibold border-white w-fit text-white px-4 py-2 rounded-xl hover:bg-blue-950 hover:text-white hover:border-blue-950 transition duration-300">
              Start now
            </button>
          </div>
          <div>
            <FaHome className="w-20 h-20 text-gray-100" />
          </div>
        </div>
      </section>
      {/* Main Footer */}
      <div className="bg-gray-200 shadow-2xl text-blue-900 py-12 mt-10 p-3">
        <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-5">E-Expo</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-5">Information</h4>
            <ul>
              <li className="pb-2">
                <Link to='/Real_Estates' className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-150 transform transition-all duration-300 ease-in-out">Real Estates</Link>
              </li>
              <li className="pb-2">
                <Link to='/Expo' className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-150 transform transition-all duration-300 ease-in-out">Explore Expo</Link>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out">Upcoming Events</a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out">Advertisements</a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out">News</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-5">Helpful Links</h4>
            <ul>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out"> About Us</a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out">FAQ</a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out"> Help & Support</a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out"> Terms & Conditions </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out"> Privacy Policy </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out"> Contact Us </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-5">Contact Us</h4>

            <div className="flex items-center space-x-2 py-2 text-gray-500 ">
              <FaPhone className="text-blue-900" />
              <a href="tel:+251907000111" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out">+251 907 000 111</a>
            </div>

            <div className="flex items-center space-x-2 py-2 text-gray-500">
              <FaPhone className="text-blue-900" />
              <a href="tel:+251907000111" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out">+251 908 000 222</a>
            </div>

            <div className="flex items-center space-x-2 py-2 text-gray-500">
              <FiMail className="text-blue-900" />
              <a href="mailto:info@betenexpo.com" className="text-gray-500 hover:text-blue-900 hover:font-bold hover:scale-105 transform transition-all duration-300 ease-in-out"> info@betenexpo.com</a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-950 text-white py-6">
        <div className="container mx-4 sm:flex justify-between items-center ">
          <p>&copy; 2024 Beten E-Expo. All rights reserved.</p>
          <div className="flex space-x-4 sm:pt-0 pt-3">
            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaFacebook size={20} /></a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaTelegram size={20} /></a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaInstagram size={20} /></a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
