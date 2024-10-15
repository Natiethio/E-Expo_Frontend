import React from 'react'
import { useState, useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Gift from '../Images/giftLagare.jpg'
import Ayat from '../Images/ayatrealestete.png'
import Jamboro from '../Images/Jamborobole.jpg'
import Ltnews2 from '../Images/news2.png'
import Ltnews5 from '../Images/news5.jpg'
import Ltnews3 from '../Images/ovid.jpg'
import Calender from '../Images/calender.png'
import adv1 from '../Images/advertizement1.png'
// import Hero from '../Images/Hero.mp4'
import Hero2 from '../Images/Hero2.mp4'
import CardUpe from './cardupcoming.json'
import CardFeatured from './cardfeatured.json'
import { FaArrowCircleLeft, FaArrowLeft, FaArrowRight, FaCalendarAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6'

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const [currentIndexFeatured, setCurrentIndexFeatured] = useState(0);
    const [cardsToShowFeatured, setCardsToShowFeatured] = useState(3);

    const slides = [
        { id: 1, src: adv1 },
        { id: 2, src: adv1 },
        { id: 3, src: adv1 },
    ];

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1200) {
                setCardsToShow(4);
                setCardsToShowFeatured(3);
            } else if (window.innerWidth >= 992) {
                setCardsToShow(3);
                setCardsToShowFeatured(2);
            } else if (window.innerWidth >= 768) {
                setCardsToShow(2);
                setCardsToShowFeatured(1);
            } else {
                setCardsToShow(1);
                setCardsToShowFeatured(1);
            }
        };

        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);

        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const totalCards = CardUpe.length;

    const totalSlide = (section) => {
        if (section === 'featured') {
            return CardFeatured.length;
        } else if (section === 'upcoming') {
            return CardUpe.length;
        }
        return 0;
    };

    const nextCardSlide = (section) => {
        const totalCard = totalSlide(section);
        switch (section) {
            case 'upcoming':
                if (currentIndex < totalCard - cardsToShow) {
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setCurrentIndex(0);
                }
                break;

            case 'featured':
                if (currentIndexFeatured < totalCard - cardsToShowFeatured) {
                    setCurrentIndexFeatured(currentIndexFeatured + 1);
                } else {
                    setCurrentIndexFeatured(0);
                }
                break;

            default:
                break;
        }

    }


    const prevCardSlide = (section) => {
        const totalCard = totalSlide(section);

        switch (section) {
            case 'upcoming':
                if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                } else {
                    setCurrentIndex(totalCard - cardsToShow);
                }
                break;

            case 'featured':
                if (currentIndex > 0) {
                    setCurrentIndexFeatured(currentIndexFeatured - 1);
                } else {
                    setCurrentIndexFeatured(totalCard - cardsToShowFeatured);
                }
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 7000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);


    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextCardSlide('upcoming');
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [currentIndex, totalCards, cardsToShow]);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Header />

            <div className="min-h-screen bg-gray-50 pt-16">
                {/* Hero Section */}
                <section className="relative bg-blue-900 text-white h-[500px] flex items-center justify-center mx-4 my-2">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={Hero2}
                        autoPlay
                        loop
                        muted
                        playsInline >
                    </video>

                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h1 className="text-4xl font-bold">Join the Latest Virtual Tours</h1>
                        <p className="mt-4 text-lg">Explore the future of real estate with 3D tours and live events.</p>
                        <button className="mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-900 transition duration-300">
                            Explore Expo
                        </button>
                    </div>
                </section>

                {/* Featured Real Estates */}

                <section className="bg-gray-100 py-8">
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-950 text-center">Featured Projects</h2>
                            <div className="flex space-x-2 justify-center">
                                <button
                                    onClick={() => prevCardSlide('featured')}
                                    className="left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    onClick={() => nextCardSlide('featured')}
                                    className="right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndexFeatured * (100 / cardsToShowFeatured)}%)`
                                    }}
                                >
                                    {CardFeatured.map((cardfeatured, index) => (
                                        <div
                                            key={index}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
                                            style={{ flex: `0 0 ${100 / cardsToShowFeatured}%` }}
                                        >
                                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                                <div className="rounded overflow-hidden w-full mb-4 h-96 ">
                                                    <img src={cardfeatured.img} alt="Real Estate" className="object-cover w-full h-full" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-blue-950">{cardfeatured.name}</h3>
                                                <p className="text-gray-600">{cardfeatured.description}</p>
                                                <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                                    {cardfeatured.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* upcoming events section */}

                <section className="bg-gray-100 py-8">
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-950 text-center">Upcoming Events</h2>
                            <div className="flex space-x-2 justify-center">
                                <button
                                    onClick={() => prevCardSlide('upcoming')}
                                    className="left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    onClick={() => nextCardSlide('upcoming')}
                                    className="right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                                    }}
                                >
                                    {CardUpe.map((card, index) => (
                                        <div
                                            key={index}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
                                            style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                                        >
                                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                                <div className="flex items-center text-gray-600 mb-4">
                                                    <img src={Calender} alt="" className="w-7 h-7 mr-1" />
                                                    {/* <FaCalendarAlt className="text-blue-900 mr-2" /> */}
                                                    <p>{card.date}</p>
                                                </div>
                                                <div className="rounded overflow-hidden w-full mb-4 h-64">
                                                    <img src={card.img} alt={card.title} className="object-cover w-full h-full" />
                                                </div>
                                                <h3 className="text-xl text-blue-900 font-semibold">{card.title}</h3>
                                                <p className="text-gray-600">{card.description}</p>
                                                <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-300">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* advertizement section */}
                <section className="container mx-auto my-12">
                    <h2 className="text-3xl font-bold mb-4 text-blue-950 text-center sm:text-left">Advertisements</h2>
                    <div className="relative w-full h-48 sm:h-32 md:h-36 lg:h-44 xl:h-52 overflow-hidden rounded-lg shadow-lg">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide ? "translate-x-0" : "translate-x-full"
                                    }`}>
                                <img
                                    src={slide.src}
                                    alt={`Advertisement ${index + 1}`}
                                    className="w-full sm:h-full h-1/2 object-contain"
                                />
                            </div>
                        ))}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* news section */}
                <section className="container mx-auto my-12">
                    <h2 className="text-3xl font-bold mb-6 text-blue-950">Latest News</h2>
                    <div className="grid md:grid-cols-3 grid-cols-1 sm:gap-6  justify-center">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <div className="rounded overflow-hidden w-full mb-4 h-96 ">
                                <img src={Ltnews5} alt="Real Estate" className="object cover w-full h-full" />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-950">Jamboro Real Estste</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                pretium quis, sem...</p>
                            <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                View More
                            </button>
                        </div>
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <div className="rounded overflow-hidden w-full mb-4 h-96 ">
                                <img src={Ltnews2} alt="Real Estate" className="object cover w-full h-full" />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-950">Hammer Real Estate</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                pretium quis, sem...</p>
                            <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-300">
                                View More
                            </button>
                        </div>
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <div className="rounded overflow-hidden w-full mb-4 h-96 ">
                                <img src={Ltnews3} alt="Real Estate" className="object cover w-full h-full" />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-950">Ovid Real Estate</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                pretium quis, sem...</p>
                            <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-300">
                                View More
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    {/* Contact us section */}
                    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h2 className="text-3xl font-bold text-blue-900 mb-5">Contact Us</h2>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label for="name" className="block text-gray-500 mb-1">Name</label>
                                        <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg text-gray-600" placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <label for="phone" className="block text-gray-500 mb-1">Phone Number</label>
                                        <input type="text" id="phone" className="w-full px-3 py-2 border rounded-lg text-gray-600" placeholder="Enter your phone number" />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <label for="email" className="block text-gray-500 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg text-gray-600" placeholder="Enter your Email" />
                                </div>
                                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label for="city" className="block text-gray-500 mb-1">Country</label>
                                        <select id="city" className="w-full px-3 py-2 border rounded-lg text-gray-600">
                                            <option>Select Country</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="subject" className="block text-gray-500 mb-1">Subject</label>
                                        <input type="text" id="subject" class="w-full px-3 py-2 border rounded-lg text-gray-600" placeholder="Subject" />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <label for="description" className="block text-gray-500 mb-1">Description</label>
                                    <textarea id="description" className="w-full px-3 py-2 border rounded-lg text-gray-600" rows="4" placeholder="Comments"></textarea>
                                </div>
                                {/* <button class="mt-6 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit Enquiry</button> */}
                                <button className="mt-6 border font-semibold bg-blue-900  text-white w-24 px-3 py-2 rounded-lg hover:border-blue-900 hover:bg-gray-100 hover:text-blue-900 transition duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>

                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h2 className="text-xl  font-bold text-blue-900 mb-5">Contact Details</h2>
                            <div class="space-y-3">
                                <div className="flex items-center">
                                    <FaPhoneAlt class="text-blue-900 mr-2" />
                                    <span className='text-gray-500'>+251 907 000 111</span>

                                </div>
                                <div class="flex items-center">
                                    <FaPhoneAlt className="text-blue-900 mr-2" />
                                    <span className='text-gray-500'>+251 908 000 222</span>
                                </div>
                                <div class="flex items-center">
                                    <FiMail className="text-blue-900 mr-2" />
                                    <span className='text-gray-500'>info@betenexpo.com</span>
                                </div>
                                <div className='flex text-center'>
                                    <FaLocationDot className='text-blue-900 mr-2 text-xl' />
                                    <p className='text-gray-500'>Sengatera Union Building, 12th Floor, office number : 001</p>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-blue-900 mt-8 mb-3">Our Location</h2>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5429360696166!2d38.74532427426507!3d9.014135191046583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855bc14f7b6b%3A0xeed47d624097c0f4!2sSengatera%20union%20building!5e0!3m2!1sen!2set!4v1728296078644!5m2!1sen!2set"
                                    className="w-full h-72 border-0 rounded-lg shadow-lg"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
            <Footer />
        </>
    )
}

export default Home
