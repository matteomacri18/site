import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import ReactGA from 'react-ga';

const TRAKING_ID = "G-X2SJDWTRTV";
ReactGA.initialize(TRAKING_ID);

const AboutMe = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className='bg-dark lg:py-24 md:pb-20 2xl:py-36'>
        
      </div>
      <Footer />
    </div>
  )
}

export default AboutMe