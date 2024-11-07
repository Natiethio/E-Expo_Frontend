import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsRealestate from './details.json';
import Ltnews5 from '../Images/news5.jpg';
import { Helmet } from 'react-helmet';
import Realestates from './Realestates.json';
import Footer from './Footer';
import Header from './Header';
import CardUpe from './cardupcoming.json';
import { FaArrowRight, FaLocationDot, FaArrowLeft } from 'react-icons/fa6';
import { formatDistanceToNow } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import ListingDetails from './ListingDetails';

const Details = () => {
    const [selectedCategory, setSelectedCategory] = useState('OnSale');
    const [company, setCompany] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const [isScrolled, setIsScrolled] = useState(false);
    const { companyName } = useParams();
    const navigate = useNavigate();
    const DetailListing = useNavigate();
    const [page, setPage] = useState("Details")

    useEffect(() => {
        const RealestateCompany = Realestates.properties.find((item) => item.name === companyName);
        setCompany(RealestateCompany);
    }, [companyName]);

    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width >= 1200) setCardsToShow(4);
            else if (width >= 992) setCardsToShow(3);
            else if (width >= 768) setCardsToShow(2);
            else setCardsToShow(1);
        };

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const totalCards = CardUpe.length;

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextCardSlide();
        }, 3000);

        return () => clearInterval(autoSlide);
    }, [currentIndex, totalCards, cardsToShow]);

    const embedContainerRef = useRef(null);

    useEffect(() => {
        if (embedContainerRef.current) {
            const script = document.createElement("script");
            script.src = "https://app.cloudpano.com/public/shareScript.js";
            script.async = true;
            script.dataset.short = "859R893XXY";
            script.dataset.path = "tours";
            script.dataset.isSelfHosted = "false";
            script.width = "100%";
            script.height = "500px";


            embedContainerRef.current.appendChild(script);

            return () => {
                embedContainerRef.current.removeChild(script);
            };
        }
    }, []);

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

    

    if (!company) return <p>Company not found</p>;

    const filteredData = DetailsRealestate.filter((item) => item.type === selectedCategory);

    const nextCardSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < CardUpe.length - cardsToShow ? prevIndex + 1 : 0));
    };

    const prevCardSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : CardUpe.length - cardsToShow));
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return {
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'short' }).toUpperCase()
        };
    };

    const handelListing = (type,id) => {
        DetailListing(`/ListingDetails/${type}/${id}`);
    }

    return (
        <>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Header page={page} />

            {/* Hero Section */}
            <div className="px-3 bg-gray-50">
                <section className={`relative bg-blue-900 text-white xl:h-[580px] h-[550px] flex items-center justify-center  ${isScrolled ?  'my-5' : 'my-24'}`}>
                    <div className="w-full h-full">
                        <iframe
                            src={company.proptour}
                            title="CloudPano 3D Tour"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>

                {/* Company Information Section */}
                <section className="flex flex-col md:flex-row my-14 md:px-10 px-7  py-6">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 relative">
                        <img
                            src={company.imgSrc}
                            alt={`${companyName} Project`}
                            className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:ml-8 flex-1">
                        <h2 className="text-3xl font-bold mb-6 text-blue-900">{companyName} Real Estate</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            tincidunt, purus vel dictum tincidunt, elit felis gravida purus,
                            non malesuada nulla quam a lectus. Vivamus euismod volutpat sem
                            sed congue dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </section>

                {/* Category Selection Buttons */}
                <section className="flex justify-center mb-8 md:space-x-4 space-x-2">
                    {['OnSale', 'Under Construction', 'Testimonial'].map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-md ${selectedCategory === category ? 'bg-blue-900 text-white font-bold' : 'font-semibold bg-gray-300'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </section>

                {/* Filtered Data Display */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-16 px-10">
                    {filteredData.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative overflow-hidden w-full h-[250px] md:h-[300px] mb-4">
                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                    <span className="uppercase font-bold">{item.type}</span>
                                </div>
                                <img src={item.img} alt="Real Estate" className="object-cover w-full h-full" />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-800">{item.description}</h3>
                            </div>

                            <div className="flex justify-between pl-4 pb-5 space-x-1">
                                <div className='flex space-x-1 mt-2'>
                                    <FaLocationDot className="mt-1" />
                                    <h3 className="text-md font-semibold text-gray-700">{item.location}</h3>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handelListing(item.type, item.id)} className="mr-4 border font-semibold border-blue-950 text-blue-950 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-300">
                                        View More
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </section>

                <section className=" bg-gray-50 py-20 md:px-10 px-7">
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 px-3 text-center">Join {companyName}</h2>
                            <div className="flex space-x-2 justify-center">
                                <button
                                    onClick={prevCardSlide}
                                    className="left-0 top-1/2 transform -translate-y-1/2 border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaChevronLeft/>
                                </button>
                                <button
                                    onClick={nextCardSlide}
                                    className="right-0 top-1/2 transform -translate-y-1/2 border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
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
                                                <div className="relative bg-white shadow-md rounded-xl overflow-hidden transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300">

                                                    <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                                        <span className="uppercase font-bold">
                                                            {formatDistanceToNow(new Date(card.date), { addSuffix: true })}
                                                        </span>
                                                    </div>

                                                    <div
                                                        className="text-sm absolute top-0 right-0  bg-blue-950 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 transition duration-500 ease-in-out"
                                                    >
                                                        <span className="font-bold">{day}</span>
                                                        <span className="uppercase font-bold">{month}</span> 
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
                    </div>
                </section>
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Details;
