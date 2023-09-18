import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Blog = () => {


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

  return (
    <>
        <Header />
        <section className="pt-5 mt-5 blog">
            <div className="container">
                <h2 className='fw-8 mb-5 cursor-pointer d-inline-block'>Blogs <i className="fs-5 bi bi-chevron-right"></i></h2>
                <div className="row align-items-md-start align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-6 col-9">
                        <div className="blog-inner shadow mb-lg-0 mb-4">
                            <img src="/assets/img/banner-1.jpg" alt="img" width="100%" />
                            <div className="blog-content p-xl-4 p-lg-3 p-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>Spain, Portugal, Australia and the US are the top destinations for Anywhere Workers</h4>
                                <p className='mb-0'>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-9">
                        <div className="blog-inner shadow mb-lg-0 mb-4">
                            <img src="/assets/img/banner-3.jpg" alt="img" width="100%" />
                            <div className="blog-content p-xl-4 p-lg-3 p-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>Here's to Writing a New Chapter; From Fiverr CEO</h4>
                                <p className='mb-0'>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely. On-demand talent. Ongoing expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-9">
                        <div className="blog-inner shadow mb-lg-0 mb-4">
                            <img src="/assets/img/banner-2.jpg" alt="img" width="100%" />
                            <div className="blog-content p-xl-4 p-lg-3 p-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>5 Reasons Why It's Important to Hire a Professional Event Photographer</h4>
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

export default Blog;