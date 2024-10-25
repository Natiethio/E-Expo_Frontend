import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsRealestate from './details.json'
import Ltnews5 from '../Images/news5.jpg'
import { Helmet } from 'react-helmet';
import Realestates from './Realestates.json'
import Footer from './Footer';
import Header from './Header';
import CardUpe from './cardupcoming.json'
import { FaArrowRight, FaLocationDot } from 'react-icons/fa6';
import { formatDistanceToNow } from 'date-fns';
import { FaArrowLeft } from 'react-icons/fa';

const Details = () => {
    const [selectedCategory, setSelectedCategory] = useState('Planned');
    const filteredData = DetailsRealestate.filter(item => item.type === selectedCategory);
    const { companyName } = useParams();
    const [comapny, setCompany] = useState(null)
    const image = Realestates.filter(imgrs => imgrs.name === companyName)

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const Expo = useNavigate();

    const handelExpo = () => {
        Expo('/Expo')
    }

    useEffect(() => {
        const Realestate_Company = Realestates.find(R_company => R_company.name === companyName);
        setCompany(Realestate_Company);
    }, [companyName]);

    if (!comapny) {
        return <p>Company not found</p>;
    }

    const totalCards = CardUpe.length;

    // useEffect(() => {
    //     const autoSlide = setInterval(() => {
    //         nextCardSlide;
    //     }, 3000);

    //     return () => clearInterval(autoSlide);
    // }, [currentIndex, totalCards, cardsToShow]);




    const nextCardSlide = () => {
        if (currentIndex < totalCards - cardsToShow) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }


    const prevCardSlide = () => {

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(totalCards - cardsToShow);
        }
    }



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
                <title>Details</title>
            </Helmet>
            <Header />



            {/* Hero Section */}

            <div className="px-3 bg-gray-50">

                {/* <section className="relative bg-blue-900 text-white h-[600px] flex items-center justify-center my-2">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={''}
                        autoPlay
                        loop
                        muted
                        playsInline>
                    </video>

                    <div className="absolute inset-0 bg-black opacity-35"></div>

                    <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h1 className="text-4xl font-bold">Join the Latest Virtual Tours</h1>
                        <p className="mt-4 text-lg">Explore the future of real estate with 3D tours and live events.</p>
                        <button onClick={handelExpo} className="mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-900 transition duration-300">
                            Explore Expo
                        </button>
                    </div>
                </section> */}

                {/* <section className="relative bg-blue-900 text-white h-[600px] flex items-center justify-center my-2">
                    
                    <div className="w-full h-full">
                        <div
                            id="5D1XzHYvSuDD"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <script
                                type="text/javascript"
                                async
                                data-short="5D1XzHYvSuDD"
                                data-path="tours"
                                data-is-self-hosted="false"
                                width="100%"
                                height="100%"
                                src="https://app.cloudpano.com/public/shareScript.js"
                            ></script>
                            <p>jhuiuiui</p>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-black opacity-35"></div>

                    <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h1 className="text-4xl font-bold">Join the Latest Virtual Tours</h1>
                        <p className="mt-4 text-lg">
                            Explore the future of real estate with 3D tours and live events.
                        </p>
                        <button
                            onClick={handelExpo}
                            className="mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-900 transition duration-300"
                        >
                            Explore Expo
                        </button>
                    </div>
                </section> */}

                <section className="relative bg-blue-900 text-white h-[600px] flex items-center justify-center my-12">
                    <div className="w-full h-full">
                        <iframe
                            src="https://app.cloudpano.com/tours/5D1XzHYvSuDD"
                            title="CloudPano 3D Tour"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="absolute inset-0 bg-black opacity-10"></div>

                    {/* <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h1 className="text-4xl font-bold">Join the Latest Virtual Tours</h1>
                        <p className="mt-4 text-lg">
                            Explore the future of real estate with 3D tours and live events.
                        </p>
                        <button
                            onClick={handelExpo}
                            className="mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-900 transition duration-300"
                        >
                            Explore Expo
                        </button>
                    </div> */}
                </section>


                <section className="flex flex-col md:flex-row my-14 px-7 py-6">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 relative">
                        <img
                            src={comapny.imgSrc}
                            alt="Project"
                            className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:ml-8 flex-1">
                        <h2 className="text-3xl font-bold mb-6 text-blue-900">{companyName} Real Estate</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            tincidunt, purus vel dictum tincidunt, elit felis gravida purus,
                            non malesuada nulla quam a lectus. Vivamus euismod volutpat sem
                            sed congue dolor sit amet, consectetur adipiscing elit. Sed
                            tincidunt, purus vel dictum tincidunt, elit felis gravida purus,
                            non malesuada nulla quam a lectus. Vivamus euismod volutpat sem
                            sed congue
                        </p>
                    </div>
                </section>


                {/* Buttons Section */}
                <section className="flex justify-center mb-8 md:space-x-4 space-x-2 ">
                    <button
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'Planned' ? 'bg-blue-900 text-white font-bold' : 'font-semibold bg-gray-300'}`}
                        onClick={() => setSelectedCategory('Planned')}
                    >
                        Planned
                    </button>

                    <button
                        className={`px-4 py-2 rounded-lg ${selectedCategory === 'Under Construction' ? 'bg-blue-900 text-white font-bold' : 'font-semibold bg-gray-300'}`}
                        onClick={() => setSelectedCategory('Under Construction')}
                    >
                        Projects
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${selectedCategory === 'OnSale' ? 'bg-blue-900 text-white font-bold' : 'font-semibold bg-gray-300'}`}
                        onClick={() => setSelectedCategory('OnSale')}
                    >
                        OnSale
                    </button>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 px-5">
                    {filteredData.map(item => (
                        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative overflow-hidden w-full h-[250px] md:h-[300px] mb-4">
                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                    <span className="uppercase font-bold">{item.type}</span>
                                </div>
                                <img
                                    src={item.img}
                                    alt="Real Estate"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="text-lg sm:text-lg font-semibold text-gray-800">{item.description}</h3>
                            </div>
                            <div className="flex pl-4 pb-4 space-x-1">
                                <FaLocationDot className='mt-1' />
                                <h3 className="text-md font-semibold text-gray-700">{item.location}</h3>
                            </div>
                        </div>
                    ))}
                </section>

                <section className=" bg-gray-50 py-8 md:px-10">
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Join Us</h2>
                            <div className="flex space-x-2 justify-center">
                                <button
                                    onClick={prevCardSlide}
                                    className="left-0 top-1/2 transform -translate-y-1/2 border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}>
                                    <FaArrowLeft />
                                </button>
                                <button
                                    onClick={nextCardSlide}
                                    className="right-0 top-1/2 transform -translate-y-1/2 border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}>
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
                        <div className="flex justify-center mt-4 space-x-2">
                            {Array.from({
                                length: Math.ceil(totalCards / cardsToShow) + (window.innerWidth > 768 && window.innerWidth < 1200 ? 2 : 1) //for less than 768 need review add one dot
                            }, (_, index) => (
                                <div
                                    key={index}
                                    className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-900' : 'bg-gray-100'}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                </section>

            </div>
            <Footer />
        </>
    )
}

export default Details






