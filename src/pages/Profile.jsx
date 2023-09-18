import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Profile = () => {

  const loginData = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Header />
      <section className='py-5 profile'>
        <div className="container">
          <div className='profile-inner d-flex flex-wrap align-items-center justify-content-center'>
            <div lang='user_img'>
              <img src={loginData.img} alt='img' width={'300px'}/>
            </div>
            <div className='profile-content'>
              <h4>{loginData.username}</h4>
              <p>{loginData.desc}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Profile;