import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Select = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

  return (
    <>
        <Header />
        <section className="pt-5 mt-5 select">
            <div className="container">
                <h2 className='text-center fw-8 mb-5 cursor-pointer'>Ready to join Fiverr Select?</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="select-inner text-center line">
                            <div className="select-content py-4">
                                <div className="icon"><i className='bi bi-image text-white display-3'></i></div>
                                <h4 className='fw-8 mb-0 mt-4'>10 orders</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="select-inner text-center">
                            <div className="select-content py-4">
                                <div className="icon"><i className='bi bi-camera text-white display-3'></i></div>
                                <h4 className='fw-8 mb-0 mt-4'>$500 in total</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <a href=" " className="text-white px-5 text-center mx-auto d-table py-3 mt-5 btn bg-color-2">Check Your Status</a>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Select;