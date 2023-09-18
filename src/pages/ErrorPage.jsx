import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ErrorPage = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Header />
      <section className='pt-5 mt-5 error w-100 row align-items-center text-center m-0 justify-content-center' style={{height: '500px'}}>
          <div>
            <h2 className='display-3 fw-8 mb-4'>404 Error Page</h2>
            <Link to="/" className='bg-color-2 py-3 px-4 text-white btn'>Back to Home</Link>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default ErrorPage;