import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Business = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

  return (
    <>
        <Header />
        <section className="pt-5 mt-5 business">
            <div className="container">
                <h2 className='fw-8 mb-5 cursor-pointer d-inline-block'>Businesses <i className="fs-5 bi bi-chevron-right"></i></h2>
                <div className="row align-items-md-start align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-6 col-9">
                        <div className="business-inner shadow mb-lg-0 mb-4">
                            <img src="/assets/img/banner-1.jpg" alt="img" width="100%" />
                            <div className="business-content p-xl-4 p-lg-3 p-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>5 Ways to Enhance Your Business Website in 2023</h4>
                                <p className='mb-0'>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-9">
                        <div className="business-inner shadow mb-lg-0 mb-4">
                            <img src="/assets/img/banner-2.jpg" alt="img" width="100%" />
                            <div className="business-content p-xl-4 p-lg-3 p-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>3 Ways Using Fiverr Freelancers Can Help You Scale Your Business</h4>
                                <p className='mb-0'>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-9">
                        <div className="business-inner shadow mb-lg-0 mb-4">
                            <img src="/assets/img/banner-3.jpg" alt="img" width="100%" />
                            <div className="business-content p-xl-4 p-lg-3 p-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>How No-Code Solutions Let You Build Apps Without Coding Skills</h4>
                                <p className='mb-0'>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Business;