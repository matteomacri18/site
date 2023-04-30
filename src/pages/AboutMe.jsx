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
    <div className='text-white'>
      <Navbar />
      <Link to={'/about'}>
      <p className='text-white'>WORKING PROGRESS</p>
      </Link>
      <Footer />
    </div>
  )
}

export default AboutMe