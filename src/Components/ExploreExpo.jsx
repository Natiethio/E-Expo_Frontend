import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

const ExploreExpo = () => {

    const [page, setpage] = useState('Explore_Expo')
    
    return (
        <>
            <Helmet>
                <title>Explore_Expo</title>
            </Helmet>
            <Header page={page} />
            <div className="min-h-screen bg-gray-50 pt-16">
                
            </div>
            <Footer />
        </>
    )
}

export default ExploreExpo
