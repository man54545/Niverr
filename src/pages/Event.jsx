import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Event = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
            <Header />
            <section className="pt-5 mt-5 event">
                <div className="container">
                    <h2 className='fw-8 mb-5 cursor-pointer'>On-Demand Events</h2>
                    <div className="row align-items-md-start align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-9">
                            <div className="event-inner mb-5 shadow">
                                <img src="assets/img/banner-2.jpg" alt="img" width="100%" />
                                <div className="event-content p-xl-4 p-lg-3 p-4">
                                    <p className='fw-8' style={{fontSize:'14px'}}>FREELANCER TIPS</p>
                                    <h4 className='fw-8 mb-3'>Capture the Moves: Capturing Motion in Stills</h4>
                                    <a href=" " className="text-white px-3 mt-3 btn bg-color-2">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-9">
                            <div className="event-inner mb-5 shadow">
                                <img src="assets/img/banner-1.jpg" alt="img" width="100%" />
                                <div className="event-content p-xl-4 p-lg-3 p-4">
                                    <p className='fw-8' style={{fontSize:'14px'}}>FREELANCER TIPS</p>
                                    <h4 className='fw-8 mb-3'>Capture the Career: Landing Commercial Work Through Personal Projects</h4>
                                    <a href=" " className="text-white px-3 mt-3 btn bg-color-2">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-9">
                            <div className="event-inner mb-5 shadow">
                                <img src="assets/img/banner-3.jpg" alt="img" width="100%" />
                                <div className="event-content p-xl-4 p-lg-3 p-4">
                                    <p className='fw-8' style={{fontSize:'14px'}}>FREELANCER TIPS</p>
                                    <h4 className='fw-8 mb-3'>Capture the Story: The Ultimate Photo Storytelling Workshop</h4>
                                    <a href=" " className="text-white px-3 mt-3 btn bg-color-2">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-9">
                            <div className="event-inner mb-5 shadow">
                                <img src="assets/img/banner-5.jpg" alt="img" width="100%" />
                                <div className="event-content p-xl-4 p-lg-3 p-4">
                                    <p className='fw-8' style={{fontSize:'14px'}}>FREELANCER TIPS</p>
                                    <h4 className='fw-8 mb-3'>Capture the Moves: Capturing Motion in Stills</h4>
                                    <a href=" " className="text-white px-3 mt-3 btn bg-color-2">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-9">
                            <div className="event-inner mb-5 shadow">
                                <img src="assets/img/banner-4.jpg" alt="img" width="100%" />
                                <div className="event-content p-xl-4 p-lg-3 p-4">
                                    <p className='fw-8' style={{fontSize:'14px'}}>FREELANCER TIPS</p>
                                    <h4 className='fw-8 mb-3'>Capture the Career: Landing Commercial Work Through Personal Projects</h4>
                                    <a href=" " className="text-white px-3 mt-3 btn bg-color-2">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-9">
                            <div className="event-inner mb-5 shadow">
                                <img src="assets/img/banner-6.jpg" alt="img" width="100%" />
                                <div className="event-content p-xl-4 p-lg-3 p-4">
                                    <p className='fw-8' style={{fontSize:'14px'}}>FREELANCER TIPS</p>
                                    <h4 className='fw-8 mb-3'>Capture the Story: The Ultimate Photo Storytelling Workshop</h4>
                                    <a href=" " className="text-white px-3 mt-3 btn bg-color-2">Watch Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <a href=" " className="text-white px-5 text-center mx-auto d-table py-3 mt-3 btn bg-color-2">Show More</a>
                </div>
            </section>
            <Footer />       
        </>
    )
}

export default Event;