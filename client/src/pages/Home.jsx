import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CnKiit from '../components/CnKiit';
import ActiveSlider from '../components/ActiveSlider';
import Countdown from '../components/Countdown';
import Events from '../components/Events';
import Footer from '../components/Footer';

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const targetDate = '2024-06-30T00:00:00';
  
  return (
    <div className>
        <Navbar/>
        <Hero/>
        <CnKiit/>
        <ActiveSlider/>
        <Countdown targetDate={targetDate} />
        <Events/>
        <Footer/>
    </div>
  )
}

export default Home