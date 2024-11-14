
// Featured Listing Section

{/* <motion.section
    className="container mx-auto my-6 px-8 md:px-7 py-6 md:my-10"
    initial="hidden"
    animate={control}
>
    <div className="container mx-auto">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center px-3">Featured Listings</h2>
            <div className="flex items-center space-x-4 justify-center">
                {CardFeatured.length >= 4 && (
                    <>
                        <button
                            onClick={() => prevCardSlide('featured')}
                            className="border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                            style={{ height: '30px', width: '30px' }}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={() => nextCardSlide('featured')}
                            className="border border-blue-950 bg-gray-50 hover:bg-gray-100 text-blue-950 text-center p-1 rounded-full z-10"
                            style={{ height: '30px', width: '30px' }}
                        >
                            <FaChevronRight />
                        </button>
                    </>
                )}
                <a
                    href="#"
                    onClick={handelRealestates}
                    className="text-blue-900 font-semibold hover:underline"
                >
                    See all
                </a>
            </div>
        </div>

        <div className="relative">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndexFeatured * (100 / cardsToShowFeatured)}%)`
                    }}
                >
                    {CardFeatured.map((cardfeatured, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 pt-4 rounded-xl"
                            style={{ flex: `0 0 ${100 / cardsToShowFeatured}%` }}
                        >
                            <div className="relative bg-white shadow-md rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300">

                                <div className="absolute top-0 left-0 flex items-center bg-blue-950 text-white px-4 py-1 rounded-br-xl rounded-tl-xl z-10">
                                    <h3 className="text-lg font-semibold">{cardfeatured.name}</h3>
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
                                    <button onClick={handelRealestates} className="mt-4 border font-semibold border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300">
                                        {cardfeatured.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</motion.section> */}

               // Upcoming events

                {/* <motion.section
                    className="container mx-auto my-6 md:px-10 px-6 py-6 md:my-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}

                >
                    <div className="container mx-auto">
                        <div className="sm:flex justify-between">
                            <h2 className="text-3xl font-bold mb-6 text-blue-900 px-3 text-center">Upcoming Events</h2>
                            <div className="flex space-x-2 justify-center">
                                <button
                                    onClick={() => prevCardSlide('upcoming')}
                                    className="left-0 top-1/2 transform -translate-y-1/2 border border-blue-900 bg-gray-50 hover:bg-gray-100 text-blue-900 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    onClick={() => nextCardSlide('upcoming')}
                                    className="right-0 top-1/2 transform -translate-y-1/2 border border-blue-900 bg-gray-50 hover:bg-gray-100 text-blue-900 text-center p-1 rounded-full z-10"
                                    style={{ height: '30px', width: '30px' }}
                                >
                                    <FaChevronRight />
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
                                                        <span className="font-bold">{day}</span>
                                                        <span className="uppercase font-bold">{month}</span>
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
                                length: Math.ceil(totalCards / cardsToShow) + (window.innerWidth > 768 && window.innerWidth < 1200 ? 2 : 1)
                            }, (_, index) => (
                                <div
                                    key={index}
                                    className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-900' : 'bg-gray-300'}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </motion.section> */}

                // Advertizements

            //     <section className='container mx-auto my-6 md:px-10 px-7 py-6 md:my-12'>
            //     <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center md:text-left">
            //         Advertisements
            //     </h2>
            //     <div className="relative overflow-hidden shadow-md rounded-xl">
            //         <div
            //             className="flex transition-transform duration-700 ease-in-out"
            //             style={{ transform: `translateX(-${currentSlideadv * 100}%)` }}
            //         >
            //             {Advertisement.map((ad) => (
            //                 <div
            //                     key={ad.id}
            //                     className="md:flex flex-shrink-0 w-full  gap-8"
            //                     style={{ width: '100%' }}>
            //                     <div className="w-full md:w-1/2 lg:w-5/12 h-80 relative overflow-hidden ">
            //                         <img
            //                             src={ad.image}
            //                             alt={`Advertisement ${ad.id}`}
            //                             className="w-full h-full object-cover" />
            //                     </div>
            //                     <div className="flex-1 pt-3">
            //                         <h3 className="text-2xl font-semibold mb-2 text-blue-900">
            //                             {ad.title}
            //                         </h3>
            //                         <p className="text-gray-600 text-md leading-relaxed px-2">
            //                             {ad.description}
            //                         </p>
            //                     </div>
            //                 </div>
            //             ))}
            //         </div>

            //         <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            //             {Advertisement.map((_, index) => (
            //                 <span
            //                     key={index}
            //                     className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlideadv ? 'bg-blue-900' : 'bg-gray-300'
            //                         }`}
            //                     onClick={() => setCurrentSlideAdv(index)}
            //                 ></span>
            //             ))}
            //         </div>
            //     </div>
            // </section>
