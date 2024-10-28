import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import ListingsData from './details.json';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ListingDetails = () => {
    const [page, setPage] = useState('Listing Details');
    const [selectedTour, setSelectedTour] = useState(null);
    const { Listingtype, id } = useParams();
    const [Listing, setListing] = useState(null);
    const [similarListings, setSimilarListings] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [totalCard, SetTotalCard] = useState(0)

    useEffect(() => {

        const ListingProperty = ListingsData.find((item) => String(item.id) === String(id));
        setListing(ListingProperty);
        if (ListingProperty) {
            setSelectedTour(ListingProperty.tour);
        }

        const filteredListings = ListingsData.filter(
            (item) => item.type === Listingtype && String(item.id) !== String(id)
        );
        setSimilarListings(filteredListings);
        if(similarListings){
            SetTotalCard(similarListings.length)
        }
    }, [id, Listingtype]);


    if (!Listing) {
        return <div>Loading...</div>;
    }


    const nextCardSlide = () => {
                if (currentIndex < totalCard - cardsToShow) {
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setCurrentIndex(0);
                }
        }
    

    const prevCardSlide = () => {
       
                if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                } else {
                    setCurrentIndex(totalCard - cardsToShow);
                }
        }
    


    return (
        <>
            <Helmet>
                <title>Listing Details</title>
            </Helmet>
            <Header page={page} />

            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative bg-blue-900 text-white h-[550px] flex items-center justify-center mx-3 my-16">
                    <div className="absolute inset-0 w-full h-full">
                        <iframe
                            src={selectedTour}
                            title="3D Tour"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>

                {/* Listing Information Section */}
                <section className="flex flex-col md:flex-row my-14 px-11 py-6">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 relative">
                        <img
                            src={Listing.img}
                            alt={Listing.title}
                            className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:ml-8 flex-1">
                        <h2 className="text-3xl font-bold mb-6 text-blue-900">{Listing.title}</h2>
                        <p className="text-gray-700">
                            {Listing.details}
                        </p>
                    </div>
                </section>

                {/* Similar Listing Section */}
                {/* <section>
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center px-3">Featured Listings</h2>
                            <div className="flex space-x-2 justify-center">
                                <button
                                    onClick={prevCardSlide}
                                    className="left-0 top-1/2 transform -translate-y-1/2 border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    onClick={nextCardSlide}
                                    className="left-0 top-1/2 transform -translate-y-1/2 border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
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
                                    {similarListings.map((cardfeatured, index) => (
                                        <div
                                            key={index}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 pt-4 rounded-xl"
                                            style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                                        >
                                            <div className="relative bg-white shadow-md rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300">
                                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-4 py-1 rounded-br-xl rounded-tl-xl z-10">
                                                    <h3 className="text-lg font-semibold">{cardfeatured.title}</h3>
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
                                                    <button
                                                         className="mr-4 border font-semibold border-blue-950 text-blue-950 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-300">
                                                        View More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
            <Footer />
        </>
    );
}


export default ListingDetails;
