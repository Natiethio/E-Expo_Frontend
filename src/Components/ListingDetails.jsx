import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import companiesData from './Realestates.json';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ListingDetails = () => {
    const [page, setPage] = useState('Listing Details')
    const [selectedTour, setSelectedTour] = useState(null);
    
    return (
        <>

            <Helmet>
                <title>Listing Details</title>
            </Helmet>
            <Header page={page} />

            {/* Hero Section */}
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

            <Footer/>
        </>
    )
}

export default ListingDetails
