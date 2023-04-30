import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const AboutMe = () => {
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