import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

const UpcomingEvents = () => {

    const [page, setpage] = useState('Upcoming_Events')
  return (
    <>
    <Helmet>
        <title>Upcoming_Events</title>
    </Helmet>
    <Header page={page} />
    <div className="min-h-screen bg-gray-50 pt-16">
        
    </div>
    <Footer page={page}/>
    </>
  )
}

export default UpcomingEvents
