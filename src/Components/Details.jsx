import React, { useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import DetailsRealestate from './details.json'
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
const Details = () => {
    const [selectedCategory, setSelectedCategory] = useState('Planned');
    const filteredData = DetailsRealestate.filter(item => item.type === selectedCategory);
    const {companyName} = useParams();
    const Expo = useNavigate();

    const handelExpo = () => {
        Expo('/Expo')
    }

    return (

        <>

            <Helmet>
                <title>Details</title>
            </Helmet>
            <Header />

            

                {/* Hero Section */}

                <div className="px-3">

                <section className="relative bg-blue-900 text-white h-[500px] flex items-center justify-center my-2">
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
                </section>

                {/* Description Section */}

                <section className="flex flex-col md:flex-row my-14">
                    <img src="https://via.placeholder.com/100" alt="Project" className="w-full md:w-1/2 mb-4 md:mb-0" />
                    <div className="md:ml-8">
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">{companyName} Real Estate</h2>
                        <p className="text-gray-700">
                            This is a description of the project. It provides detailed information about the project goals, scope, and other
                            relevant information.
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
                        className={`px-4 py-2 rounded-lg ${selectedCategory === 'Testimonials' ? 'bg-blue-900 text-white font-bold' : 'font-semibold bg-gray-300'}`}
                        onClick={() => setSelectedCategory('Testimonials')}
                    >
                        Testimonials
                    </button>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredData.map(item => (

                        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">


                            <div className="relative overflow-hidden w-full mb-4 h-80 rounded-t-xl">
                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                                    <span className="uppercase font-bold">{item.type}</span>
                                </div>
                                <img
                                    src={item.img}
                                    alt="Real Estate"
                                    className="object-cover w-full h-full rouDnded-t-xl"
                                />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{item.description}</h3>

                            </div>
                        </div>

                    ))}
                </section>

            
          
            </div>
            <Footer />
        </>
    )
}

export default Details






