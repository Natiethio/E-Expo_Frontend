import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import companiesData from './Realestates.json';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Realestates = () => {

    const [page, setPage] = useState("Real_Estates")
    const [selectedTour, setSelectedTour] = useState(null);

    const Expo = useNavigate();
    const Detail = useNavigate();

    const handelExpo = () => {
        Expo('/Expo')
    }

    const handelDetail = (companyName) => {
        Detail(`/Details/${companyName}`);
    }

    useEffect(() => {
        setSelectedTour(companiesData.tours[1]);
    }, []);

    return (
        <>
            <Helmet>
                <title>Real_Estates</title>
            </Helmet>
            <Header page={page}/>

            {/* Hero Section */}
            <div className="min-h-screen bg-gray-50">
            <section className="relative bg-blue-900 text-white  h-[550px] flex items-center justify-center mx-3 my-16">
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


            <section className="container mx-auto py-12 px-2 ">

                <h2 className="text-3xl font-bold mb-9 text-blue-900 text-center sm:text-left">
                    Real Estate Companies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {companiesData.properties.map((company) => (
                        <div key={company.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative w-full h-80 rounded-t-xl bg-white flex items-center justify-center">
                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                    <span className="uppercase font-bold">Logo</span>
                                </div>
                                <img
                                    src={company.imgSrc}
                                    alt={company.name}
                                    className="w-3/5 h-3/5 object-contain"
                                />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{company.name}</h3>
                                <button
                                    onClick={() => handelDetail(company.name)}
                                    className="mt-4 border font-semibold border-blue-950 text-blue-950 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-300">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">

                    <h2 className="text-3xl text-center font-bold mb-9 text-blue-900  ">
                        More About Us
                    </h2>

                    <p className="text-gray-700 mb-8 text-base sm:text-lg">Stay tuned for more updates and details about our real estate services.</p>
                </div>
            </section>
            </div>
            <Footer />
        </>
    );
};

export default Realestates;
