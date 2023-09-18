import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Work = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
      
  return (
    <>
        <Header />
        <section className="pt-5 mt-5 work">
            <div className="container">
                <h2 className='text-center fw-8 mb-5 cursor-pointer'>How it works</h2>
                <div className="row align-items-md-start align-items-center ">
                    <div className="col-lg-4 col-sm-6">
                        <div className="work-inner text-center">
                            <div className="work-content py-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>5 Ways to Enhance Your Work Website in 2023</h4>
                                <p>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="work-inner text-center">
                            <div className="work-content py-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>3 Ways Using Fiverr Freelancers Can Help You Scale Your Work</h4>
                                <p>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="work-inner text-center">
                            <div className="work-content py-4">
                                <h6 className='fw-8'>FREELANCER TIPS</h6>
                                <h4 className='fw-8 mb-3'>How No-Code Solutions Let You Build Apps Without Coding Skills</h4>
                                <p>Fiverr shares findings from its second study of Anywhere Workers who travel while working remotely.</p>
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

export default Work;