import React, { useRef } from 'react'
import { useState, useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { fadeIn } from '../variants'
import { useInView } from "react-intersection-observer";
import Ltnews2 from '../Images/news2.png'
import Ltnews5 from '../Images/news5.jpg'
import Ltnews3 from '../Images/ovid.jpg'
import Calender from '../Images/calender.png'
import adv2 from '../Images/advertizement1.png'
import adv1 from '../Images/Adv1.png'
import ourservice1 from '/Images/virtual_Tour.png'
import ourservice2 from '/Images/ourservices2.png'
import Hero2 from '../Images/Hero2.mp4'
import Hero1 from '/Images/Hero1.mp4'
import CardUpe from './cardupcoming.json'
import CardFeatured from './cardfeatured.json'
import serviceCards from './ourservices.json'
import Advertisement from './advertizement.json'
import { FaArrowCircleLeft, FaArrowLeft, FaArrowRight, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa';
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css'


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideadv, setCurrentSlideAdv] = useState(0);
    const [currentSlideUpcoming, setCurrentSlideUpcoming] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const [currentIndexFeatured, setCurrentIndexFeatured] = useState(0);
    const [FeatureSlide, setFeatureSlide] = useState(0);
    //const [direction, setDirection] = useState('forward');
    const [isScrolled, setIsScrolled] = useState(false);
    const [cardsToShowFeatured, setCardsToShowFeatured] = useState(3);
    const swiperRef = useRef(null);

    // const [currentIndexAdverts, setCurrentIndexAdverts] = useState(0);
    const autoSlideRef = useRef(null);
    const ourserviceRef = useRef(null);
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const Expo = useNavigate();
    const RealEstates = useNavigate();

    const slides = [
        { id: 1, src: adv1 },
        { id: 2, src: adv1 },
        { id: 3, src: adv1 },
    ];

    // const { ref, inView } = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1
    // });

    const [showFirstLine, setShowFirstLine] = useState(false);
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [showButton, setShowButon] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstLine(true);
            setShowSecondLine(false);
            setShowButon(false)

            setTimeout(() => {
                setShowSecondLine(true);
            }, 500);

            setTimeout(() => {
                setShowButon(true);
            }, 1500);

            setTimeout(() => {
                setShowFirstLine(false);
                setShowSecondLine(false);
                setShowButon(false)
            }, 11000);
        }, 22000);

        return () => clearInterval(interval);
    }, []);

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

    // const updateCurrentIndex = () => {
    //     if (swiperRef.current) {
    //         setCurrentIndex(swiperRef.current.swiper.activeIndex);
    //     }
    // };


    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();


            // updateCurrentIndex();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
            //updateCurrentIndex();
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
        const slideInterval = setInterval(() => {
            setCurrentSlideUpcoming((prevSlide) =>
                prevSlide === CardUpe.length - 1 ? 0 : prevSlide + 1
            );
        }, 7000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlideAdv((prevSlide) => (prevSlide + 1) % Advertisement.length);
        }, 7000);

        return () => clearInterval(slideInterval);
    }, []);


    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextCardSlide('upcoming');
            //handleNext()
        }, 3000);

        return () => clearInterval(autoSlide);
    }, [currentIndex, totalCards, cardsToShow]);

    // useEffect(() => {
    //     const autoSlide = setInterval(() => {
    //          if (currentIndexFeatured < totalCards - cardsToShowFeatured) {

    //                 setCurrentIndexFeatured(currentIndexFeatured + 1);

    //                 handleNext();
    //         } 
    //         else if(currentIndexFeatured == totalCards - cardsToShowFeatured) {
    //             handlePrev();
    //         }
    //     }, 3000);

    //     return () => clearInterval(autoSlide);
    // }, [currentIndexFeatured, totalCards, cardsToShowFeatured]);


    // const startAutoSlide = () => {
    //     nextCardSlide('upcoming');
    //     // autoSlideRef.current = setInterval(() => {
    //     //     nextCardSlide('upcoming');
    //     // }, 3000);
    // };

    // const stopAutoSlide = () => {
    //     nextCardSlide('upcomng');
    //     // clearInterval(autoSlideRef.current);

    // };

    // useEffect(() => {
    //     startAutoSlide(); 

    //     return () => {
    //         stopAutoSlide(); 
    //     };
    // }, [currentIndex, totalCards, cardsToShow]);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handelExpo = () => {
        // Expo('/Expo')
        Expo('/UpcomingEvents')
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
        const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        return { day, month };
    };

    const { scrollYProgress } = useScroll({
        target: ourserviceRef,
        offset: ["start end", "center center"] // Trigger when section is fully in view
    });

    // Define the Y transformation based on scroll progress
    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    const sectionVariant = {
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.9, y: 50 },
    };


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Header />

            <div className="min-h-screen bg-gray-50 pt-16">
                {/* Hero Section */}

                <section className={`relative bg-blue-900 text-white xl:h-[580px] h-[550px] flex items-center justify-center mx-3  overflow-hidden ${isScrolled ? 'my-0' : 'my-1'}`}>
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={Hero1}
                        autoPlay
                        loop
                        muted
                        playsInline />

                    <div className={`absolute inset-0 bg-black  ${showFirstLine ? "opacity-45" : "opacity-25"}`}></div>

                    <div className="relative z-10 text-center">
                        <h1
                            className={`md:text-4xl text-3xl font-bold transform transition-all duration-1000 ease-in-out ${showFirstLine ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                                }`}
                        >
                            Join the Latest Virtual Tours
                        </h1>
                        <p
                            className={`mt-4 text-lg md:text-md transform transition-all duration-1000 ease-in-out delay-500 ${showSecondLine ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                                }`}
                        >
                            Explore the future of real estate with 3D tours and live events
                        </p>
                        <button
                            onClick={handelExpo}
                            className={`mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-900 transition duration-300 ${showButton ? 'opacity-100 ' : 'opacity-0'}`}
                        >
                            Explore Expo
                        </button>
                    </div>
                </section>

                {/* Featured Real Estates */}
                <motion.section
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="container mx-auto my-6 px-8 md:px-7 py-6 md:my-10"

                    animate={control}
                >
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between items-center">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center px-3">Featured Listings</h2>

                            <div className="flex items-center justify-center sm:justify-end space-x-4">
                                {CardFeatured.length >= 4 && (
                                    <>
                                        <button
                                            onClick={handlePrev}
                                            className="border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 p-1 rounded-full"
                                            style={{ height: '30px', width: '30px' }}
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 p-1 rounded-full"
                                            style={{ height: '30px', width: '30px' }}
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </>
                                )}
                                <a href="#" className="font-semibold text-blue-900 hover:underline">
                                    See More
                                </a>
                            </div>
                        </div>

                        <Swiper
                            ref={swiperRef}
                            modules={[Pagination]}
                            slidesPerView={cardsToShowFeatured}
                            spaceBetween={20}
                            // navigation
                            pagination={{
                                clickable: true,
                            }}
                            speed={800}
                            className="mySwiper"


                        >
                            {CardFeatured.map((card, index) => (
                                <SwiperSlide key={index} className="p-3 pt-4 rounded-xl">
                                    <div className="relative bg-white shadow-md rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300">
                                        <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-4 py-1 rounded-br-xl rounded-tl-xl z-10">
                                            <h3 className="text-lg font-semibold">{card.name}</h3>
                                        </div>

                                        <div className="overflow-hidden w-full mb-4 h-96 rounded-t-xl">
                                            <img
                                                src={card.img}
                                                alt="Real Estate"
                                                className="object-cover w-full h-full rounded-t-xl"
                                            />
                                        </div>

                                        <div className="pl-6 pb-6">
                                            <p className="text-gray-600">{card.description}</p>
                                            <button onClick={handelRealestates} className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                                {card.buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.section>


                {/* Featured Real Estates */}
                {/* <motion.section
                    className="container mx-auto my-6 px-8 md:px-7 py-6 md:my-10"
                    initial="hidden"
                    animate={control}
                >
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between items-center">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center px-3">Featured Listings</h2>
                            <div className="flex items-center space-x-4 justify-center">
                                {CardFeatured.length >= 4 && (
                                    <>
                                        <button
                                            onClick={() => prevCardSlide('featured')}
                                            className="border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                                            style={{ height: '30px', width: '30px' }}
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        <button
                                            onClick={() => nextCardSlide('featured')}
                                            className="border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                                            style={{ height: '30px', width: '30px' }}
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </>
                                )}
                                <a
                                    href="#"
                                    onClick={handelRealestates}
                                    className="text-blue-900 font-semibold hover:underline"
                                >
                                    See all
                                </a>
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
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 pt-4 rounded-xl"
                                            style={{ flex: `0 0 ${100 / cardsToShowFeatured}%` }}
                                        >
                                            <div className="relative bg-white shadow-md rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300">

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
                                                    <button onClick={handelRealestates} className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
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
                </motion.section> */}


                {/* upcoming events section */}
                <motion.section
                    className="container mx-auto my-6 md:px-10 px-6 py-6 md:my-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}

                >
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 px-3 text-center">Upcoming Events</h2>
                            <div className="flex space-x-2 justify-center">
                                <button
                                    onClick={() => prevCardSlide('upcoming')}
                                    className="left-0 top-1/2 transform -translate-y-1/2 border border-blue-900 bg-gray-50 hover:bg-gray-100 text-blue-900 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    onClick={() => nextCardSlide('upcoming')}
                                    className="right-0 top-1/2 transform -translate-y-1/2 border border-blue-900 bg-gray-50 hover:bg-gray-100 text-blue-900 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaChevronRight />
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
                                    {CardUpe.map((card, index) => {
                                        const { day, month } = formatDate(card.date);

                                        return (
                                            <div
                                                key={index}
                                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 pt-4"
                                                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                                            >
                                                <div className="relative bg-white shadow-md rounded-xl overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300">

                                                    <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                                        <span className="uppercase font-bold">{getDaysLeft(card.date)}</span>
                                                    </div>

                                                    <div
                                                        className="text-sm absolute top-0 right-0  bg-blue-950 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 transition duration-500 ease-in-out"
                                                    >
                                                        <span className="font-bold">{day}</span>
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
                        <div className="flex justify-center mt-4 space-x-2">
                            {Array.from({
                                length: Math.ceil(totalCards / cardsToShow) + (window.innerWidth > 768 && window.innerWidth < 1200 ? 2 : 1) //for less than 768 need review add one dot
                            }, (_, index) => (
                                <div
                                    key={index}
                                    className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-900' : 'bg-gray-300'}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                        {/* {CardUpe.length >= 5 && (
                            <div className="flex justify-center mt-4 space-x-2">
                                {Array(Math.ceil(totalCards / cardsToShow)).fill().map((_, i) => (
                                    <button
                                        key={i}
                                        className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-blue-900' : 'bg-gray-300'}`}
                                        onClick={() => setCurrentIndex(i + 1)}
                                    ></button>
                                ))}
                            </div>
                        )} */}
                    </div>
                </motion.section>



                {/* Why E-Expo */}

                <section className=' bg-gray-200'>
                    <div className='container mx-auto my-6 md:px-10 px-7 py-6 md:my-12'>
                        <h2
                            className="text-3xl font-bold mb-8 text-blue-900 text-center md:text-left">
                            Why E-Expo?
                        </h2>
                        <div className="flex flex-col-reverse md:flex-row gap-8">
                            <motion.div
                                variants={fadeIn("right", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                className="flex-1">
                                <p className="text-gray-700 leading-relaxed">
                                    E-Expo offers an advanced, interactive platform designed to elevate
                                    the real estate experience. With 3D property tours, real estate developers
                                    can showcase properties in immersive detail, allowing potential buyers to
                                    explore spaces as if they were there in person. Video conferencing and live
                                    chat features foster seamless communication, enabling real-time discussions,
                                    personalized consultations, and instant answers to questions.
                                    This powerful combination not only broadens reach but also enhances
                                    engagement, making E-Expo the ideal solution for Real Estate developers
                                    looking to connect with clients more dynamically and effectively with
                                    minimized cost and effort.
                                </p>
                                <button onClick={handelRealestates} className="flex items-center justify-center space-x-2 mt-5 border border-blue-950 font-semibold bg-gray-50 text-blue-950 w-40 px-2 py-2 rounded-md hover:border-blue-950 hover:bg-blue-950 hover:text-white transition duration-300">
                                    <span>Learn More</span>
                                    <FaArrowRight />
                                </button>

                            </motion.div>

                            <motion.div
                                className="w-full md:w-1/2 lg:w-1/3 h-64 relative overflow-hidden rounded-lg"
                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                            >

                                <iframe
                                    src="https://app.cloudpano.com/tours/t1LtFvj5DK"
                                    title="CloudPano 3D Tour"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allowFullScreen>
                                </iframe>

                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Service Section */}

                {/* <section ref={ourserviceRef} className="container mx-auto my-6 md:px-10 px-7 py-6 md:my-12"> */}
                <section ref={ourserviceRef} className="container mx-auto my-6 md:px-10 px-7 py-6 md:my-12">
                    <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center sm:text-left">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                        {serviceCards.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                // style={{ y }} 
                                className="relative group bg-white shadow-md rounded-xl overflow-hidden"
                            >
                                <div className="flex justify-center items-center h-64">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-3/4 h-3/4 object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-blue-900 pb-2 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-blue-950 bg-opacity-100 flex flex-col justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="flex justify-center items-center h-64">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-3/4 h-3/4 object-contain transition-opacity duration-300 delay-300 opacity-0 group-hover:opacity-100"
                                        />
                                    </div>
                                    <h3 className="text-xl px-6 font-semibold text-white pb-2 transition-opacity duration-500 delay-500 opacity-0 group-hover:opacity-100">
                                        {service.title}
                                    </h3>
                                    <p className="text-white px-6 delay-500 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Banner Section */}
                <motion.section
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="container mx-auto my-6 px-3 py-6 md:my-12">
                    <div className="relative w-full h-48 sm:h-32 md:h-36 lg:h-44 xl:h-52 overflow-hidden ">
                        <div className="absolute inset-0 transition-transform duration-1000 ease-in-out">
                            <img
                                src={adv2}
                                className="w-full sm:h-full h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* advertizement section */}
                <section className='container mx-auto my-6 md:px-10 px-7 py-6 md:my-12'>
                    <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center md:text-left">
                        Advertisements
                    </h2>
                    <div className="relative overflow-hidden shadow-md rounded-xl">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlideadv * 100}%)` }}
                        >
                            {Advertisement.map((ad) => (
                                <div
                                    key={ad.id}
                                    className="md:flex flex-shrink-0 w-full  gap-8"
                                    style={{ width: '100%' }}>
                                    <div className="w-full md:w-1/2 lg:w-5/12 h-80 relative overflow-hidden ">
                                        <img
                                            src={ad.image}
                                            alt={`Advertisement ${ad.id}`}
                                            className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 pt-3">
                                        <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                                            {ad.title}
                                        </h3>
                                        <p className="text-gray-600 text-md leading-relaxed px-2">
                                            {ad.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {Advertisement.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlideadv ? 'bg-blue-900' : 'bg-gray-300'
                                        }`}
                                    onClick={() => setCurrentSlideAdv(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* news section */}
                <motion.section
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="container mx-auto my-6 md:px-10 px-7 py-6 md:my-12"
                >

                    <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center sm:text-left">Latest News</h2>
                    <div className="grid md:grid-cols-3 grid-cols-1 sm:gap-6  justify-center">
                        <div className="bg-white shadow-md rounded-xl">

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

                        <div className="bg-white shadow-md rounded-xl">

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

                        <div className="bg-white shadow-md rounded-xl">

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
                </motion.section>

                {/* Contact us section */}
                <section>

                    <div className="container mx-auto my-12 md:px-10 px-7 py-3 md:my-5 grid grid-cols-1 md:grid-cols-2 gap-8" id="contact_us" ref={ref}>
                        <motion.div
                            className="bg-white shadow-md p-6 rounded-xl"
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}>
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

                                <button className="mt-6 border font-semibold bg-blue-900  text-white w-24 px-3 py-2 rounded-lg hover:border-blue-900 hover:bg-gray-100 hover:text-blue-900 transition duration-300">
                                    Submit
                                </button>
                            </form>
                        </motion.div>


                        <motion.div
                            className="bg-white shadow-md p-6 rounded-xl"
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}>
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
                                    className="w-full h-72 border-0 rounded-xl shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Home
