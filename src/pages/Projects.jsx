import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import Footer from '../components/Footer';

const TRAKING_ID = "G-X2SJDWTRTV";
ReactGA.initialize(TRAKING_ID);

const Projects = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='bg-dark lg:py-24 md:pb-20 2xl:py-36' style={{ marginBottom: 250 }}>
        <div className='flex justify-center sm:pt-16'>
          <p className='text-2xl text-gray-100 font-syne tracking-widest leading-1 font-bold mx-10'>
            COMING SOON ...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects