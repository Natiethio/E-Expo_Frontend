import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import companiesData from './Realestates.json';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Realestates = () => {

    const Expo = useNavigate();

    const handelExpo = () => {
        Expo('/Expo')
    }

    return (
        <>
            <Helmet>
                <title>Real Estates</title>
            </Helmet>
            <Header />

            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white h-[500px] flex items-center justify-center mx-4 my-2">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src=''
                    autoPlay
                    loop
                    muted
                    playsInline >
                </video>

                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <h1 className="text-4xl font-bold">Join the Latest Virtual Tours</h1>
                    <p className="mt-4 text-lg">Explore the future of real estate with 3D tours and live events.</p>
                    <button onClick={handelExpo} className="mt-6 font-bold border border-white text-white px-6 py-3 rounded hover:bg-white hover:border-blue-900 hover:text-blue-950 transition duration-300">
                        Explore Expo
                    </button>
                </div>
            </section>


            <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-bold mb-9 text-blue-900 text-center sm:text-left">
                    Our Real Estate Partners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
                    {companiesData.map(company => (
                        <div key={company.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* <img src={company.imgSrc} alt={company.name} className="w-full h-40 object-cover sm:h-48 md:h-52 lg:h-56" /> */}

                            <div className="relative overflow-hidden w-full mb-4 h-80 rounded-t-xl">
                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                    <span className="uppercase font-bold">Logo</span>
                                </div>
                                <img
                                    src={company.imgSrc}
                                    alt="Real Estate"
                                    className="object-cover w-full h-full rounded-t-xl"
                                />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{company.name}</h3>
                                <button className="mt-4 border font-semibold border-blue-900 text-blue-950 px-4 py-2 rounded-md hover:bg-blue-900  hover:text-white transition duration-300">
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

            <Footer />
        </>
    );
};

export default Realestates;
