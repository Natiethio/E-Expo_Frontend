import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

const ExploreExpo = () => {
    return (
        <>
            <Helmet>
                <title>Explore Expo</title>
            </Helmet>
            <Header />
            <div className="min-h-screen bg-gray-50 pt-16">
                
            </div>
            <Footer />
        </>
    )
}

export default ExploreExpo
