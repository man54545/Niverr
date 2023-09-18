import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Trust from '../components/Trust';
import Type from '../components/Type';
import Talent from '../components/Talent';
import MarketPlace from '../components/MarketPlace';
import Team from '../components/Team';
import Projects from '../components/Projects';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

  const [cookies2 ,setCookie2] = useCookies(['pop']);
  const [show, setShow] = useState(false);

  setInterval(()=>{
    setShow(true);
  },6000);

  const LoginPopup = () =>{
    setCookie2('pop', true, {maxAge: 3600});
  }

  useEffect(()=>{
      window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myCookieConsent"
        style={{ background: '#333' }}
        buttonStyle={{ color: '#fff', background: '#2ea64a' }}
        expires={1}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      {show ? 
        <section>
          <div className="row align-items-center justify-content-center w-100 mx-auto vh-100 position-absolute">
            <div className={!cookies2.pop ? 'pop col-lg-7 col-md-9' : 'pop col-lg-7 col-md-9 opacity-0'}>
            <Link className='text-dark position-absolute' style={{top : '20px', right : '25px', fontSize : '20px'}} onClick={LoginPopup}><i className="bi bi-x-lg"></i></Link>
                <div className="row shadow-lg" style={{borderRadius : '20px'}}>
                    <div className="col-6 px-0 d-sm-block d-none">
                        <img src="/assets/img/pop.png" alt="img" width="100%" style={{borderTopLeftRadius : '20px',borderBottomLeftRadius : "20px"}}/>
                    </div>
                    <div className="col-6 px-0">
                      <div className="pop-inner p-xl-5 p-lg-4 p-4 d-flex h-100 justify-content-between flex-column bg-white">
                          <div>
                              <h3 className='fs-4 fw-8 mb-3'>Create a new account</h3>
                              <p className='mb-xl-5 mb-lg-4'>Already have an account?<Link to="/login">Sign In</Link></p>
                              <Link className='w-100 border py-2 text-dark fw-8 rounded d-block text-center mb-3'>Continue with Google</Link>
                              <Link className='w-100 border py-2 text-dark fw-8 rounded d-block text-center mb-3'>Continue with Email</Link>
                              <p className='fw-8 text-secondary text-center mb-3'>OR</p>
                              <div className="row">
                                  <div className="col-6"><Link className='border py-2 text-dark fw-8 rounded d-block text-center mb-3'>Apple</Link></div>
                                  <div className="col-6"><Link className='border py-2 text-dark fw-8 rounded d-block text-center mb-3'>Facebook</Link></div>
                              </div>
                          </div>
                          <div>
                            <p className='mb-0' style={{fontSize : '12px'}}>By joining, you agree to the Fiverr <Link to="/service">Terms of Service</Link> and to occasionally receive emails from us. Please read our <Link to="/policy">Privacy Policy</Link> to learn how we use your personal data</p>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      : ''}

      <Header />
      <Banner />
      <Type />
      <Trust />
      <Talent />
      <MarketPlace />
      <Team />
      <Projects />
      <Footer />
    </>
  )
}

export default Home;