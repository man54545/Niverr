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

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <Trust />
      <Type />
      <Talent />
      <MarketPlace />
      <Team />
      <Projects />
      <Footer />
    </>
  )
}

export default Home;