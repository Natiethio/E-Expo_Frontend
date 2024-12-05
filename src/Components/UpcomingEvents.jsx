import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import eventsData from './UpcomingEvents.json';

import Advertisement from './advertizement.json'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Hero1 from '/Images/Hero1.mp4'
import { startOfWeek, endOfWeek, isWithinInterval, parseISO, differenceInDays, formatDistanceToNow } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import './swiper.css'
import './upcomingevents.css'

const UpcomingEvents = () => {
  const [page, setPage] = useState('Upcoming_Events')
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [filter, setFilter] = useState('All');
  const [pageno, setPageno] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(6);
  const itemsPerPage = 4;


  useEffect(() => {
    if (filter === 'All') {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(eventsData.filter(event => event.type === filter));
    }
    setPageno(1);
  }, [filter]);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice((pageno - 1) * itemsPerPage, pageno * itemsPerPage);

  const handleNextPage = () => {
    if (pageno < totalPages) setPageno(pageno + 1);
  };

  const handlePrevPage = () => {
    if (pageno > 1) setPageno(pageno - 1);
  };

  const handlePageClick = (page) => {
    setPageno(page);
  };

  const getThisWeeksEvents = () => {
    const currentDate = new Date();
    const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
    const endOfWeekDate = endOfWeek(currentDate, { weekStartsOn: 1 });

    return eventsData.filter(event => {
      const eventDate = parseISO(event.date);
      return isWithinInterval(eventDate, { start: startOfWeekDate, end: endOfWeekDate });
    });
  };

  const getTrendingEvents = () => {
    return eventsData.filter(event => event.trending === "true");
  };

  const getDaysLeft = (date) => {
    // const eventDate = parseISO(date);
    // return differenceInDays(eventDate, new Date());
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  return (
    <>
      <Helmet>
        <title>Upcoming_Events</title>
      </Helmet>
      <Header page={page} />
      <div className="min-h-screen bg-gray-50 pt-24">

        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white xl:h-[580px] h-[550px] flex items-center justify-center mx-auto overflow-hidden my-1">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={Hero1}
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        <section className="container mx-auto px-6 py-14 grid lg:grid-cols-3 grid-col-1 gap-10">
          <div className="lg:col-span-2 col-span-3">
            <div className="md:flex md:space-y-0 justify-between items-center mb-14">
              <h2 className="md:text-3xl sm:text-xl text-lg font-bold text-blue-900">Upcoming Events</h2>
              <div className="sm:flex space-x-4 pt-2 sm:space-y-0 space-y-2">
                {['All', 'Investor Webinar', 'Virtual Conference'].map(type => (
                  <button
                    key={type}
                    className={`px-2 py-1 rounded-full font-semibold shadow-md ${filter === type ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'}`}
                    onClick={() => handleFilterChange(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Cards */}
            {paginatedEvents.map(event => (
              <div key={event.id} className="relative w-full flex flex-col md:flex-row bg-white border border-1 border-gray-300 rounded-lg shadow-sm overflow-hidden mb-9">
                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-3 py-1 rounded-br-lg z-10">
                  <span className="uppercase font-bold">{getDaysLeft(event.date)}</span>
                </div>
                
                <img src={event.image} alt={event.title} className="w-full md:w-1/3 h-52 object-cover aspect-video" />
                
                <div className="flex flex-col justify-between p-4">
                  <div>
                    <p className="text-sm text-left text-gray-500">{new Date(event.date).toDateString()}</p>
                    <h3 className="text-xl font-semibold text-blue-900">{event.title}</h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </div>
                  <button className="border mt-4 self-start bg-blue-900 text-white px-4 py-2 rounded font-semibold hover:bg-white hover:border-blue-900 hover:text-blue-900 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              <button onClick={handlePrevPage} disabled={pageno === 1} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                <FaChevronLeft />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  className={`px-3 py-1 rounded-full font-semibold ${pageno === index + 1 ? 'bg-blue-900 text-white' : 'bg-gray-100 text-blue-900 border border-blue-900'
                    } `}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={handleNextPage} disabled={pageno === totalPages} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                <FaChevronRight />
              </button>
            </div>
            
          </div>

          {/* Right Column */}
          <div className="lg:block lg:col-span-1 col-span-3 lg:mt-24">
            <div className="bg-white p-4 shadow-sm border border-1 border-gray-300 rounded-md mb-10">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">This Week's Events</h3>
              {getThisWeeksEvents().map(event => (
                <a key={event.id} href="#" className="flex items-center mb-4">
                  <img src={event.image} alt={event.title} className="w-12 h-12 object-cover rounded-full mr-3" />
                  <div>
                    <p className="text-sm font-semibold">{event.title}</p>
                    <p className="text-xs text-gray-500">{new Date(event.date).toDateString()}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white p-4 shadow-sm border border-1 border-gray-300 rounded-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Trending Events</h3>
              {getTrendingEvents().map(event => (
                <a key={event.id} href="#" className="flex items-center mb-4">
                  <img src={event.image} alt={event.title} className="w-12 h-12 object-cover rounded-full mr-3" />
                  <div>
                    <p className="text-sm font-semibold">{event.title}</p>
                    <p className="text-xs text-gray-500">{new Date(event.date).toDateString()}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        <section className="container mx-auto  md:px-10 px-7   mb-9 mt-6 ">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center md:text-left">
            Advertisements
          </h2>

          <div className="relative overflow-hidden shadow-md rounded-xl">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              // pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              speed={1000}
              className="w-full mySwiper"
            >
              {Advertisement.map((ad) => (
                <SwiperSlide key={ad.id}>
                  <div className="md:flex flex-shrink-0 w-full gap-8">
                    <div className="w-full md:w-1/2 lg:w-5/12 h-80 relative overflow-hidden">
                      <img
                        src={ad.image}
                        alt={`Advertisement ${ad.id}`}
                        className="w-full h-full object-cover z-50"
                      />
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                        {ad.title}
                      </h3>
                      <p className="text-gray-600 text-md leading-relaxed px-2">
                        {ad.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
      <Footer page={page} />
    </>
  )
}

export default UpcomingEvents
