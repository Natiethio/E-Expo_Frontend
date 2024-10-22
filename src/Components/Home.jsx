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
import adv2 from '../Images/advertizement1.png'
import adv1 from '../Images/Adv1.png'
// import Hero from '../Images/Hero.mp4'
import Hero2 from '../Images/Hero2.mp4'
import CardUpe from './cardupcoming.json'
import CardFeatured from './cardfeatured.json'
import Advertisement from './advertizement.json'
import { FaArrowCircleLeft, FaArrowLeft, FaArrowRight, FaCalendarAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa';
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const [currentIndexFeatured, setCurrentIndexFeatured] = useState(0);
    const [cardsToShowFeatured, setCardsToShowFeatured] = useState(3);
    // const [currentIndexAdverts, setCurrentIndexAdverts] = useState(0);
    const Expo = useNavigate();
    const RealEstates = useNavigate();

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

    const handelExpo = () => {
        Expo('/Expo')
    }

    const handelRealestates = () => {
        RealEstates('/Real_Estates')
    }

    // const targetDate = new Date(cardfeatured.date); 
    // const daysLeft = differenceInDays(targetDate, currentDate);

    const getDaysLeft = (date) => {
        return formatDistanceToNow(new Date(date), { addSuffix: true });
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }).toUpperCase(); // Extract the month (Oct -> OCT)
        return { day, month };
    };




    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Header />

            <div className="min-h-screen bg-gray-50 pt-16">
                {/* Hero Section */}
                <section className="relative bg-blue-900 text-white h-[500px] flex items-center justify-center mx-3 my-2">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={Hero2}
                        autoPlay
                        loop
                        muted
                        playsInline>
                    </video>

                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h1 className="text-4xl font-bold">Join the Latest Virtual Tours</h1>
                        <p className="mt-4 text-lg">Explore the future of real estate with 3D tours and live events.</p>
                        <button onClick={handelExpo} className="mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-900 transition duration-300">
                            Explore Expo
                        </button>
                    </div>
                </section>

                <section className="relative bg-blue-900 text-white h-[500px] flex items-center justify-center mx-3 my-2">
                    <div className="absolute inset-0 w-full h-full">

                        <iframe
                            className="w-full h-full"
                            src="https://my.matterport.com/show?play=1&lang=en-US&m=wBEFkyJTUnW"
                            frameBorder="0"
                            allowFullScreen
                            allow="xr-spatial-tracking autoplay"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                        </iframe>

                    </div>

                    <div className="absolute inset-0 bg-black opacity-35"></div>

                    {/* <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h1 className="text-4xl font-bold">Join the Latest Virtual Tours</h1>
                        <p className="mt-4 text-lg">Explore the future of real estate with 3D tours and live events.</p>
                        <button onClick={handelExpo} className="mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-900 transition duration-300">
                            Explore Expo
                        </button>
                    </div> */}
                </section>


                {/* Featured Real Estates */}

                <section className="bg-gray-200 py-8">
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Featured Projects</h2>
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
                                    className="flex transition-transform duration-700 ease-in-out "
                                    style={{
                                        transform: `translateX(-${currentIndexFeatured * (100 / cardsToShowFeatured)}%)`
                                    }}
                                >
                                    {CardFeatured.map((cardfeatured, index) => (
                                        // <div
                                        //     key={index}
                                        //     className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 pt-4 rounded-xl"
                                        //     style={{ flex: `0 0 ${100 / cardsToShowFeatured}%` }}>
                                        //     <div className="bg-white shadow-lg rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-100 duration-300">

                                        //         <div className="overflow-hidden w-full mb-4 h-96 rounded-t-xl">

                                        //             <img
                                        //                 src={cardfeatured.img}
                                        //                 alt="Real Estate"
                                        //                 className="object-cover w-full h-full"
                                        //             />
                                        //         </div>

                                        //         <div className="pl-6 pb-6">
                                        //             <h3 className="text-xl font-semibold text-blue-900">{cardfeatured.name}</h3>
                                        //             <p className="text-gray-600">{cardfeatured.description}</p>
                                        //             <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                        //                 {cardfeatured.buttonText}
                                        //             </button>
                                        //         </div>
                                        //     </div>
                                        // </div>
                                        <div
                                            key={index}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 pt-4 rounded-xl"
                                            style={{ flex: `0 0 ${100 / cardsToShowFeatured}%` }}
                                        >
                                            <div className="relative bg-white shadow-lg rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-100 duration-300">


                                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-4 py-1 rounded-br-xl rounded-tl-xl z-10">
                                                    <h3 className="text-lg font-semibold">{cardfeatured.name}</h3>
                                                </div>


                                                <div className="overflow-hidden w-full mb-4 h-96 rounded-t-xl">
                                                    <img
                                                        src={cardfeatured.img}
                                                        alt="Real Estate"
                                                        className="object-cover w-full h-full rounded-t-xl"
                                                    />
                                                </div>

                                                <div className="pl-6 pb-6">
                                                    <p className="text-gray-600">{cardfeatured.description}</p>
                                                    <button onClick={handelRealestates} className=" mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                                        {cardfeatured.buttonText}
                                                    </button>
                                                </div>
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
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Upcoming Events</h2>
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

                        {/* <div className="relative">
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
                                            <div className="bg-white  shadow-lg rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300">
                                                <div className="flex items-center text-gray-600 ">

                                                </div>
                                                <div className="rounded overflow-hidden w-full mb-4 xl:h-64 sm:h-72 h-80 ">
                                                    <img src={card.img} alt={card.title} className="object-cover w-full h-full" />
                                                </div>
                                                <h3 className="text-xl text-blue-900 font-semibold pl-3">{card.title}</h3>
                                                
                                                <button className="mt-4 border font-semibold m-3 border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-300">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}

                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                                    }}
                                >
                                    {CardUpe.map((card, index) => {
                                        const { day, month } = formatDate(card.date);

                                        return (
                                            <div
                                                key={index}
                                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 pt-4"
                                                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                                            >
                                                <div className="relative bg-white shadow-lg rounded-xl overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-100 duration-300">

                                                    <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                                        <span className="uppercase font-bold">{getDaysLeft(card.date)}</span>
                                                    </div>

                                                    <div
                                                        className="text-sm absolute top-0 right-0  bg-blue-950 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 transition duration-500 ease-in-out"
                                                    >
                                                        <span className="font-bold">{day}</span> {/* Display the day */}
                                                        <span className="uppercase font-bold">{month}</span> {/* Display the month */}
                                                    </div>

                                                    <div className="rounded overflow-hidden w-full h-96">
                                                        <img src={card.img} alt="Real Estate" className="object-cover w-full h-full" />
                                                    </div>

                                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-64"></div>
                                                    <div className="absolute inset-x-0 bottom-0 p-4 text-white z-10">
                                                        <h3 className="text-xl font-semibold">{card.title}</h3>

                                                        <button className="mt-2 border font-semibold border-white text-white px-4 py-2 rounded hover:bg-blue-950 hover:text-white hover:border-blue-950 transition duration-300">
                                                            {card.buttonText}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why E-Expo */}
                <section className="container mx-auto my-12 mb-20">
                    <h2 className="text-3xl font-bold sm:mb-9 mb-0 text-blue-900 text-center sm:text-left">Why E-Expo?</h2>
                    <div className="relative w-full h-48 sm:h-32 md:h-36 lg:h-44 xl:h-52 overflow-hidden rounded-2xl shadow-lg">
                        <div className="absolute inset-0 transition-transform duration-1000 ease-in-out">
                            <img
                                src={adv2}
                                className="w-full sm:h-full h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* advertizement section */}
                <section className="container mx-auto my-12">
                    <h2 className="text-3xl font-bold mb-9 text-blue-900 text-center sm:text-left">
                        Advertisements
                    </h2>
                    <div className="relative flex w-full h-80 sm:h-64 md:h-72 lg:h-96 xl:h-96 overflow-hidden rounded-xl shadow-lg p-4 bg-white">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`flex absolute inset-0  w-full h-full transition-transform duration-1000 ease-in-out ${index === currentSlide ? "translate-x-0" : "translate-x-full"
                                    }`}>

                                <div className="sm:w-2/3">
                                    <img
                                        src={slide.src}
                                        alt={`Advertisement ${index + 1}`}
                                        className=" w-full h-full object-cover rounded-l-xl"
                                    />
                                </div>

                                <div className="sm:w-full w-1/2 p-6 bg-white rounded-r-xl flex flex-col">
                                    <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                                        Advertisement Title {index + 1}
                                    </h3>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        tincidunt, purus vel dictum tincidunt, elit felis gravida purus,
                                        non malesuada nulla quam a lectus. Vivamus euismod volutpat sem
                                        sed congue dolor sit amet, consectetur adipiscing elit. Sed
                                        tincidunt, purus vel dictum tincidunt, elit felis gravida purus,
                                        non malesuada nulla quam a lectus. Vivamus euismod volutpat sem
                                        sed congue
                                    </p>
                                </div>
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

                {/* <section className="container mx-auto antialiased p-3">
                    <h2 className="text-3xl font-bold mb-9 text-blue-900 text-center sm:text-left">
                        Advertisements
                    </h2>

                    <div className="relative flex w-full h-80 sm:h-64 md:h-72 lg:h-96 xl:h-96 overflow-hidden rounded-md shadow-lg p-4 bg-white">
                        {Advertisement.map((ad, index) => (
                            <article
                                key={index}
                                className={`flex flex-wrap md:flex-nowrap shadow-lg mx-auto group cursor-pointer transform  absolute inset-0  w-full h-full transition-transform duration-1000 ease-in-out  ${index === currentSlide ? 'block translate-x-0' : 'hidden translate-x-full'}`}

                                
                            >
                                
                                <img
                                    className="md:w-1/3 w-full max-h-[400px] object-cover"
                                    src={ad.image}
                                    alt={ad.title}
                                />
                                <div>
                                    <div className="p-5 pb-10">
                                        <h1 className="text-2xl font-semibold text-gray-800 mt-4">{ad.title}</h1>
                                        <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                                            {ad.description}
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-5">
                                        <div className="sm:flex sm:justify-between">
                                            <div>
                                                <div className="text-lg text-gray-700">
                                                    <span className="text-gray-900 font-bold">{ad.distance}</span> from Dhaka
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex">
                                                        
                                                        {[...Array(5)].map((_, starIndex) => (
                                                            <svg
                                                                key={starIndex}
                                                                className={`w-4 h-4 mx-px fill-current ${starIndex < ad.reviews / 5 ? 'text-green-600' : 'text-gray-300'
                                                                    }`}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 14 14"
                                                            >
                                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                                        {ad.reviews} reviews
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                                Book Ticket
                                            </button>
                                        </div>
                                        <div className="mt-3 text-gray-600 text-sm md:text-sm">
                                            *Places to visit: {ad.placesToVisit.join(', ')}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}

                        
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                            {Advertisement.map((_, index) => (
                                <button
                                    key={index}
                                    className={`mx-2 w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </section> */}


                {/* news section */}
                <section className="container mx-auto my-12 p-3">
                    <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center sm:text-left">Latest News</h2>
                    <div className="grid md:grid-cols-3 grid-cols-1 sm:gap-6  justify-center">
                        <div className="bg-white shadow-lg rounded-xl">

                            <div className="rounded-t-xl overflow-hidden w-full mb-4 h-96">
                                <img src={Ltnews5} alt="Real Estate" className="object-cover w-full h-full" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900  pb-2">Jamboro Real Estate</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                    pretium quis, sem...
                                </p>

                                <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                    View More
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl">

                            <div className="rounded-t-xl overflow-hidden w-full mb-4 h-96">
                                <img src={Ltnews2} alt="Real Estate" className="object-cover w-full h-full" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900 pb-2">Ayat Real Estate</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                    pretium quis, sem...
                                </p>

                                <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                    View More
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl">

                            <div className="rounded-t-xl overflow-hidden w-full mb-4 h-96">
                                <img src={Ltnews3} alt="Real Estate" className="object-cover w-full h-full" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900 pb-2">Gift Real Estate</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                    pretium quis, sem...
                                </p>

                                <button className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                    View More
                                </button>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Contact us section */}
                <section>
                    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2  gap-8">
                        <div className="bg-white shadow-lg p-6 rounded-xl">
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
                                {/* <button class="mt-6 bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-700">Submit Enquiry</button> */}
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
                                    className="w-full h-72 border-0 rounded-xl shadow-lg"
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
